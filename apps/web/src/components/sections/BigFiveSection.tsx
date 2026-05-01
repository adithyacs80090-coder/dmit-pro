import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { RadarChart } from '@/components/charts/RadarChart'

interface BigFiveEntry {
  name: string
  raw: number
  value: number
  color: string
  percent?: number
  interpretation?: string
}

export function BigFiveSection({ bigFive }: { bigFive: Record<string, BigFiveEntry> }) {
  const { t } = useTranslation()
  const data = [
    { label: t('section.bigFive.trait.openness'), value: Math.round(bigFive.O.percent || 0), color: bigFive.O.color },
    { label: t('section.bigFive.trait.conscientiousness'), value: Math.round(bigFive.C.percent || 0), color: bigFive.C.color },
    { label: t('section.bigFive.trait.extraversion'), value: Math.round(bigFive.E.percent || 0), color: bigFive.E.color },
    { label: t('section.bigFive.trait.agreeableness'), value: Math.round(bigFive.A.percent || 0), color: bigFive.A.color },
    { label: t('section.bigFive.trait.neuroticism'), value: Math.round(bigFive.N.percent || 0), color: bigFive.N.color },
  ]

  return (
    <PacketPage id="sec-big-five">
      <PageHeader eyebrow={t('section.bigFive.eyebrow')} title={t('section.bigFive.title')} subtitle={t('section.bigFive.subtitle')} />
      <div className="grid grid-cols-2 gap-6 items-center">
        <div className="h-72">
          <RadarChart data={data} />
        </div>
        <div className="space-y-3">
          {Object.entries(bigFive).map(([k, v]) => (
            <div key={k} className="p-4 border border-line rounded-[10px] bg-page">
              <div className="flex justify-between items-center mb-1">
                <span className="text-[14px] font-bold text-ink">{v.name}</span>
                <span className="text-[14px] font-black" style={{ color: v.color }}>{Math.round(v.percent || 0)}%</span>
              </div>
              <div className="h-2 bg-line rounded-full overflow-hidden mb-2">
                <div className="h-full rounded-full" style={{ width: `${Math.min(v.percent || 0, 100)}%`, background: v.color }} />
              </div>
              <p className="text-[13px] text-muted font-bold">{v.interpretation}</p>
            </div>
          ))}
        </div>
      </div>
    </PacketPage>
  )
}
