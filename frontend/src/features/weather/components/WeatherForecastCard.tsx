import {
  Card as MUICard,
  CardContent as MUICardContent,
  Stack,
  CardHeader as MUICardHeader,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { StyledCard } from './StyledCard';

import { Hourly } from '@/type/WeatherForcast';

const CardTitle = styled('span')`
  color: inherit;
  font-weight: lighter;
`;

const CardHeader = styled(MUICardHeader)`
  border-bottom: 1px solid white;
  padding: 0;
  padding-bottom: 16px;
`;

const CardContent = styled(MUICardContent)`
  padding: 0;
  padding-top: 16px;
  padding-bottom: 0 !important;
  overflow-x: auto;
`;

const CoverImgStyle = styled('img')`
  max-width: unset;
  width: 50px;
`;

function formatTime(dt: number, tz = 0) {
  const time = new Date((dt + tz) * 1000);

  if (tz != 0) {
    return time.getUTCHours();
  } else {
    return time.toLocaleTimeString([], { hour: '2-digit', hour12: false });
  }
}

export function WeatherForecastCard({ tz, hourly }: { hourly: Hourly[] }) {
  return (
    <StyledCard sx={{ position: 'relative' }}>
      <CardHeader title={<CardTitle>Partly cloudy conditions expected around 16:00</CardTitle>} />
      <CardContent>
        <Stack direction="row" spacing={3}>
          {hourly.map((item, index) => {
            return (
              <Stack key={index} alignItems="center">
                <p>{formatTime(item.dt, tz) + 'h'}</p>
                <CoverImgStyle
                  alt={item.weather[0].description}
                  src={`/img/weather-icons/${item.weather[0].icon}@2x.png`}
                />
                <p>{Math.round(item.temp) + '\u00b0'}</p>
              </Stack>
            );
          })}
        </Stack>
      </CardContent>
    </StyledCard>
  );
}
