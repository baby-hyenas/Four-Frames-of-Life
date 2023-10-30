// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import ScrollToTop from '@/ScrollToTop';

// const PageLayout = () => {
//   return (
//     <Suspense>
//       <ScrollToTop />
//       <div className="h-screen">
//         <div className="max-w-[480px] bg-white h-screen m-auto">
//           <Outlet />
//         </div>
//       </div>
//     </Suspense>
//   );
// };

import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  return (
    <Outlet />
  );
};

export default PageLayout;