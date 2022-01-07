import React from 'react';
import { useRoutes } from 'react-router';

import { Detail } from './routes/Detail';
import { List } from './routes/List';

import DashboardLayout from '@/layouts/dashboard';

export default function WeatherModule() {
  return useRoutes([
    {
      path: '',
      element: <DashboardLayout />,
      children: [
        { path: '', element: <List /> },
        { path: ':id', element: <Detail /> },
      ],
    },
  ]);
}
