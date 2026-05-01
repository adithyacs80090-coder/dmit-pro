import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

export function ExtraCurricularSection({ activities }: { activities: string[] }) {
  const { t } = useTranslation()
  return (
    <PacketPage id="sec-extra">
      <PageHeader eyebrow={t('section.extraCurricular.eyebrow')} title={t('section.extraCurricular.title')} subtitle={t('section.extraCurricular.subtitle')} />
      <div className="grid grid-cols-2 gap-3">
        {activities.map((activity, i) => (
          <div key={i} className="flex items-center gap-3 p-4 border border-line rounded-[10px] bg-page">
            <span className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-[12px] font-black flex-shrink-0">
              {i + 1}
            </span>
            <span className="text-[15px] font-bold text-ink">{activity}</span>
          </div>
        ))}
      </div>
    </PacketPage>
  )
}
