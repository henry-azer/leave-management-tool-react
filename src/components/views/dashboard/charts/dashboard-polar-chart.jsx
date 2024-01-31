import React from 'react'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { PolarArea } from 'react-chartjs-2'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

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
  'Attendees',
  'Absents',
  'On Time',
  'Early Departures',
  'Late Arrivals'
]

const generateRandomData = () =>
  labels.map(() => Math.floor(Math.random() * 100))

const data = {
  labels,
  datasets: [
    {
      label: 'Total Employees',
      data: generateRandomData(),
      backgroundColor: [
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)'
      ],
      borderWidth: 1
    }
  ]
}

function DashboardPolarChart() {
  return <PolarArea data={data} options={options} />
}

export default DashboardPolarChart
