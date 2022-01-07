import React from 'react';

import { AppSnackbarsContainer } from '.';

const ToastContext = React.createContext<any>(null);
export const useToast = () => React.useContext(ToastContext);

let id = 1;

export const AppSnackbarsProvider = ({ children }: { children: JSX.Element }) => {
  const [toasts, setToasts] = React.useState<any[]>([]);

  const addToast = React.useCallback(
    (content, severity) => {
      setToasts((toasts) => [
        ...toasts,
        {
          id: id++,
          content,
          severity,
        },
      ]);
    },
    [setToasts]
  );

  const removeToast = React.useCallback(
    (id) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== id));
    },
    [setToasts]
  );

  return (
    <ToastContext.Provider
      value={{
        addToast,
        removeToast,
      }}
    >
      <AppSnackbarsContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  );
};
