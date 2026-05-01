import { cn } from '@/lib/utils'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function PageHeader({ eyebrow, title, subtitle, children, className }: PageHeaderProps) {
  return (
    <header className={cn('mb-8', className)}>
      <p className="text-[13px] uppercase font-black text-forest mb-2 tracking-wider">
        {eyebrow}
      </p>
      <h2 className="text-[36px] leading-[1.15] tracking-tight font-bold text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[15px] text-muted font-bold mt-2 max-w-[960px]">
          {subtitle}
        </p>
      )}
      {children}
    </header>
  )
}
