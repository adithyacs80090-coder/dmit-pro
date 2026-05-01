import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface FingerRCAnalysisEntry {
  finger: string
  label: string
  brainLobe: string
  function: string
  intelligence: string
  hemisphere: string
  pattern: string
  ridgeCount: number
  rcInterpretation: { level: string; description: string }
}

export function RidgeCountSection({ analysis }: { analysis: FingerRCAnalysisEntry[] }) {
  const { t } = useTranslation()
  return (
    <PacketPage id="sec-ridge-count">
      <PageHeader eyebrow={t('section.ridgeCount.eyebrow')} title={t('section.ridgeCount.title')} subtitle={t('section.ridgeCount.subtitle')} />
      <div className="grid grid-cols-2 gap-3">
        {analysis.map((f, i) => (
          <div key={i} className="p-4 border border-line rounded-[10px] bg-page">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-[12px] font-bold text-muted">{f.label}</span>
                <p className="text-h3 font-bold text-ink">{f.finger}</p>
              </div>
              <div className="text-right">
                <p className="text-h2 font-black text-forest">{f.ridgeCount}</p>
                <span className="text-[11px] font-bold text-muted">{t('section.ridgeCount.unit')}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-panel rounded text-[11px] font-bold text-muted">{f.pattern}</span>
              <span className="px-2 py-0.5 bg-panel rounded text-[11px] font-bold text-muted">{f.brainLobe}</span>
              <span className="px-2 py-0.5 bg-panel rounded text-[11px] font-bold text-muted">{f.hemisphere}</span>
            </div>
            <p className="text-[13px] font-bold text-ink">{f.function}</p>
            <p className="text-[12px] text-muted font-bold mt-1">{f.rcInterpretation.level} — {f.rcInterpretation.description}</p>
          </div>
        ))}
      </div>
    </PacketPage>
  )
}
