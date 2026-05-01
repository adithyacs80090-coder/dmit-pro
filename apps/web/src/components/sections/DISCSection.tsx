import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { DoughnutChart } from '@/components/charts/DoughnutChart'

interface DiscProfile {
  D: { count: number; percent: number }
  I: { count: number; percent: number }
  S: { count: number; percent: number }
  C: { count: number; percent: number }
}

interface DominantDisc {
  primary: string
  secondary: string
  code: string
}

const DISC_COLORS = { D: '#c23a3a', I: '#f5ad28', S: '#3a7cc2', C: '#7a3ac2' }

export function DISCSection({ discProfile, dominant }: { discProfile: DiscProfile; dominant: DominantDisc }) {
  const { t } = useTranslation()
  const discNames: Record<string, string> = {
    D: t('section.disc.name.dominance'),
    I: t('section.disc.name.influence'),
    S: t('section.disc.name.steadiness'),
    C: t('section.disc.name.compliance'),
  }

  const data = [
    { label: `D - ${discNames.D}`, value: Math.round(discProfile.D.percent * 100), color: DISC_COLORS.D },
    { label: `I - ${discNames.I}`, value: Math.round(discProfile.I.percent * 100), color: DISC_COLORS.I },
    { label: `S - ${discNames.S}`, value: Math.round(discProfile.S.percent * 100), color: DISC_COLORS.S },
    { label: `C - ${discNames.C}`, value: Math.round(discProfile.C.percent * 100), color: DISC_COLORS.C },
  ]

  return (
    <PacketPage id="sec-disc">
      <PageHeader eyebrow={t('section.disc.eyebrow')} title={t('section.disc.title')} subtitle={t('section.disc.subtitle')} />
      <div className="grid grid-cols-2 gap-6 items-center">
        <div className="h-64">
          <DoughnutChart data={data} />
        </div>
        <div className="space-y-3">
          {(['D', 'I', 'S', 'C'] as const).map((k) => (
            <div key={k} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-black" style={{ background: DISC_COLORS[k] }}>
                {k}
              </div>
              <div className="flex-1">
                <div className="flex justify-between text-[14px] font-bold">
                  <span>{discNames[k]}</span>
                  <span>{Math.round(discProfile[k].percent * 100)}%</span>
                </div>
                <div className="w-full h-2 bg-line rounded-full mt-1 overflow-hidden">
                  <div className="h-full rounded-full transition-all" style={{ width: `${discProfile[k].percent * 100}%`, background: DISC_COLORS[k] }} />
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 p-4 bg-panel rounded-[10px]">
            <p className="text-[14px] font-bold text-muted">{t('section.disc.dominantStyle')}</p>
            <p className="text-h3 font-bold text-ink mt-1">{dominant.code} — {discNames[dominant.primary]}</p>
            <p className="text-[14px] text-muted mt-1">{t('section.disc.secondaryPrefix')}{discNames[dominant.secondary]}</p>
          </div>
        </div>
      </div>
    </PacketPage>
  )
}
