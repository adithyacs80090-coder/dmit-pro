import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { FormInput } from '@/components/ui/FormInput'
import { apiClient } from '@/lib/api'
import { useAuthStore } from '@/stores/authStore'

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  centerName: z.string().min(2, 'Center name is required'),
  counselorName: z.string().min(2, 'Your name is required'),
  phone: z.string().optional(),
})

type RegisterForm = z.infer<typeof registerSchema>

export function RegisterPage() {
  const navigate = useNavigate()
  const login = useAuthStore((state) => state.login)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })
  
  const mutation = useMutation({
    mutationFn: async (data: RegisterForm) => {
      const response = await apiClient.post('/auth/register', data)
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
        <h2 className="text-h2 font-bold text-ink">Get Started</h2>
        <p className="text-small text-muted font-bold mt-2">
          Create your DMIT Pro counselor account
        </p>
      </div>
      
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="space-y-5">
        <FormInput
          label="Center Name"
          placeholder="Your Center Name"
          error={errors.centerName?.message}
          {...register('centerName')}
        />
        
        <FormInput
          label="Your Name"
          placeholder="Your Full Name"
          error={errors.counselorName?.message}
          {...register('counselorName')}
        />
        
        <FormInput
          label="Email Address"
          type="email"
          placeholder="counselor@example.com"
          error={errors.email?.message}
          {...register('email')}
        />
        
        <FormInput
          label="Password"
          type="password"
          placeholder="Min 8 characters"
          error={errors.password?.message}
          {...register('password')}
        />
        
        <FormInput
          label="Phone (Optional)"
          type="tel"
          placeholder="+91 98765 43210"
          error={errors.phone?.message}
          {...register('phone')}
        />
        
        {mutation.isError && (
          <div className="p-3 bg-clay/10 border border-clay/30 rounded-lg">
            <p className="text-small font-bold text-clay">
              {(mutation.error as any)?.response?.data?.error || 'Registration failed. Please try again.'}
            </p>
          </div>
        )}
        
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full py-3 px-6 bg-forest text-white font-black rounded-full hover:bg-forest/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {mutation.isPending ? 'Creating account...' : 'Create Account'}
        </button>
        
        <div className="text-center text-small font-bold text-muted">
          Already have an account?{' '}
          <a href="/login" className="text-forest hover:underline">
            Sign In
          </a>
        </div>
      </form>
    </div>
  )
}
