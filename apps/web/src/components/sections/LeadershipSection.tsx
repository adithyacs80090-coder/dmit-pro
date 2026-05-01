import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface WorkplaceProfile {
  workStyle: { label: string; desc: string }
  decisionMaking: { label: string; desc: string }
  conflictStyle: { label: string; desc: string }
  feedbackPreference: { label: string; desc: string }
  motivationDrivers: string[]
  riskTolerance: { label: string; desc: string }
  idealManagerStyle: { label: string; desc: string }
  idealTeamRole: { label: string; desc: string }
}

export function LeadershipSection({ profile }: { profile: WorkplaceProfile }) {
  const { t } = useTranslation()
  const items = [
    { title: t('section.leadership.item.workStyle'), ...profile.workStyle },
    { title: t('section.leadership.item.decisionMaking'), ...profile.decisionMaking },
    { title: t('section.leadership.item.conflictStyle'), ...profile.conflictStyle },
    { title: t('section.leadership.item.feedbackPreference'), ...profile.feedbackPreference },
    { title: t('section.leadership.item.riskTolerance'), ...profile.riskTolerance },
    { title: t('section.leadership.item.idealManager'), ...profile.idealManagerStyle },
    { title: t('section.leadership.item.teamRole'), ...profile.idealTeamRole },
  ]

  return (
    <PacketPage id="sec-leadership">
      <PageHeader eyebrow={t('section.leadership.eyebrow')} title={t('section.leadership.title')} subtitle={t('section.leadership.subtitle')} />
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="p-4 border border-line rounded-[10px] bg-page">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-6 rounded-full bg-forest text-white flex items-center justify-center text-[11px] font-black">{i + 1}</span>
              <span className="text-[14px] font-bold text-muted">{item.title}</span>
              <span className="ml-auto px-3 py-1 bg-mint rounded-full text-[12px] font-black text-forest">{item.label}</span>
            </div>
            <p className="text-[15px] font-bold text-ink pl-9">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 p-4 bg-panel rounded-[10px]">
        <p className="text-[14px] font-bold text-muted mb-2">{t('section.leadership.motivationDrivers')}</p>
        <div className="flex flex-wrap gap-2">
          {profile.motivationDrivers.map((d, i) => (
            <span key={i} className="px-3 py-1 bg-butter rounded-full text-[13px] font-bold text-ink">{d}</span>
          ))}
        </div>
      </div>
    </PacketPage>
  )
}
