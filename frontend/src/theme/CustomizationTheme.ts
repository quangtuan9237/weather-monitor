import { createTheme, ThemeOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface Theme {
    sidebarCustom: {
      width: React.CSSProperties['width'];
      active: React.CSSProperties['color'];
    };
  }
  interface ThemeOptions {
    sidebarCustom: {
      width: React.CSSProperties['width'];
      active: React.CSSProperties['color'];
    };
  }
}

export function createMyTheme(options?: ThemeOptions) {
  return createTheme({
    ...options,
    // overrides: {
    //   MuiDialogTitle: {
    //     root: {
    //       backgroundColor: '#edf9fb',
    //     },
    //   },
    //   MuiDialogActions: {
    //     root: {
    //       backgroundColor: '#edf9fb',
    //     },
    //   },
    // },
    sidebarCustom: {
      width: 240,
      active: 'blue',
    },
  });
}
