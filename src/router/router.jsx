import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainLayout from '../components/base/layout/main-layout'
import RootError from '../components/base/error/root-error'

import Dashboard from '../views/dashboard/dashboard'
import Employees from '../views/employees/employees'
import Attendance from '../views/attendance/attendance'
import Statistics from '../views/statistics/statistics'

import Settings from '../views/settings/settings'
import Policies from '../views/policies/policies'

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: '/employees',
        element: <Employees />,
        lazy: () => import('../views/employees/employees')
      },
      {
        path: '/attendance',
        element: <Attendance />,
        lazy: () => import('../views/attendance/attendance')
      },
      {
        path: '/statistics',
        element: <Statistics />,
        lazy: () => import('../views/statistics/statistics')
      },
      {
        path: '/settings',
        element: <Settings />,
        lazy: () => import('../views/settings/settings')
      },
      {
        path: '/policies',
        element: <Policies />,
        lazy: () => import('../views/policies/policies')
      }
    ]
  }
])

function Router() {
  return React.createElement(RouterProvider, { router })
}

export default Router
