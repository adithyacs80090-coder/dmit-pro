import { cn } from '@/lib/utils'

interface StatCardProps {
  label: string
  value: string | number
  color?: string
  bgColor?: string
  className?: string
}

export function StatCard({ label, value, color = '#00715f', bgColor = '#a2ed7a', className }: StatCardProps) {
  return (
    <article
      className={cn(
        'min-h-[150px] p-5 rounded-[10px] border border-line/85 bg-page',
        className
      )}
      style={{ borderTop: `6px solid ${color}` }}
    >
      <span
        className="inline-flex w-fit min-h-[28px] items-center justify-center px-3 py-1 rounded-full text-[11px] font-black uppercase text-ink mb-3"
        style={{ backgroundColor: bgColor }}
      >
        {label}
      </span>
      <strong className="text-[22px] block font-bold text-ink">
        {value}
      </strong>
    </article>
  )
}
