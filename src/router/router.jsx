import React from 'react'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from '../components/base/layout/main-layout'
import RootError from '../components/errors/root-error'
import Profile from '../views/profile/Profile'
import Login from '../views/login/Login'

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <RootError />,
    children: [
      { index: true, element: <Navigate to="/" replace /> },
      {
        path: '/profile',
        element: <Profile />,
        lazy: () => import('../views/profile/Profile')
      }
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <RootError />,
    lazy: () => import('../views/login/Login')
  }
])

function Router() {
  return React.createElement(RouterProvider, { router })
}

export default Router
