import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface AtdInterpretation {
  speed: string
  level: number
}

interface AtdBrainSpeed {
  leftBrainSpeed: string
  rightBrainSpeed: string
  note: string
}

export function ATDSection({ atdLeft, atdRight, atdAvg, interpretation, leftInterp, rightInterp, brainSpeed }: { atdLeft: number; atdRight: number; atdAvg: number; interpretation: AtdInterpretation; leftInterp: AtdInterpretation; rightInterp: AtdInterpretation; brainSpeed: AtdBrainSpeed }) {
  const { t } = useTranslation()
  return (
    <PacketPage id="sec-atd">
      <PageHeader eyebrow={t('section.atd.eyebrow')} title={t('section.atd.title')} subtitle={t('section.atd.subtitle')} />
      <div className="grid grid-cols-3 gap-4">
        <div className="p-5 border border-line rounded-[10px] bg-page text-center">
          <span className="text-[12px] font-black uppercase text-muted">{t('section.atd.leftHand')}</span>
          <p className="text-h2 font-black text-forest mt-2">{atdLeft}°</p>
          <p className="text-[14px] font-bold text-ink mt-1">{leftInterp.speed}</p>
        </div>
        <div className="p-5 border border-line rounded-[10px] bg-page text-center" style={{ borderTop: '6px solid #00715f' }}>
          <span className="text-[12px] font-black uppercase text-muted">{t('section.atd.average')}</span>
          <p className="text-[48px] font-black text-forest mt-2">{atdAvg}°</p>
          <p className="text-h3 font-bold text-ink mt-1">{interpretation.speed}</p>
        </div>
        <div className="p-5 border border-line rounded-[10px] bg-page text-center">
          <span className="text-[12px] font-black uppercase text-muted">{t('section.atd.rightHand')}</span>
          <p className="text-h2 font-black text-forest mt-2">{atdRight}°</p>
          <p className="text-[14px] font-bold text-ink mt-1">{rightInterp.speed}</p>
        </div>
      </div>
      <div className="mt-4 p-5 bg-panel rounded-[10px]">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-[14px] font-bold text-muted">{t('section.atd.leftBrainSpeed')}</p>
            <p className="text-h3 font-bold text-ink">{brainSpeed.leftBrainSpeed}</p>
          </div>
          <div>
            <p className="text-[14px] font-bold text-muted">{t('section.atd.rightBrainSpeed')}</p>
            <p className="text-h3 font-bold text-ink">{brainSpeed.rightBrainSpeed}</p>
          </div>
        </div>
        <p className="text-[13px] text-muted font-bold mt-3">{brainSpeed.note}</p>
      </div>
    </PacketPage>
  )
}
