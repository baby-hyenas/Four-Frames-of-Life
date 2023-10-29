import { RootPage, PageLayout } from '@/pages';
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
          path: '/*',
          element: <Navigate to="/" />,
        },
      ],
    },
  ]);
  
  export default router;