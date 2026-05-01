import { cn } from '@/lib/utils'

interface ProgressBarProps {
  value: number
  max?: number
  color?: string
  trackColor?: string
  className?: string
}

export function ProgressBar({ 
  value, 
  max = 100, 
  color = '#00715f', 
  trackColor = 'rgba(25,51,46,0.12)',
  className 
}: ProgressBarProps) {
  const percentage = Math.min((value / max) * 100, 100)
  
  return (
    <div 
      className={cn('h-3 rounded-full', className)}
      style={{ backgroundColor: trackColor }}
    >
      <div
        className="h-full rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </div>
  )
}
