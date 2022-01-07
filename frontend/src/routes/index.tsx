import { Navigate, PartialRouteObject, useRoutes } from 'react-router-dom';

import { Page404 } from '@/features/misc';
import WeatherModule from '@/features/weather/WeatherModule';

export const AppRoutes = () => {
  const commonRoutes: PartialRouteObject[] = [
    {
      path: '/',
      element: <Navigate to="/weather/" />,
    },
    {
      path: '/weather/*',
      element: <WeatherModule></WeatherModule>,
    },
    { path: '404', element: <Page404 /> },
    { path: '*', element: <Navigate to="/404" replace /> },
  ];

  const element = useRoutes([...commonRoutes]);

  return <>{element}</>;
};
