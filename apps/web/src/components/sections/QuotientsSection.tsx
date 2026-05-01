import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface QuotientInterpretation {
  iq: string
  eq: string
  cq: string
  aq: string
}

export function QuotientsSection({ iq, eq, cq, aq, interpretations }: { iq: number; eq: number; cq: number; aq: number; interpretations: QuotientInterpretation }) {
  const { t } = useTranslation()
  const quots = [
    { label: t('section.quotients.label.iq'), value: Math.round(iq), interp: interpretations.iq, color: '#00715f', desc: t('section.quotients.desc.iq') },
    { label: t('section.quotients.label.eq'), value: Math.round(eq * 10) / 10, interp: interpretations.eq, color: '#087eb1', desc: t('section.quotients.desc.eq') },
    { label: t('section.quotients.label.cq'), value: Math.round(cq * 10) / 10, interp: interpretations.cq, color: '#f5ad28', desc: t('section.quotients.desc.cq') },
    { label: t('section.quotients.label.aq'), value: Math.round(aq * 10) / 10, interp: interpretations.aq, color: '#ff7c59', desc: t('section.quotients.desc.aq') },
  ]

  return (
    <PacketPage id="sec-quotients">
      <PageHeader eyebrow={t('section.quotients.eyebrow')} title={t('section.quotients.title')} subtitle={t('section.quotients.subtitle')} />
      <div className="grid grid-cols-4 gap-4">
        {quots.map((q) => (
          <div key={q.label} className="p-5 border border-line rounded-[10px] bg-page text-center" style={{ borderTop: `6px solid ${q.color}` }}>
            <span className="text-[12px] font-black uppercase text-muted">{q.label}</span>
            <p className="text-[48px] font-black mt-2" style={{ color: q.color }}>{q.value}</p>
            <p className="text-[14px] font-bold text-ink mt-1">{q.interp}</p>
            <p className="text-[12px] text-muted font-bold mt-2">{q.desc}</p>
          </div>
        ))}
      </div>
    </PacketPage>
  )
}
