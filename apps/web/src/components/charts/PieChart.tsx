import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

interface PieChartProps {
  data: ChartData<'pie'>
  options?: ChartOptions<'pie'>
  className?: string
}

export function PieChart({ data, options, className }: PieChartProps) {
  const defaultOptions: ChartOptions<'pie'> = {
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
      <Pie data={data} options={defaultOptions} />
    </div>
  )
}
