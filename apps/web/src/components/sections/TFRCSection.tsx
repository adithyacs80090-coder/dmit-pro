import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProgressBar } from '@/components/ui/ProgressBar'

export function TFRCSection({ tfrc }: { tfrc: number }) {
  const { t } = useTranslation()
  const maxTFRC = 300
  let levelKey = 'average'
  let color = '#f5ad28'
  if (tfrc >= 200) { levelKey = 'veryHigh'; color = '#00715f' }
  else if (tfrc >= 150) { levelKey = 'high'; color = '#087eb1' }
  else if (tfrc >= 100) { levelKey = 'average'; color = '#f5ad28' }
  else { levelKey = 'developing'; color = '#ff7c59' }

  return (
    <PacketPage id="sec-tfrc">
      <PageHeader eyebrow={t('section.tfrc.eyebrow')} title={t('section.tfrc.title')} subtitle={t('section.tfrc.subtitle')} />
      <div className="text-center py-8">
        <div className="text-[80px] font-black text-forest leading-none">{tfrc}</div>
        <p className="text-h3 font-bold mt-2" style={{ color }}>{t(`section.tfrc.level.${levelKey}`)}</p>
        <p className="text-[15px] text-muted font-bold mt-1">{t('section.tfrc.description')}</p>
        <div className="max-w-md mx-auto mt-6">
          <ProgressBar value={tfrc} max={maxTFRC} />
          <div className="flex justify-between text-[12px] text-muted font-bold mt-2">
            <span>0</span>
            <span>150</span>
            <span>{t('section.tfrc.scale.max')}</span>
          </div>
        </div>
      </div>
    </PacketPage>
  )
}
