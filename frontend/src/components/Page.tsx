/* eslint-disable react/display-name */
import { Box, BoxTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { forwardRef } from 'react';
import { Helmet } from 'react-helmet-async';

type PageProps = {
  children: React.ReactNode;
  title?: string;
} & Omit<OverridableComponent<BoxTypeMap<Record<string, unknown>, 'div'>>, "'renderInput'">;

const Page = forwardRef(({ children, title = '', ...other }: PageProps, ref) => (
  <Box ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </Box>
));

export default Page;
