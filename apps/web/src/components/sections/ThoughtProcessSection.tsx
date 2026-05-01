import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'

interface ObjectConcept {
  leftObject: number
  leftConcept: number
  rightObject: number
  rightConcept: number
  objectTotal: number
  conceptTotal: number
  executorL: number
  thinkerL: number
  executorR: number
  thinkerR: number
}

export function ThoughtProcessSection({ objectConcept }: { objectConcept: ObjectConcept }) {
  const { t } = useTranslation()
  return (
    <PacketPage id="sec-thought-process">
      <PageHeader eyebrow={t('section.thoughtProcess.eyebrow')} title={t('section.thoughtProcess.title')} subtitle={t('section.thoughtProcess.subtitle')} />
      <div className="grid grid-cols-2 gap-4">
        <div className="p-5 border border-line rounded-[10px] bg-page">
          <h4 className="text-h3 font-bold text-ink mb-4">{t('section.thoughtProcess.leftBrain')}</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[14px] font-bold mb-1">
                <span>{t('section.thoughtProcess.objectExecutor')}</span>
                <span>{Math.round(objectConcept.executorL * 100)}%</span>
              </div>
              <div className="h-2 bg-line rounded-full overflow-hidden">
                <div className="h-full bg-forest rounded-full" style={{ width: `${objectConcept.executorL * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[14px] font-bold mb-1">
                <span>{t('section.thoughtProcess.conceptThinker')}</span>
                <span>{Math.round(objectConcept.thinkerL * 100)}%</span>
              </div>
              <div className="h-2 bg-line rounded-full overflow-hidden">
                <div className="h-full bg-lake rounded-full" style={{ width: `${objectConcept.thinkerL * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 border border-line rounded-[10px] bg-page">
          <h4 className="text-h3 font-bold text-ink mb-4">{t('section.thoughtProcess.rightBrain')}</h4>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[14px] font-bold mb-1">
                <span>{t('section.thoughtProcess.objectExecutor')}</span>
                <span>{Math.round(objectConcept.executorR * 100)}%</span>
              </div>
              <div className="h-2 bg-line rounded-full overflow-hidden">
                <div className="h-full bg-forest rounded-full" style={{ width: `${objectConcept.executorR * 100}%` }} />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[14px] font-bold mb-1">
                <span>{t('section.thoughtProcess.conceptThinker')}</span>
                <span>{Math.round(objectConcept.thinkerR * 100)}%</span>
              </div>
              <div className="h-2 bg-line rounded-full overflow-hidden">
                <div className="h-full bg-lake rounded-full" style={{ width: `${objectConcept.thinkerR * 100}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 p-4 bg-panel rounded-[10px]">
        <p className="text-[15px] font-bold text-ink">
          {objectConcept.objectTotal > objectConcept.conceptTotal
            ? t('section.thoughtProcess.actionOriented')
            : t('section.thoughtProcess.conceptOriented')}
        </p>
      </div>
    </PacketPage>
  )
}
