import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { DoughnutChart } from '@/components/charts/DoughnutChart'

export function BrainDominanceSection({ rbPct, lbPct, brainSide }: { rbPct: number; lbPct: number; brainSide: string }) {
  const { t } = useTranslation()
  const data = [
    { label: t('section.brainDominance.label.rightBrain'), value: Math.round(rbPct * 100), color: '#ff7c59' },
    { label: t('section.brainDominance.label.leftBrain'), value: Math.round(lbPct * 100), color: '#087eb1' },
  ]

  const sideLabel = brainSide === 'balanced' ? t('section.brainDominance.side.balanced')
    : brainSide === 'right' ? t('section.brainDominance.side.right')
    : t('section.brainDominance.side.left')

  const sideDesc = brainSide === 'balanced'
    ? t('section.brainDominance.desc.balanced')
    : brainSide === 'right'
    ? t('section.brainDominance.desc.right')
    : t('section.brainDominance.desc.left')

  return (
    <PacketPage id="sec-brain-dominance">
      <PageHeader eyebrow={t('section.brainDominance.eyebrow')} title={t('section.brainDominance.title')} subtitle={t('section.brainDominance.subtitle')} />
      <div className="grid grid-cols-2 gap-6 items-center">
        <div className="h-64">
          <DoughnutChart data={data} />
        </div>
        <div>
          <div className="p-5 bg-panel rounded-[10px] mb-4">
            <p className="text-[14px] font-bold text-muted">{t('section.brainDominance.dominanceLabel')}</p>
            <p className="text-h2 font-black text-ink mt-1">{sideLabel}</p>
            <p className="text-[15px] text-muted font-bold mt-2">{sideDesc}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-page rounded-[10px] border border-line text-center">
              <p className="text-h3 font-black" style={{ color: '#ff7c59' }}>{Math.round(rbPct * 100)}%</p>
              <p className="text-[13px] font-bold text-muted mt-1">{t('section.brainDominance.percentLabel.rightBrain')}</p>
            </div>
            <div className="p-4 bg-page rounded-[10px] border border-line text-center">
              <p className="text-h3 font-black" style={{ color: '#087eb1' }}>{Math.round(lbPct * 100)}%</p>
              <p className="text-[13px] font-bold text-muted mt-1">{t('section.brainDominance.percentLabel.leftBrain')}</p>
            </div>
          </div>
        </div>
      </div>
    </PacketPage>
  )
}
