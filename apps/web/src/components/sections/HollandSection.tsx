import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { RadarChart } from '@/components/charts/RadarChart'
import { StarRating } from '@/components/ui/StarRating'

interface HollandEntry {
  name: string
  value: number
  raw: number
  stars: number
  starsDisplay: string
}

export function HollandSection({ holland, top2 }: { holland: Record<string, HollandEntry>; top2: string[] }) {
  const { t } = useTranslation()
  const radarData = Object.entries(holland).map(([, v]) => ({
    label: v.name,
    value: Math.round(v.value * 100),
  }))

  const code = top2.join('')

  return (
    <PacketPage id="sec-holland">
      <PageHeader eyebrow={t('section.holland.eyebrow')} title={t('section.holland.title')} subtitle={t('section.holland.subtitle')} />
      <div className="grid grid-cols-2 gap-6 items-center">
        <div className="h-72">
          <RadarChart data={radarData} />
        </div>
        <div className="space-y-2">
          {Object.entries(holland).map(([key, v]) => (
            <div key={key} className="flex items-center gap-3 p-3 border border-line rounded-[10px] bg-page">
              <div className="w-8 h-8 rounded-lg bg-forest text-white flex items-center justify-center font-black text-[14px]">{key}</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-bold text-ink">{v.name}</span>
                  <span className="text-[12px] font-black text-forest">{Math.round(v.value * 100)}%</span>
                </div>
                <div className="h-2 bg-line rounded-full mt-1 overflow-hidden">
                  <div className="h-full bg-forest rounded-full" style={{ width: `${Math.min(v.value * 100, 100)}%` }} />
                </div>
              </div>
              <StarRating rating={v.stars} className="text-[14px]" />
            </div>
          ))}
          <div className="mt-3 p-4 bg-panel rounded-[10px] text-center">
            <p className="text-[14px] font-bold text-muted">{t('section.holland.yourHollandCode')}</p>
            <p className="text-h2 font-black text-forest">{code}</p>
          </div>
        </div>
      </div>
    </PacketPage>
  )
}
