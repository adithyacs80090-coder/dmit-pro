import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  className?: string
}

const variantStyles = {
  default: 'bg-cream text-ink',
  success: 'bg-mint text-ink',
  warning: 'bg-butter text-ink',
  error: 'bg-clay/20 text-clay',
  info: 'bg-sky/20 text-lake',
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit min-h-[28px] items-center justify-center px-3 py-1 rounded-full text-[11px] font-black uppercase',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

interface TagProps {
  children: React.ReactNode
  bgColor?: string
  className?: string
}

export function Tag({ children, bgColor = '#e3efe7', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex w-fit min-h-[28px] items-center justify-center px-3 py-1 rounded-full text-[11px] font-black uppercase text-ink',
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </span>
  )
}

interface ChipProps {
  children: React.ReactNode
  bgColor?: string
  className?: string
}

export function Chip({ children, bgColor = '#a2ed7a', className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center px-3 py-2 rounded-full text-[11px] font-black uppercase text-ink',
        className
      )}
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </span>
  )
}
