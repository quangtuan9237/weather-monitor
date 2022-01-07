import React from 'react';

import { AppSnackbars } from '.';

export const AppSnackbarsContainer = ({ toasts }: any) => {
  return (
    <>
      {toasts.map((toast: any) => (
        <AppSnackbars
          key={toast.id}
          message={toast.content}
          severity={toast.severity}
          isOpen={true}
        />
      ))}
    </>
  );
};
