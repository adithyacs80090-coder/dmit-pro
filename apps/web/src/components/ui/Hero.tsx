import { cn } from '@/lib/utils'

interface HeroProps {
  eyebrow?: string
  title: string
  subtitle: string
  children?: React.ReactNode
  className?: string
}

export function Hero({ eyebrow, title, subtitle, children, className }: HeroProps) {
  return (
    <div
      className={cn(
        'min-h-[340px] grid grid-cols-[1fr_auto] gap-6 items-end p-8 rounded-[10px] border border-[rgba(25,51,46,0.14)]',
        className
      )}
      style={{
        background: 'linear-gradient(90deg, #fff0e6 0 16%, #f6e4ff 16% 32%, #e5f7ff 32% 48%, #dcfff6 48% 64%, #eaffd9 64% 80%, #fff4b8 80% 100%)',
      }}
    >
      <div>
        {eyebrow && (
          <p className="text-[13px] uppercase font-black text-forest mb-2 tracking-wider">
            {eyebrow}
          </p>
        )}
        <h1 className="text-[48px] leading-[1.1] tracking-tight font-extrabold text-ink">
          {title}
        </h1>
        <p className="text-[15px] text-muted font-bold mt-2">
          {subtitle}
        </p>
      </div>
      {children}
    </div>
  )
}
