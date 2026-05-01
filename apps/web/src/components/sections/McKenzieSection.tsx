import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { DoughnutChart } from '@/components/charts/DoughnutChart'

interface McKenzieEntry {
  value: number
  raw: number
}

export function McKenzieSection({ mckenzie, top }: { mckenzie: Record<string, McKenzieEntry>; top: string }) {
  const { t } = useTranslation()
  const data = [
    { label: t('section.mckenzie.style.analytic'), value: Math.round(mckenzie.Analytic.value * 100), color: '#00715f' },
    { label: t('section.mckenzie.style.introspective'), value: Math.round(mckenzie.Introspective.value * 100), color: '#087eb1' },
    { label: t('section.mckenzie.style.interactive'), value: Math.round(mckenzie.Interactive.value * 100), color: '#f5ad28' },
  ]

  return (
    <PacketPage id="sec-mckenzie">
      <PageHeader eyebrow={t('section.mckenzie.eyebrow')} title={t('section.mckenzie.title')} subtitle={t('section.mckenzie.subtitle')} />
      <div className="grid grid-cols-2 gap-6 items-center">
        <div className="h-64">
          <DoughnutChart data={data} />
        </div>
        <div className="space-y-3">
          {data.map((d) => (
            <div key={d.label} className="p-4 border border-line rounded-[10px] bg-page">
              <div className="flex justify-between items-center mb-2">
                <span className="text-h3 font-bold text-ink">{d.label}</span>
                <span className="text-h3 font-black" style={{ color: d.color }}>{d.value}%</span>
              </div>
              <div className="h-2 bg-line rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${d.value}%`, background: d.color }} />
              </div>
            </div>
          ))}
          <div className="p-4 bg-panel rounded-[10px]">
            <p className="text-[14px] font-bold text-muted">{t('section.mckenzie.dominantStyle')}</p>
            <p className="text-h2 font-black text-forest mt-1">{top}</p>
          </div>
        </div>
      </div>
    </PacketPage>
  )
}
