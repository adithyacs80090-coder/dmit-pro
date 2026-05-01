import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  showValue?: boolean
  className?: string
}

export function StarRating({ rating, showValue = false, className }: StarRatingProps) {
  const filled = '★'.repeat(rating)
  const empty = '☆'.repeat(5 - rating)
  
  return (
    <span className={cn('text-honey font-black tracking-tight', className)}>
      {filled}
      {empty}
      {showValue && <span className="ml-2 text-[11px] text-muted">{rating}/5</span>}
    </span>
  )
}
