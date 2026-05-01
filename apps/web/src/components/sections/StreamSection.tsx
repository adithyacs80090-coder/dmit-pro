import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { DoughnutChart } from '@/components/charts/DoughnutChart'

interface StreamEntry {
  value: number
  raw: number
}

export function StreamSection({ stream, top }: { stream: Record<string, StreamEntry>; top: string }) {
  const { t } = useTranslation()
  const labels: Record<string, string> = {
    Science: t('section.stream.label.science'),
    Commerce: t('section.stream.label.commerce'),
    Arts: t('section.stream.label.arts'),
  }

  const data = [
    { label: labels.Science, value: Math.round(stream.Science.value * 100), color: '#00715f' },
    { label: labels.Commerce, value: Math.round(stream.Commerce.value * 100), color: '#087eb1' },
    { label: labels.Arts, value: Math.round(stream.Arts.value * 100), color: '#f5ad28' },
  ]

  return (
    <PacketPage id="sec-stream">
      <PageHeader eyebrow={t('section.stream.eyebrow')} title={t('section.stream.title')} subtitle={t('section.stream.subtitle')} />
      <div className="grid grid-cols-2 gap-6 items-center">
        <div className="h-64">
          <DoughnutChart data={data} />
        </div>
        <div>
          <div className="space-y-2">
            {data.map((d) => (
              <div key={d.label} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                <span className="text-[14px] font-bold text-ink flex-1">{d.label}</span>
                <span className="text-[14px] font-black" style={{ color: d.color }}>{d.value}%</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-panel rounded-[10px]">
            <p className="text-[14px] font-bold text-muted">{t('section.stream.recommendedLabel')}</p>
            <p className="text-h2 font-black text-forest mt-1">{labels[top] || top}</p>
            <p className="text-[15px] font-bold text-muted mt-2">{t(`section.stream.description.${top}` as any)}</p>
          </div>
        </div>
      </div>
    </PacketPage>
  )
}
