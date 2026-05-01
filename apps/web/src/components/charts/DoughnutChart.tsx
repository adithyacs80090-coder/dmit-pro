import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface SimpleDoughnutData {
  label: string
  value: number
  color: string
}

interface DoughnutChartProps {
  data: SimpleDoughnutData[]
  options?: ChartOptions<'doughnut'>
  className?: string
}

export function DoughnutChart({ data, options, className }: DoughnutChartProps) {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderColor: '#fcfaf8',
        borderWidth: 2,
      },
    ],
  }

  const defaultOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { family: 'Geist', size: 11 },
          color: '#3f554f',
          padding: 12,
        },
      },
      tooltip: {
        backgroundColor: '#19332e',
        titleFont: { family: 'Geist', size: 12 },
        bodyFont: { family: 'Geist', size: 11 },
        padding: 10,
        cornerRadius: 6,
      },
    },
    ...options,
  }

  return (
    <div className={className}>
      <Doughnut data={chartData} options={defaultOptions} />
    </div>
  )
}
