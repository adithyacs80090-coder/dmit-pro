import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface AcquiringMethod {
  name: string
  desc: string
  color: string
}

interface AcquiringMethods {
  primary: AcquiringMethod
  secondary: AcquiringMethod
  all: AcquiringMethod[]
}

export function AcquiringSection({ methods }: { methods: AcquiringMethods }) {
  const { t } = useTranslation()
  return (
    <PacketPage id="sec-acquiring">
      <PageHeader eyebrow={t('section.acquiring.eyebrow')} title={t('section.acquiring.title')} subtitle={t('section.acquiring.subtitle')} />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="p-5 border border-line rounded-[10px] bg-page" style={{ borderTop: `6px solid ${methods.primary.color}` }}>
          <span className="text-[12px] font-black uppercase text-muted">{t('section.acquiring.primaryMethod')}</span>
          <h4 className="text-h2 font-bold text-ink mt-2">{methods.primary.name}</h4>
          <p className="text-[15px] font-bold text-muted mt-2">{methods.primary.desc}</p>
        </div>
        <div className="p-5 border border-line rounded-[10px] bg-page" style={{ borderTop: `6px solid ${methods.secondary.color}` }}>
          <span className="text-[12px] font-black uppercase text-muted">{t('section.acquiring.secondaryMethod')}</span>
          <h4 className="text-h2 font-bold text-ink mt-2">{methods.secondary.name}</h4>
          <p className="text-[15px] font-bold text-muted mt-2">{methods.secondary.desc}</p>
        </div>
      </div>
      <div className="space-y-2">
        {methods.all.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-3 border border-line rounded-[10px] bg-page">
            <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: m.color }} />
            <div>
              <span className="text-[14px] font-bold text-ink">{m.name}</span>
              <p className="text-[13px] text-muted font-bold">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </PacketPage>
  )
}
