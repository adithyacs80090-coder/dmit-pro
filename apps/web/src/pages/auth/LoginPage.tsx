import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { FormInput } from '@/components/ui/FormInput'
import { apiClient } from '@/lib/api'
import { useAuthStore } from '@/stores/authStore'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

type LoginForm = z.infer<typeof loginSchema>

export function LoginPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })
  
  const mutation = useMutation({
    mutationFn: async (data: LoginForm) => {
      const response = await apiClient.post('/auth/login', data)
      return response.data
    },
    onSuccess: (data) => {
      login(data.counselor, data.tokens.accessToken)
      localStorage.setItem('refreshToken', data.tokens.refreshToken)
      navigate('/dashboard')
    },
  })
  
  return (
    <div className="packet-page" style={{ backgroundImage: 'none', borderTop: '6px solid var(--forest)' }}>
      <div className="text-center mb-8">
        <div className="w-12 h-12 bg-forest rounded-xl flex items-center justify-center text-white font-black text-2xl mx-auto mb-4">
          D
        </div>
        <h2 className="text-h2 font-bold text-ink">{t('auth.login')}</h2>
        <p className="text-small text-muted font-bold mt-2">
          Sign in to your DMIT Pro account
        </p>
      </div>
      
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-5">
        <FormInput
          label={t('auth.email')}
          type="email"
          placeholder="counselor@example.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <FormInput
          label={t('auth.password')}
          type="password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register('password')}
        />

        {mutation.isError && (
          <div className="p-3 bg-clay/10 border border-clay/30 rounded-lg">
            <p className="text-small font-bold text-clay">
              {(mutation.error as any)?.response?.data?.error || t('common.error')}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-3 px-6 bg-forest text-white font-black rounded-full hover:bg-forest/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? t('auth.signingIn') : t('auth.signIn')}
        </button>

        <div className="text-center text-small font-bold text-muted">
          {t('auth.noAccount')}{' '}
          <a href="/register" className="text-forest hover:underline">
            {t('auth.register')}
          </a>
        </div>
      </form>
    </div>
  )
}
