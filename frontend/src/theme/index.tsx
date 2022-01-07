// GITHUB: https://github.com/minimal-ui-kit/material-kit-react
/* eslint-disable import/namespace */
// material
import { StyledEngineProvider, createTheme, CssBaseline } from '@mui/material';
import * as locales from '@mui/material/locale';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as ThemeProviderOld } from '@mui/styles';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

//
import GlobalStyles from './globalStyles';
import componentsOverride from './overrides';
import palette from './palette';
import shadows, { customShadows } from './shadows';
import shape from './shape';
import typography from './typography';

// ----------------------------------------------------------------------
type SupportedLocales = keyof typeof locales;

// const langObject: Record<string, SupportedLocales> = {
//   vi: 'viVN',
//   en: 'enUS',
// };

type ThemeConfigProps = {
  children?: JSX.Element;
};

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const { i18n } = useTranslation();
  const themeOptions: any = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows,
    }),
    []
  );

  const theme = createTheme(themeOptions, locales[i18n.language as SupportedLocales]);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ThemeProviderOld theme={theme}>
          <CssBaseline />
          <GlobalStyles />
          {children}
        </ThemeProviderOld>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
