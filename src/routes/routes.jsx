import { createBrowserRouter } from 'react-router';
import RootLayout from './../layout/RootLayout';
import Home from '../pages/home/Home/Home'
import Coverage from '../pages/coverage/Coverage';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'coverage',
        element: <Coverage></Coverage>,
        loader: () => fetch('/data/warehouses.json').then(res => res.json())
      }

    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  }
]);