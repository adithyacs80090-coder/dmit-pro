import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

interface SimpleBarData {
  label: string
  value: number
  color: string
}

interface BarChartProps {
  data: SimpleBarData[]
  options?: ChartOptions<'bar'>
  className?: string
}

export function BarChart({ data, options, className }: BarChartProps) {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderColor: '#fcfaf8',
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  }

  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#19332e',
        titleFont: { family: 'Geist', size: 12 },
        bodyFont: { family: 'Geist', size: 11 },
        padding: 10,
        cornerRadius: 6,
      },
    },
    scales: {
      x: {
        ticks: { font: { family: 'Geist', size: 10 }, color: '#a5a5bd' },
        grid: { color: '#cbbf9c' },
      },
      y: {
        ticks: { font: { family: 'Geist', size: 10 }, color: '#a5a5bd' },
        grid: { color: '#cbbf9c' },
        beginAtZero: true,
      },
    },
    ...options,
  }

  return (
    <div className={className}>
      <Bar data={chartData} options={defaultOptions} />
    </div>
  )
}
