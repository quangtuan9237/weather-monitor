import React from 'react';
import { useTranslation } from 'react-i18next';

import './App.css';
import './theme/CustomizationTheme';

import './lib/i18n';
import './lib/yup';

import { ScrollToTop } from './components/ScrollToTop';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}
