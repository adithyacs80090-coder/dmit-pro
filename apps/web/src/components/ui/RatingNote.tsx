import { cn } from '@/lib/utils'

interface RatingNoteProps {
  variant?: 'info' | 'success' | 'warning' | 'error'
  title?: string
  children: React.ReactNode
  className?: string
}

const variantStyles = {
  info: {
    border: '#00715f',
    bg: '#e3efe7',
    text: '#275e50',
  },
  success: {
    border: '#54b95d',
    bg: '#eaffd9',
    text: '#2d5a2d',
  },
  warning: {
    border: '#f5ad28',
    bg: '#fff3bf',
    text: '#5f4717',
  },
  error: {
    border: '#ff7c59',
    bg: '#f0dfd8',
    text: '#724232',
  },
}

export function RatingNote({ variant = 'info', title, children, className }: RatingNoteProps) {
  const style = variantStyles[variant]
  
  return (
    <div
      className={cn(
        'p-4 rounded-lg border-l-4 mb-4',
        className
      )}
      style={{
        backgroundColor: style.bg,
        borderLeftColor: style.border,
        color: style.text,
      }}
    >
      {title && <strong className="font-bold block mb-1">{title}</strong>}
      <div className="text-[14px] font-bold leading-relaxed">
        {children}
      </div>
    </div>
  )
}
