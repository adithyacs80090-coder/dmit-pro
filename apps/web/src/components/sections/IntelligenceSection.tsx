import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { StarRating } from '@/components/ui/StarRating'
import { RadarChart } from '@/components/charts/RadarChart'

interface IntelligenceDatum {
  key: string
  name: string
  manifested: number
  stars: number
  starsDisplay: string
  side: string
}

export function IntelligenceSection({ intelligenceData, topIntelligences }: { intelligenceData: IntelligenceDatum[]; topIntelligences: IntelligenceDatum[] }) {
  const { t } = useTranslation()
  const radarData = intelligenceData.map(d => ({
    label: d.name,
    value: Math.round(d.manifested * 100),
  }))

  return (
    <PacketPage id="sec-intelligence">
      <PageHeader eyebrow={t('section.intelligence.eyebrow')} title={t('section.intelligence.title')} subtitle={t('section.intelligence.subtitle')} />
      <div className="grid grid-cols-2 gap-6 items-start">
        <div className="h-72">
          <RadarChart data={radarData} />
        </div>
        <div className="space-y-2">
          {intelligenceData.sort((a,b) => b.manifested - a.manifested).map((intel) => (
            <div key={intel.key} className="flex items-center gap-3 p-3 border border-line rounded-[10px] bg-page">
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-bold text-ink">{intel.name}</span>
                  <span className="text-[12px] font-bold text-muted">{intel.side}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-2 bg-line rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-forest transition-all" style={{ width: `${Math.min(intel.manifested * 100, 100)}%` }} />
                  </div>
                  <span className="text-[12px] font-black text-forest w-10 text-right">{Math.round(intel.manifested * 100)}%</span>
                </div>
              </div>
              <StarRating rating={intel.stars} className="text-[14px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 p-5 bg-panel rounded-[10px]">
        <p className="text-[14px] font-bold text-muted mb-2">{t('section.intelligence.top3Label')}</p>
        <div className="flex gap-3">
          {topIntelligences.map((tItem, i) => (
            <div key={i} className="flex-1 p-4 bg-page rounded-[10px] text-center border border-line">
              <span className="text-h3 font-black text-forest block">#{i + 1}</span>
              <p className="text-[15px] font-bold text-ink mt-1">{tItem.name}</p>
              <StarRating rating={tItem.stars} className="justify-center mt-2 text-[16px]" />
            </div>
          ))}
        </div>
      </div>
    </PacketPage>
  )
}
