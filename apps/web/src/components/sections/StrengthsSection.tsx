import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface StrengthEntry {
  name: string
  domain: string
  source: string
  shortDesc: string
}

const DOMAIN_COLORS: Record<string, string> = {
  'Executing': '#00715f',
  'Influencing': '#f5ad28',
  'Relationship Building': '#ff7c59',
  'Strategic Thinking': '#087eb1',
}

export function StrengthsSection({ strengths, dominantDomain }: { strengths: StrengthEntry[]; dominantDomain: string }) {
  const { t } = useTranslation()
  return (
    <PacketPage id="sec-strengths">
      <PageHeader eyebrow={t('section.strengths.eyebrow')} title={t('section.strengths.title')} subtitle={t('section.strengths.subtitle')} />
      <div className="mb-4 p-4 bg-panel rounded-[10px] text-center">
        <p className="text-[14px] font-bold text-muted">{t('section.strengths.dominantDomain')}</p>
        <p className="text-h2 font-black mt-1" style={{ color: DOMAIN_COLORS[dominantDomain] || '#00715f' }}>{dominantDomain}</p>
      </div>
      <div className="space-y-3">
        {strengths.map((s, i) => (
          <div key={i} className="p-4 border border-line rounded-[10px] bg-page flex items-start gap-4" style={{ borderLeft: `6px solid ${DOMAIN_COLORS[s.domain] || '#00715f'}` }}>
            <span className="w-8 h-8 rounded-full bg-forest text-white flex items-center justify-center text-[12px] font-black flex-shrink-0">
              {i + 1}
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="text-h3 font-bold text-ink">{s.name}</h4>
                <span className="px-2 py-0.5 rounded-full text-[11px] font-black uppercase" style={{ background: (DOMAIN_COLORS[s.domain] || '#00715f') + '20', color: DOMAIN_COLORS[s.domain] || '#00715f' }}>
                  {s.domain}
                </span>
              </div>
              <p className="text-[14px] font-bold text-muted">{s.shortDesc}</p>
            </div>
          </div>
        ))}
      </div>
    </PacketPage>
  )
}
