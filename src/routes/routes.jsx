import { createBrowserRouter } from 'react-router';
import RootLayout from './../layout/RootLayout';
import Home from '../pages/home/Home/Home'
import Coverage from '../pages/coverage/Coverage';
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivateRoutes from './PrivateRoutes';
import Rider from '../pages/rider/Rider';
import SendParcel from '../pages/sendParcel/SendParcel';
import DashBoardLayout from '../layout/DashBoardLayout';
import MyParcel from '../pages/dashboard/MyParcel';
import Payment from '../pages/dashboard/Payment';
import PaymentSuccess from '../pages/dashboard/PaymentSuccess';
import PaymentCancelled from '../pages/dashboard/PaymentCancelled';
import PaymentHistory from '../pages/dashboard/PaymentHistory';


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
        path: '/rider',
        element: <PrivateRoutes><Rider></Rider></PrivateRoutes>,
        loader: () => fetch('/data/warehouses.json').then(res => res.json())
      },
      {
        path: '/send-parcel',
        element: <PrivateRoutes><SendParcel></SendParcel></PrivateRoutes>,
        loader: () => fetch('/data/warehouses.json').then(res => res.json())
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
  },
  {
    path: 'dashboard',
    element: <PrivateRoutes><DashBoardLayout></DashBoardLayout></PrivateRoutes>,
    children: [
        {
          path: 'my-parcel',
          element: <MyParcel></MyParcel>
        },
        {
          path: 'payment/:parcelId',
          Component: Payment
        },
        {
          path: '/dashboard/payment-history',
          element: <PaymentHistory></PaymentHistory>
        },
        {
          path: 'payment-success',
          element: <PaymentSuccess></PaymentSuccess>
        },
        {
          path: 'payment-cancelled',
          element: <PaymentCancelled></PaymentCancelled>
        }
    ]
  }
]);