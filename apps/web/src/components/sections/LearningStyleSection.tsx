import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { BarChart } from '@/components/charts/BarChart'

interface LearningStyleEntry {
  value: number
  percent: number
}

export function LearningStyleSection({ learningStyle, fingerLearning }: { learningStyle: Record<string, LearningStyleEntry>; fingerLearning: { finger: string; code: string; style: string }[] }) {
  const { t } = useTranslation()
  const styleKeys: Record<string, string> = {
    Kinesthetic: t('section.learningStyle.style.kinesthetic'),
    Auditory: t('section.learningStyle.style.auditory'),
    Visual: t('section.learningStyle.style.visual'),
  }

  const data = [
    { label: styleKeys.Kinesthetic, value: Math.round(learningStyle.Kinesthetic.percent * 100), color: '#ef4444' },
    { label: styleKeys.Auditory, value: Math.round(learningStyle.Auditory.percent * 100), color: '#f59e0b' },
    { label: styleKeys.Visual, value: Math.round(learningStyle.Visual.percent * 100), color: '#3b82f6' },
  ]

  const styleColors: Record<string, string> = { Kinesthetic: '#ef4444', Auditory: '#f59e0b', Visual: '#3b82f6' }
  const top = data.sort((a, b) => b.value - a.value)[0]
  const topKey = top.label === styleKeys.Kinesthetic ? 'kinesthetic' : top.label === styleKeys.Auditory ? 'auditory' : 'visual'

  return (
    <PacketPage id="sec-learning-style">
      <PageHeader eyebrow={t('section.learningStyle.eyebrow')} title={t('section.learningStyle.title')} subtitle={t('section.learningStyle.subtitle')} />
      <div className="grid grid-cols-2 gap-6">
        <div className="h-64">
          <BarChart data={data} />
        </div>
        <div>
          <p className="text-[14px] font-bold text-muted mb-2">{t('section.learningStyle.perFingerStyle')}</p>
          <div className="grid grid-cols-5 gap-2">
            {fingerLearning.map((f, i) => (
              <div key={i} className="p-3 border border-line rounded-[10px] bg-page text-center">
                <span className="text-[11px] font-bold text-muted block">{f.finger}</span>
                <div className="w-6 h-6 rounded-full mx-auto my-1" style={{ background: styleColors[f.style] || '#00715f' }} />
                <span className="text-[11px] font-black uppercase" style={{ color: styleColors[f.style] || '#00715f' }}>{f.style[0]}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 p-4 bg-panel rounded-[10px]">
            <p className="text-[15px] font-bold text-ink">
              {t('section.learningStyle.primaryPrefix')}{top.label} ({top.value}%)
            </p>
            <p className="text-[14px] text-muted font-bold mt-1">
              {t('section.learningStyle.descriptionPrefix')}{top.label.toLowerCase()}{t('section.learningStyle.descriptionConnector')}{t(`section.learningStyle.description.${topKey}`)}
            </p>
          </div>
        </div>
      </div>
    </PacketPage>
  )
}
