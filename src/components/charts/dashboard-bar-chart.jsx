import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
]

const generateRandomData = () =>
  labels.map(() => Math.floor(Math.random() * 100))

const data = {
  labels,
  datasets: [
    {
      label: 'Attendees',
      data: generateRandomData(),
      backgroundColor: 'rgba(53, 162, 235, 0.5)'
    },
    {
      label: 'Absents',
      data: generateRandomData(),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    }
  ]
}

function DashboardBarChart() {
  return <Bar options={options} data={data} />
}

export default DashboardBarChart
