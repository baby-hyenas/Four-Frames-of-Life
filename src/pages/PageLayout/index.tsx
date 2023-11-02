import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '@/ScrollToTop';
import { Loading, NavBar } from '@/components/Common';

const PageLayout = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTop />
      <div className="w-screen h-screen bg-black">
        <NavBar title="Four Frames of Life" />
        <Outlet />
      </div>
    </Suspense>
  );
};

export default PageLayout;