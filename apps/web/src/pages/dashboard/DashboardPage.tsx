import { useTranslation } from 'react-i18next'

export function DashboardPage() {
  const { t } = useTranslation()

  return (
    <div>
      <header className="mb-8">
        <p className="eyebrow">{t('dashboard.overview')}</p>
        <h2 className="text-h2">{t('nav.dashboard')}</h2>
      </header>
      <div className="grid grid-cols-4 gap-5 mb-8">
        {[
          { label: t('dashboard.totalReports'), value: '0', color: 'bg-mint' },
          { label: t('dashboard.clients'), value: '0', color: 'bg-sky' },
          { label: t('dashboard.subscription'), value: 'Active', color: 'bg-butter' },
          { label: t('dashboard.daysLeft'), value: '365', color: 'bg-cream' },
        ].map((stat) => (
          <div key={stat.label} className="packet-page" style={{ backgroundImage: 'none', borderTop: '6px solid var(--forest)' }}>
            <p className="text-caption text-muted mb-2">{stat.label}</p>
            <p className="text-h2 font-black">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
