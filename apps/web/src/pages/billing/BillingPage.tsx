import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { apiClient } from '@/lib/api'
import { Check, Crown, Zap, Shield } from 'lucide-react'

export function BillingPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)

  const FEATURES = [
    t('billing.features.unlimited'),
    t('billing.features.languages'),
    t('billing.features.college'),
    t('billing.features.download'),
    t('billing.features.clients'),
    t('billing.features.support'),
    t('billing.features.whitelabel'),
    t('billing.features.analytics'),
  ]
  
  const createOrderMutation = useMutation({
    mutationFn: async () => {
      const response = await apiClient.post('/payments/create-order', {
        plan: 'annual',
      })
      return response.data
    },
    onSuccess: (data) => {
      // Load Razorpay script and open checkout
      loadRazorpay(data.orderId, data.amount)
    },
  })
  
  const loadRazorpay = (orderId: string, amount: number) => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.onload = () => {
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amount,
        currency: 'INR',
        name: 'DMIT Pro',
        description: 'Annual Subscription',
        order_id: orderId,
        handler: function (response: any) {
          verifyPayment(response)
        },
        prefill: {
          name: '',
          email: '',
        },
        theme: {
          color: '#00715f',
        },
      }
      
      const rzp = new (window as any).Razorpay(options)
      rzp.open()
      setIsProcessing(false)
    }
    document.body.appendChild(script)
  }
  
  const verifyPayment = async (response: any) => {
    try {
      await apiClient.post('/payments/verify', {
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
      })
      navigate('/dashboard')
    } catch (error) {
      console.error('Payment verification failed:', error)
    }
  }
  
  return (
    <div>
      <PageHeader
        eyebrow="Billing"
        title={t('billing.subscription')}
        subtitle="Choose the plan that works for you"
      />
      
      <div className="max-w-2xl mx-auto">
        <PacketPage className="text-center">
          <div className="w-16 h-16 bg-forest rounded-2xl flex items-center justify-center text-white mx-auto mb-6">
            <Crown className="w-8 h-8" />
          </div>
          
          <h3 className="text-h2 font-bold text-ink mb-2">{t('billing.annualPlan')}</h3>
          <div className="flex items-baseline justify-center gap-2 mb-4">
            <span className="text-[48px] font-black text-forest">{t('billing.price')}</span>
            <span className="text-[18px] text-muted font-bold">{t('billing.perYear')}</span>
          </div>
          <p className="text-[15px] text-muted font-bold mb-8">
            {t('billing.perMonth')}
          </p>
          
          <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-forest flex-shrink-0" />
                <span className="text-[15px] font-bold text-ink">{feature}</span>
              </div>
            ))}
          </div>
          
          <button
            onClick={() => {
              setIsProcessing(true)
              createOrderMutation.mutate()
            }}
            disabled={isProcessing || createOrderMutation.isPending}
            className="w-full py-4 px-8 bg-forest text-white font-black rounded-full hover:bg-forest/90 transition-colors disabled:opacity-50 text-[15px]"
          >
            {isProcessing ? t('billing.processing') : createOrderMutation.isPending ? 'Creating Order...' : t('billing.subscribe')}
          </button>
          
          <div className="mt-4 flex items-center justify-center gap-2 text-[12px] text-muted font-bold">
            <Shield className="w-4 h-4" />
            {t('billing.secure')}
          </div>
        </PacketPage>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="p-5 border border-line rounded-[10px] bg-page text-center">
            <Zap className="w-6 h-6 text-honey mx-auto mb-2" />
            <div className="text-h3 font-bold text-ink">{t('billing.instant')}</div>
            <div className="text-[12px] text-muted font-bold">{t('billing.activation')}</div>
          </div>
          <div className="p-5 border border-line rounded-[10px] bg-page text-center">
            <Shield className="w-6 h-6 text-lake mx-auto mb-2" />
            <div className="text-h3 font-bold text-ink">{t('billing.securePayment')}</div>
            <div className="text-[12px] text-muted font-bold">{t('billing.payments')}</div>
          </div>
          <div className="p-5 border border-line rounded-[10px] bg-page text-center">
            <Crown className="w-6 h-6 text-forest mx-auto mb-2" />
            <div className="text-h3 font-bold text-ink">{t('billing.premium')}</div>
            <div className="text-[12px] text-muted font-bold">{t('billing.premiumSupport')}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
