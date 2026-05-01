import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProgressBar } from '@/components/ui/ProgressBar'

interface BrainLobe {
  lobe: string
  left: { rc: number; pattern: string; function: string }
  right: { rc: number; pattern: string; function: string }
  total: number
  dominant: string
  development: string
}

export function BrainLobesSection({ lobes }: { lobes: BrainLobe[] }) {
  const { t } = useTranslation()
  return (
    <PacketPage id="sec-brain-lobes">
      <PageHeader eyebrow={t('section.brainLobes.eyebrow')} title={t('section.brainLobes.title')} subtitle={t('section.brainLobes.subtitle')} />
      <div className="space-y-4">
        {lobes.map((lobe) => (
          <div key={lobe.lobe} className="p-5 border border-line rounded-[10px] bg-page">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-h3 font-bold text-ink">{lobe.lobe}{t('section.brainLobes.lobeSuffix')}</h4>
              <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase" style={{ background: lobe.development === 'High' ? '#a2ed7a' : lobe.development === 'Moderate' ? '#6edaf2' : '#ffd84d', color: '#0d1a14' }}>
                {lobe.development}{t('section.brainLobes.developmentSuffix')}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-[15px]">
              <div>
                <span className="text-muted font-bold">{t('section.brainLobes.leftHemisphere')}</span>
                <p className="font-bold text-ink mt-1">{lobe.left.function}</p>
                <p className="text-muted text-[13px]">{t('section.brainLobes.patternPrefix')}{lobe.left.pattern} | {t('section.brainLobes.rcPrefix')}{lobe.left.rc}</p>
              </div>
              <div className="text-center">
                <span className="text-muted font-bold">{t('section.brainLobes.totalRc')}</span>
                <p className="text-h2 font-black text-forest mt-1">{lobe.total}</p>
                <p className="text-[13px] font-bold text-muted">{t('section.brainLobes.dominantPrefix')}{lobe.dominant}</p>
              </div>
              <div className="text-right">
                <span className="text-muted font-bold">{t('section.brainLobes.rightHemisphere')}</span>
                <p className="font-bold text-ink mt-1">{lobe.right.function}</p>
                <p className="text-muted text-[13px]">{t('section.brainLobes.patternPrefix')}{lobe.right.pattern} | {t('section.brainLobes.rcPrefix')}{lobe.right.rc}</p>
              </div>
            </div>
            <ProgressBar value={Math.min(lobe.total, 40)} max={40} className="mt-3" />
          </div>
        ))}
      </div>
    </PacketPage>
  )
}
