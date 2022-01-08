import { styled, Stack, Box, Button, Typography, Container } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

import { useWeatherById } from '../api/useWeatherById';
import { useWeatherForecast } from '../api/useWeatherForecast';
import { WeatherForecastCard, WeatherDailyForecastCard } from '../components';

import { MotionContainer, varBounceIn } from '@/components/animate';
import { Loading } from '@/components/Loading';
import Page from '@/components/Page';

const RootStyle = styled(Page)(({ theme }) => ({
  display: 'flex',
  minHeight: '100%',
  alignItems: 'center',
}));

const CoverImgStyle = styled('img')({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  opacity: 0.3,
  position: 'fixed',
});

export function Detail() {
  const [searchParams, setSearchParams] = useSearchParams();

  const { data: weatherById, isLoading: weatherByIdLoading } = useWeatherById({
    id: searchParams.get('id'),
  });

  console.log('weatherByIdLoading', weatherById);

  const { data, isLoading } = useWeatherForecast({
    lat: weatherById?.coord.lat,
    lon: weatherById?.coord.lon,
    config: {
      enabled: !!(weatherById?.coord.lat && weatherById?.coord.lon),
    },
  });

  if (isLoading || weatherByIdLoading) {
    return <Loading type="center" />;
  }

  return (
    <RootStyle title={'Weather Detail'}>
      <CoverImgStyle alt={'hello'} src={`/img/${weatherById.weather[0].main}.jpg`} />
      <Container>
        <Stack spacing={5}>
          <Stack>
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 100,
                textAlign: 'center',
              }}
            >
              {weatherById?.name}
            </Typography>
            <Typography
              sx={{
                fontSize: '5rem',
                lineHeight: 1,
                fontWeight: 100,
                textAlign: 'center',
              }}
            >
              {Math.round(data?.current.temp) + '\u00b0'}
            </Typography>
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 100,
                textAlign: 'center',
                margin: 0,
                textTransform: 'capitalize',
              }}
            >
              {data?.current.weather[0].description}
            </Typography>
            <Typography
              gutterBottom
              variant="caption"
              noWrap
              sx={{
                display: 'block',
                fontSize: '1.5em',
                textAlign: 'center',
              }}
            >
              H: {Math.round(weatherById?.main.temp_min) + '\u00b0'} L:{' '}
              {Math.round(weatherById?.main.temp_max) + '\u00b0'}
            </Typography>
          </Stack>
          <Stack spacing={5}>
            <WeatherForecastCard
              tz={data?.timezone_offset}
              hourly={data?.hourly || []}
            ></WeatherForecastCard>
            <WeatherDailyForecastCard
              tz={data?.timezone_offset}
              daily={data?.daily || []}
            ></WeatherDailyForecastCard>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
