import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { App } from '@/App'
import { SignIn } from '@/components/auth/SignIn'
import { useGetDecksQuery } from '@/services/decks/decksService'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/sign-in',
  },
  {
    element: <div>Sign Up</div>,
    path: '/sign-up',
  },
  {
    element: <div>Forgot your password?</div>,
    path: '/recover-password',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <App />,
    path: '/',
  },
]

export const Router = () => {
  const result = useGetDecksQuery()

  console.log(result)

  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  // todo: нужно удалить, когда будет готова авторизация
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])
