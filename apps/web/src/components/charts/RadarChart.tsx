import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartOptions,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface SimpleRadarData {
  label: string
  value: number
  color?: string
}

interface RadarChartProps {
  data: SimpleRadarData[]
  options?: ChartOptions<'radar'>
  className?: string
}

export function RadarChart({ data, options, className }: RadarChartProps) {
  const chartData = {
    labels: data.map(d => d.label),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: 'rgba(0, 113, 95, 0.2)',
        borderColor: '#00715f',
        pointBackgroundColor: data.map(d => d.color || '#00715f'),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00715f',
        borderWidth: 2,
        pointRadius: 4,
      },
    ],
  }

  const defaultOptions: ChartOptions<'radar'> = {
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
      r: {
        min: 0,
        ticks: {
          font: { family: 'Geist', size: 9 },
          color: '#a5a5bd',
          backdropColor: 'transparent',
        },
        grid: { color: '#cbbf9c' },
        pointLabels: {
          font: { family: 'Geist', size: 11 },
          color: '#3f554f',
        },
      },
    },
    ...options,
  }

  return (
    <div className={className}>
      <Radar data={chartData} options={defaultOptions} />
    </div>
  )
}
