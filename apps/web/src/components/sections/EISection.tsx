import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { RadarChart } from '@/components/charts/RadarChart'

interface EiScore {
  value: number
  percent: number
}

interface EiScores {
  selfAwareness: EiScore
  selfRegulation: EiScore
  empathy: EiScore
  socialSkills: EiScore
}

export function EISection({ eiScores }: { eiScores: EiScores }) {
  const { t } = useTranslation()
  const data = [
    { label: t('section.ei.dimension.selfAwareness'), value: Math.round(eiScores.selfAwareness.percent * 100), color: '#00715f' },
    { label: t('section.ei.dimension.selfRegulation'), value: Math.round(eiScores.selfRegulation.percent * 100), color: '#087eb1' },
    { label: t('section.ei.dimension.empathy'), value: Math.round(eiScores.empathy.percent * 100), color: '#f5ad28' },
    { label: t('section.ei.dimension.socialSkills'), value: Math.round(eiScores.socialSkills.percent * 100), color: '#ff7c59' },
  ]

  return (
    <PacketPage id="sec-ei">
      <PageHeader eyebrow={t('section.ei.eyebrow')} title={t('section.ei.title')} subtitle={t('section.ei.subtitle')} />
      <div className="grid grid-cols-2 gap-6 items-center">
        <div className="h-64">
          <RadarChart data={data} />
        </div>
        <div className="space-y-3">
          {data.map((d) => (
            <div key={d.label} className="p-4 border border-line rounded-[10px] bg-page">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[15px] font-bold text-ink">{d.label}</span>
                <span className="text-h3 font-black" style={{ color: d.color }}>{d.value}%</span>
              </div>
              <div className="h-2 bg-line rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${d.value}%`, background: d.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PacketPage>
  )
}
