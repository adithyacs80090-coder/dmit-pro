import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { StarRating } from '@/components/ui/StarRating'
import { Badge } from '@/components/ui/Badge'

interface CareerEntry {
  name: string
  val: number
  stars: number
  starsDisplay: string
}

export function CareerSection({ careers, topCareers }: { careers: CareerEntry[]; topCareers: CareerEntry[] }) {
  const { t } = useTranslation()
  return (
    <PacketPage id="sec-career">
      <PageHeader eyebrow={t('section.career.eyebrow')} title={t('section.career.title')} subtitle={t('section.career.subtitle')} />
      <div className="grid grid-cols-1 gap-3 mb-6">
        {topCareers.map((career, i) => (
          <div key={i} className="p-4 border border-line rounded-[10px] bg-page flex items-center gap-4" style={{ borderLeft: '6px solid #00715f' }}>
            <span className="w-10 h-10 rounded-full bg-forest text-white flex items-center justify-center text-h3 font-black flex-shrink-0">
              {i + 1}
            </span>
            <div className="flex-1">
              <h4 className="text-h3 font-bold text-ink">{career.name}</h4>
              <div className="flex items-center gap-3 mt-1">
                <StarRating rating={career.stars} className="text-[16px]" />
                <span className="text-[13px] font-bold text-muted">{t('section.career.matchLabel')}{Math.round(career.val * 100)}%</span>
              </div>
            </div>
            <Badge variant={i === 0 ? 'success' : i === 1 ? 'info' : 'warning'}>
              {i === 0 ? t('section.career.badge.bestFit') : i === 1 ? t('section.career.badge.strongFit') : i === 2 ? t('section.career.badge.goodFit') : t('section.career.badge.developing')}
            </Badge>
          </div>
        ))}
      </div>
      <div className="p-4 bg-panel rounded-[10px]">
        <p className="text-[14px] font-bold text-muted mb-2">{t('section.career.allMatchesPrefix')}{careers.length}{t('section.career.allMatchesSuffix')}</p>
        <div className="flex flex-wrap gap-2">
          {careers.slice(0, 30).map((c, i) => (
            <span key={i} className="px-2 py-1 bg-page border border-line rounded text-[12px] font-bold text-ink">
              {c.name}
            </span>
          ))}
          {careers.length > 30 && (
            <span className="px-2 py-1 text-[12px] font-bold text-muted">+{careers.length - 30}{t('section.career.moreSuffix')}</span>
          )}
        </div>
      </div>
    </PacketPage>
  )
}
