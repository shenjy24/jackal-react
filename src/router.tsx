import { createBrowserRouter } from 'react-router-dom'
import { usersLoader } from '@/features/users/loaders/users.loader'
import { MainLayout } from '@/layouts/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { UsersPage } from '@/pages/UsersPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'users',
        element: <UsersPage />,
        loader: usersLoader,
      },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
])
