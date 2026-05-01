import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface PersonalityDatum {
  code: string
  personality: string
  name: string
  disc: string
}

const PERSONALITY_COLORS: Record<string, string> = {
  Dominant: '#c23a3a',
  Compliant: '#7a3ac2',
  Steady: '#3a7cc2',
  Influential: '#f5ad28',
}

export function PersonalitySection({ personality }: { personality: PersonalityDatum[] }) {
  const { t } = useTranslation()
  const fingerKeys = [
    'reports.view.finger.l1', 'reports.view.finger.l2', 'reports.view.finger.l3', 'reports.view.finger.l4', 'reports.view.finger.l5',
    'reports.view.finger.r1', 'reports.view.finger.r2', 'reports.view.finger.r3', 'reports.view.finger.r4', 'reports.view.finger.r5',
  ]

  return (
    <PacketPage id="sec-personality">
      <PageHeader eyebrow={t('section.personality.eyebrow')} title={t('section.personality.title')} subtitle={t('section.personality.subtitle')} />
      <div className="grid grid-cols-5 gap-3">
        {personality.map((p, i) => (
          <div key={i} className="p-4 border border-line rounded-[10px] bg-page text-center">
            <span className="text-[12px] font-bold text-muted block mb-1">{t(fingerKeys[i])}</span>
            <div className="w-10 h-10 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-black text-[14px]" style={{ background: PERSONALITY_COLORS[p.personality] || '#00715f' }}>
              {p.code}
            </div>
            <p className="text-[13px] font-bold text-ink leading-tight">{p.name}</p>
            <span className="inline-block mt-2 px-2 py-0.5 rounded-full text-[11px] font-black uppercase" style={{ background: PERSONALITY_COLORS[p.personality] + '20', color: PERSONALITY_COLORS[p.personality] }}>
              {p.personality}
            </span>
          </div>
        ))}
      </div>
    </PacketPage>
  )
}
