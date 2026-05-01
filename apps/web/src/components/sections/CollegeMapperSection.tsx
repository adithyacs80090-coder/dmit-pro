import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { useQuery } from '@tanstack/react-query'
import { apiClient } from '@/lib/api'

interface CareerEntry {
  name: string
  val: number
  stars: number
  starsDisplay: string
}

interface CollegeEntry {
  name: string
  location: string
  ranking: number | string
  fees: string
  exam: string
  course: string
  type: string
}

interface CareerColleges {
  india: CollegeEntry[]
  abroad: CollegeEntry[]
}

function getTier(matchPct: number, t: any) {
  if (matchPct >= 14) return { label: t('section.collegeMapper.tier.bestFit'), color: '#00715f', bg: '#e3efe7' }
  if (matchPct >= 11) return { label: t('section.collegeMapper.tier.strongFit'), color: '#087eb1', bg: '#dbeef4' }
  if (matchPct >= 9) return { label: t('section.collegeMapper.tier.goodFit'), color: '#f5ad28', bg: '#fff3bf' }
  return { label: t('section.collegeMapper.tier.developingFit'), color: '#ff7c59', bg: '#f0dfd8' }
}

export function CollegeMapperSection({ careers, age }: { careers: CareerEntry[]; age: number }) {
  const { t } = useTranslation()
  const topCareers = careers.slice(0, 5)

  const { data: collegeMap } = useQuery({
    queryKey: ['colleges', topCareers.map(c => c.name)],
    queryFn: async () => {
      const map: Record<string, CareerColleges> = {}
      for (const career of topCareers) {
        try {
          const res = await apiClient.get(`/api/colleges/${encodeURIComponent(career.name)}`)
          map[career.name] = res.data
        } catch {
          // no colleges for this career
        }
      }
      return map
    },
    enabled: topCareers.length > 0,
  })

  const careersWithColleges = topCareers.filter(c => collegeMap?.[c.name])

  if (careersWithColleges.length === 0) {
    return (
      <PacketPage id="sec-colleges">
        <PageHeader eyebrow={t('section.collegeMapper.eyebrow')} title={t('section.collegeMapper.title')} subtitle={t('section.collegeMapper.subtitle')} />
        <div className="p-8 text-center">
          <p className="text-h3 font-bold text-muted">{t('section.collegeMapper.emptyState')}</p>
        </div>
      </PacketPage>
    )
  }

  return (
    <PacketPage id="sec-colleges">
      <PageHeader eyebrow={t('section.collegeMapper.eyebrow')} title={t('section.collegeMapper.title')} subtitle={t('section.collegeMapper.subtitle')} />

      {age < 18 && (
        <div className="mb-4 p-4 bg-butter/30 border border-butter rounded-[10px]">
          <p className="text-[14px] font-bold text-ink">
            {t('section.collegeMapper.ageWarning', { age })}
          </p>
        </div>
      )}

      <div className="space-y-6">
        {careersWithColleges.map((career) => {
          const colleges = collegeMap?.[career.name]
          if (!colleges) return null
          const tier = getTier(career.val * 100, t)
          return (
            <div key={career.name} className="border border-line rounded-[10px] bg-page overflow-hidden">
              <div className="p-4 flex items-center justify-between" style={{ background: tier.bg }}>
                <div>
                  <h4 className="text-h3 font-bold" style={{ color: tier.color }}>{career.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[13px] font-bold" style={{ color: tier.color }}>{t('section.collegeMapper.matchLabel')}{Math.round(career.val * 100)}%</span>
                    <span className="px-2 py-1 rounded-full text-[11px] font-black text-white" style={{ background: tier.color }}>{tier.label}</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="text-[14px] font-bold text-muted mb-3">{t('section.collegeMapper.topCollegesIndia')}</p>
                <div className="space-y-2">
                  {colleges.india.map((college, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 border border-line rounded-[8px] bg-page">
                      <span className="w-6 h-6 rounded-full bg-forest text-white flex items-center justify-center text-[11px] font-black flex-shrink-0">{i + 1}</span>
                      <div className="flex-1">
                        <p className="text-[14px] font-bold text-ink">{college.name}</p>
                        <p className="text-[12px] text-muted font-bold">{college.location} | {college.course} | {t('section.collegeMapper.feesLabel')}{college.fees}</p>
                      </div>
                      <span className="px-2 py-1 bg-panel rounded text-[11px] font-bold text-muted">{college.exam}</span>
                    </div>
                  ))}
                </div>

                <p className="text-[14px] font-bold text-muted mb-3 mt-4">{t('section.collegeMapper.topUniversitiesAbroad')}</p>
                <div className="space-y-2">
                  {colleges.abroad.map((college, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 border border-line rounded-[8px] bg-page">
                      <span className="w-6 h-6 rounded-full bg-lake text-white flex items-center justify-center text-[11px] font-black flex-shrink-0">{i + 1}</span>
                      <div className="flex-1">
                        <p className="text-[14px] font-bold text-ink">{college.name}</p>
                        <p className="text-[12px] text-muted font-bold">{college.location} | {college.course} | {t('section.collegeMapper.feesLabel')}{college.fees}</p>
                      </div>
                      <span className="px-2 py-1 bg-panel rounded text-[11px] font-bold text-muted">{college.exam}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </PacketPage>
  )
}
