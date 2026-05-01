import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'
import { PacketPage } from '@/components/ui/PacketPage'
import { PageHeader } from '@/components/ui/PageHeader'
import { Hero } from '@/components/ui/Hero'
import { StatCard } from '@/components/ui/StatCard'
import { FingerprintGrid } from '@/components/ui/FingerprintGrid'
import { apiClient } from '@/lib/api'

import { BrainLobesSection } from '@/components/sections/BrainLobesSection'
import { DISCSection } from '@/components/sections/DISCSection'
import { PersonalitySection } from '@/components/sections/PersonalitySection'
import { SWOTSection } from '@/components/sections/SWOTSection'
import { IntelligenceSection } from '@/components/sections/IntelligenceSection'
import { TFRCSection } from '@/components/sections/TFRCSection'
import { BrainDominanceSection } from '@/components/sections/BrainDominanceSection'
import { ThoughtProcessSection } from '@/components/sections/ThoughtProcessSection'
import { QuotientsSection } from '@/components/sections/QuotientsSection'
import { LearningStyleSection } from '@/components/sections/LearningStyleSection'
import { ATDSection } from '@/components/sections/ATDSection'
import { LeadershipSection } from '@/components/sections/LeadershipSection'
import { HollandSection } from '@/components/sections/HollandSection'
import { McKenzieSection } from '@/components/sections/McKenzieSection'
import { AcquiringSection } from '@/components/sections/AcquiringSection'
import { ExtraCurricularSection } from '@/components/sections/ExtraCurricularSection'
import { StreamSection } from '@/components/sections/StreamSection'
import { CareerSection } from '@/components/sections/CareerSection'
import { EISection } from '@/components/sections/EISection'
import { RidgeCountSection } from '@/components/sections/RidgeCountSection'
import { BigFiveSection } from '@/components/sections/BigFiveSection'
import { StrengthsSection } from '@/components/sections/StrengthsSection'
import { CollegeMapperSection } from '@/components/sections/CollegeMapperSection'

const FINGER_COLORS: Record<string, string> = {
  W1: '#c23a3a', W2: '#c9a43a', W3: '#b03030', W4: '#c27a3a',
  W5: '#7a3ac2', W6: '#4a9b6b', W7: '#3a9b8a', W8: '#c25a3a',
  W9: '#c25a3a', W10: '#c25a3a', W11: '#c25a3a',
  L: '#3a7cc2', R: '#2a6ab2', L1: '#5a9cd2', R1: '#2aac9a',
  X1: '#a5a5bd', X2: '#8a8aa3', X3: '#8a8aa3', X4: '#8a8aa3',
  W: '#c23a3a',
}

const PATTERN_KEYS: Record<string, string> = {
  W1: 'reports.view.pattern.targetCentric',
  W2: 'reports.view.pattern.spiral',
  W3: 'reports.view.pattern.elongatedTargetCentric',
  W4: 'reports.view.pattern.elongatedSpiral',
  W5: 'reports.view.pattern.doubleLoop',
  W6: 'reports.view.pattern.imploding',
  W7: 'reports.view.pattern.composite',
  W8: "reports.view.pattern.targetCentricUlnarPeacocksEye",
  W9: "reports.view.pattern.spiralUlnarPeacocksEye",
  W10: "reports.view.pattern.targetCentricRadialPeacocksEye",
  W11: "reports.view.pattern.spiralRadialPeacocksEye",
  L: 'reports.view.pattern.ulnarLoop',
  R: 'reports.view.pattern.radialLoop',
  L1: 'reports.view.pattern.ulnarFallingLoop',
  R1: 'reports.view.pattern.radialFallingLoop',
  X1: 'reports.view.pattern.plainArch',
  X2: 'reports.view.pattern.tentedArch',
  X3: 'reports.view.pattern.tentedArchWithUlnarLoop',
  X4: 'reports.view.pattern.tentedArchWithRadialLoop',
  W: 'reports.view.pattern.accidentalWhorl',
}

const FINGER_KEYS = [
  'reports.view.finger.l1',
  'reports.view.finger.l2',
  'reports.view.finger.l3',
  'reports.view.finger.l4',
  'reports.view.finger.l5',
  'reports.view.finger.r1',
  'reports.view.finger.r2',
  'reports.view.finger.r3',
  'reports.view.finger.r4',
  'reports.view.finger.r5',
]

export function ReportViewPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation()

  const { data: report, isLoading } = useQuery({
    queryKey: ['report', id],
    queryFn: async () => {
      const response = await apiClient.get(`/reports/${id}`)
      return response.data
    },
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-h3 text-muted font-bold">{t('reports.view.loading')}</div>
      </div>
    )
  }

  if (!report) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-h3 text-clay font-bold">{t('reports.view.notFound')}</div>
      </div>
    )
  }

  const { client, results, fingerprintData } = report
  const fingerNames = FINGER_KEYS.map((k) => t(k))

  const fingerprints = fingerprintData.patterns.map((code: string, i: number) => ({
    finger: fingerNames[i],
    code,
    name: t(PATTERN_KEYS[code] || code),
    color: FINGER_COLORS[code] || '#00715f',
  }))

  const r = results
  const brainSideLabel = r.brainSide === 'balanced' ? t('reports.view.brainDominanceValue.balanced')
    : r.brainSide === 'right' ? t('reports.view.brainDominanceValue.right')
    : t('reports.view.brainDominanceValue.left')

  return (
    <div className="space-y-6">
      {/* Section 00: Cover */}
      <PacketPage id="sec-cover">
        <Hero
          eyebrow={t('reports.view.cover.eyebrow')}
          title={client.name}
          subtitle={t('reports.view.cover.subtitle')}
        />
        <div className="mt-6">
          <FingerprintGrid fingerprints={fingerprints} />
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          <StatCard label={t('reports.view.stat.analysisNo')} value={client.analysisNo} color="#00715f" bgColor="#a2ed7a" />
          <StatCard label={t('reports.view.stat.dob')} value={client.dob} color="#087eb1" bgColor="#6edaf2" />
          <StatCard label={t('reports.view.stat.tfrc')} value={r.tfrc} color="#f5ad28" bgColor="#ffd84d" />
          <StatCard
            label={t('reports.view.stat.brainDominance')}
            value={brainSideLabel}
            color="#ff7c59"
            bgColor="#fff3bf"
          />
        </div>
      </PacketPage>

      {/* Section 01: Profile */}
      <PacketPage id="sec-profile">
        <PageHeader eyebrow={t('reports.view.profile.eyebrow')} title={t('reports.view.profile.title')} subtitle={t('reports.view.profile.subtitle')} />
        <div className="grid grid-cols-4 gap-4">
          <div className="p-5 border border-line rounded-[10px] bg-page" style={{ borderTop: '6px solid #00715f' }}>
            <span className="inline-block px-3 py-1 bg-mint rounded-full text-[11px] font-black uppercase mb-3">{t('reports.view.profile.label.fullName')}</span>
            <strong className="text-[22px] block font-bold">{client.name}</strong>
          </div>
          <div className="p-5 border border-line rounded-[10px] bg-page" style={{ borderTop: '6px solid #087eb1' }}>
            <span className="inline-block px-3 py-1 bg-sky rounded-full text-[11px] font-black uppercase mb-3">{t('reports.view.profile.label.dob')}</span>
            <strong className="text-[22px] block font-bold">{client.dob}</strong>
          </div>
          <div className="p-5 border border-line rounded-[10px] bg-page" style={{ borderTop: '6px solid #f5ad28' }}>
            <span className="inline-block px-3 py-1 bg-butter rounded-full text-[11px] font-black uppercase mb-3">{t('reports.view.profile.label.mobile')}</span>
            <strong className="text-[22px] block font-bold">{client.mobile || '—'}</strong>
          </div>
          <div className="p-5 border border-line rounded-[10px] bg-page" style={{ borderTop: '6px solid #ff7c59' }}>
            <span className="inline-block px-3 py-1 bg-cream rounded-full text-[11px] font-black uppercase mb-3">{t('reports.view.profile.label.email')}</span>
            <strong className="text-[22px] block font-bold">{client.email || '—'}</strong>
          </div>
        </div>
      </PacketPage>

      {/* Section 02: Fingerprint Data Table */}
      <PacketPage id="sec-fingerprints">
        <PageHeader eyebrow={t('reports.view.fingerprints.eyebrow')} title={t('reports.view.fingerprints.title')} subtitle={t('reports.view.fingerprints.subtitle')} />
        <div className="overflow-x-auto">
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b-2 border-forest">
                <th className="text-left py-3 px-4 font-black text-ink">{t('reports.view.fingerprints.header.finger')}</th>
                <th className="text-left py-3 px-4 font-black text-ink">{t('reports.view.fingerprints.header.patternCode')}</th>
                <th className="text-left py-3 px-4 font-black text-ink">{t('reports.view.fingerprints.header.patternName')}</th>
                <th className="text-left py-3 px-4 font-black text-ink">{t('reports.view.fingerprints.header.ridgeCount')}</th>
                <th className="text-left py-3 px-4 font-black text-ink">{t('reports.view.fingerprints.header.intelligence')}</th>
              </tr>
            </thead>
            <tbody>
              {r.fingerManifested.map((f: any, i: number) => (
                <tr key={i} className="border-b border-line">
                  <td className="py-3 px-4 font-bold">{fingerNames[i]}</td>
                  <td className="py-3 px-4">
                    <span className="px-2 py-1 rounded text-[12px] font-black text-white" style={{ background: FINGER_COLORS[f.code] || '#00715f' }}>
                      {f.code}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-bold">{t(PATTERN_KEYS[f.code] || f.code)}</td>
                  <td className="py-3 px-4 font-black">{f.ridgeCount}</td>
                  <td className="py-3 px-4 text-muted font-bold capitalize">{f.key}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </PacketPage>

      {/* Sections 03-25 */}
      <BrainLobesSection lobes={r.brainLobes} />
      <DISCSection discProfile={r.discProfile} dominant={r.dominantDISC} />
      <PersonalitySection personality={r.personality} />
      <SWOTSection swot={r.swot} />
      <IntelligenceSection intelligenceData={r.intelligenceData} topIntelligences={r.topIntelligences} />
      <TFRCSection tfrc={r.tfrc} />
      <BrainDominanceSection rbPct={r.rbPct} lbPct={r.lbPct} brainSide={r.brainSide} />
      <ThoughtProcessSection objectConcept={r.objectConcept} />
      <QuotientsSection iq={r.iq} eq={r.eq} cq={r.cq} aq={r.aq} interpretations={r.quotientInterpretations} />
      <LearningStyleSection learningStyle={r.learningStyle} fingerLearning={r.fingerLearning} />
      <ATDSection
        atdLeft={r.atdLeft}
        atdRight={r.atdRight}
        atdAvg={r.atdAvg}
        interpretation={r.atdInterpretation}
        leftInterp={r.atdLeftInterpretation}
        rightInterp={r.atdRightInterpretation}
        brainSpeed={r.atdBrainSpeed}
      />
      <LeadershipSection profile={r.workplaceProfile} />
      <HollandSection holland={r.holland} top2={r.hollandTop2} />
      <McKenzieSection mckenzie={r.mckenzie} top={r.mckenzieTop} />
      <AcquiringSection methods={r.acquiringMethods} />
      <ExtraCurricularSection activities={r.extraCurricular} />
      <StreamSection stream={r.stream} top={r.streamTop} />
      <CareerSection careers={r.careerList} topCareers={r.topCareers} />
      <EISection eiScores={r.eiScores} />
      <RidgeCountSection analysis={r.fingerRCAnalysis} />
      <BigFiveSection bigFive={r.bigFive} />
      <StrengthsSection strengths={r.top5Strengths} dominantDomain={r.dominantStrengthsDomain} />
      <CollegeMapperSection careers={r.careerList} age={client.ageAtTest} />
    </div>
  )
}
