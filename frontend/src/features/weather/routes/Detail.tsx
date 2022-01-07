import { styled, Box, Button, Typography, Container } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { useWeather } from '../api/useWeather';

import { MotionContainer, varBounceIn } from '@/components/animate';
import Page from '@/components/Page';

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(2),
}));

// ----------------------------------------------------------------------

export function Detail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useWeather({ lat: searchParams.get('lat'), lon: searchParams.get('lon') });
  console.log('DETAIL', { lat: searchParams.get('lat'), lon: searchParams.get('lon') });

  return (
    <RootStyle title={'Weather Detail'}>
      <Container></Container>
    </RootStyle>
  );
}
