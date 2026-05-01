import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface SwotAnalysis {
  strengths: string[]
  weaknesses: string[]
  opportunities: string[]
  threats: string[]
}

export function SWOTSection({ swot }: { swot: SwotAnalysis }) {
  const { t } = useTranslation()
  const sections = [
    { title: t('section.swot.strengths'), items: swot.strengths, color: '#00715f', bg: '#e3efe7' },
    { title: t('section.swot.weaknesses'), items: swot.weaknesses, color: '#c23a3a', bg: '#f0dfd8' },
    { title: t('section.swot.opportunities'), items: swot.opportunities, color: '#087eb1', bg: '#dbeef4' },
    { title: t('section.swot.threats'), items: swot.threats, color: '#f5ad28', bg: '#fff3bf' },
  ]

  return (
    <PacketPage id="sec-swot">
      <PageHeader eyebrow={t('section.swot.eyebrow')} title={t('section.swot.title')} subtitle={t('section.swot.subtitle')} />
      <div className="grid grid-cols-2 gap-4">
        {sections.map((s) => (
          <div key={s.title} className="p-5 rounded-[10px] border" style={{ background: s.bg, borderColor: s.color + '40' }}>
            <h4 className="text-h3 font-bold mb-3" style={{ color: s.color }}>{s.title}</h4>
            <ul className="space-y-2">
              {s.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] font-bold text-ink">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-black flex-shrink-0 mt-0.5" style={{ background: s.color }}>
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PacketPage>
  )
}
