import { RootPage, PageLayout, CapturePage } from '@/pages';
import { Navigate, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          path: '/',
          element: <RootPage />,
        },
        {
          path: '/capture',
          element: <CapturePage />,
        },
        {
          path: '/*',
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
  
  export default router;