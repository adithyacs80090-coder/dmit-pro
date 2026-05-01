import { cn } from '@/lib/utils'

interface FingerprintCellProps {
  finger: string
  code: string
  name: string
  color?: string
  className?: string
}

const fpColors: Record<string, string> = {
  W1: '#c23a3a', W2: '#c9a43a', W3: '#b03030', W4: '#c27a3a',
  W5: '#7a3ac2', W6: '#4a9b6b', W7: '#3a9b8a', W8: '#c25a3a',
  W9: '#c25a3a', W10: '#c25a3a', W11: '#c25a3a',
  L: '#3a7cc2', R: '#2a6ab2', L1: '#5a9cd2', R1: '#2aac9a',
  X1: '#a5a5bd', X2: '#8a8aa3', X3: '#8a8aa3', X4: '#8a8aa3',
  W: '#c23a3a',
}

export function FingerprintCell({ finger, code, name, color, className }: FingerprintCellProps) {
  const codeColor = color || fpColors[code] || '#00715f'
  
  return (
    <div className={cn(
      'text-center p-3 bg-panel rounded-[10px] border border-line',
      className
    )}>
      <div className="text-[10px] uppercase tracking-wider text-muted mb-1 font-black">
        {finger}
      </div>
      <div className="text-[18px] font-black mb-0.5" style={{ color: codeColor }}>
        {code}
      </div>
      <div className="text-[11px] text-muted font-bold">
        {name}
      </div>
    </div>
  )
}

interface FingerprintGridProps {
  fingerprints: Array<{ finger: string; code: string; name: string }>
  className?: string
}

export function FingerprintGrid({ fingerprints, className }: FingerprintGridProps) {
  return (
    <div className={cn('grid grid-cols-5 gap-2.5', className)}>
      {fingerprints.map((fp, i) => (
        <FingerprintCell
          key={i}
          finger={fp.finger}
          code={fp.code}
          name={fp.name}
        />
      ))}
    </div>
  )
}
