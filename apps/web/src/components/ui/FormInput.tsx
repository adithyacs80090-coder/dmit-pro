import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helper?: string
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, helper, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-[13px] font-bold text-ink">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            'w-full px-4 py-2.5 bg-page border border-line rounded-lg text-[15px] font-medium text-ink',
            'placeholder:text-muted/50',
            'focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20',
            'transition-colors',
            error && 'border-clay focus:border-clay focus:ring-clay/20',
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-[12px] font-bold text-clay">{error}</p>
        )}
        {helper && !error && (
          <p className="text-[12px] font-bold text-muted">{helper}</p>
        )}
      </div>
    )
  }
)
FormInput.displayName = 'FormInput'

export interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helper?: string
  options: Array<{ value: string; label: string }>
}

export const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, helper, options, className, ...props }, ref) => {
    return (
      <div className="space-y-1.5">
        {label && (
          <label className="block text-[13px] font-bold text-ink">
            {label}
          </label>
        )}
        <select
          ref={ref}
          className={cn(
            'w-full px-4 py-2.5 bg-page border border-line rounded-lg text-[15px] font-medium text-ink',
            'focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/20',
            'transition-colors appearance-none',
            error && 'border-clay focus:border-clay focus:ring-clay/20',
            className
          )}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-[12px] font-bold text-clay">{error}</p>
        )}
        {helper && !error && (
          <p className="text-[12px] font-bold text-muted">{helper}</p>
        )}
      </div>
    )
  }
)
FormSelect.displayName = 'FormSelect'
