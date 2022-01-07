import NiceModal from '@ebay/nice-modal-react';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter } from 'react-router-dom';

import { Loading } from '@/components/Loading';
import { AppSnackbarsProvider } from '@/components/Snackbars';
import { ErrorFallback } from '@/features/misc';
import { queryClient } from '@/lib/react-query';
import ThemeConfig from '@/theme';
import { __PROD__ } from '@/utils/env';

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <Suspense fallback={<Loading type="root" color="#00AB55" />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <ThemeConfig>
            <BrowserRouter>
              <AppSnackbarsProvider>
                <NiceModal.Provider>{children}</NiceModal.Provider>
              </AppSnackbarsProvider>
            </BrowserRouter>
          </ThemeConfig>
          {!__PROD__ && <ReactQueryDevtools />}.
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
}
