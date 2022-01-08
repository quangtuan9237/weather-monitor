import DateRangeIcon from '@mui/icons-material/DateRange';
import {
  Typography,
  Card as MUICard,
  CardContent as MUICardContent,
  Stack,
  Grid,
  CardHeader as MUICardHeader,
  Slider,
  Divider,
} from '@mui/material';
import { borderBottom } from '@mui/material/node_modules/@mui/system';
import { styled } from '@mui/material/styles';
import React from 'react';

import { StyledCard } from './StyledCard';

import { Daily, Hourly } from '@/type/WeatherForcast';

const CardTitle = styled('span')`
  color: inherit;
  font-weight: lighter;
  display: flex;
  align-content: center;
  gap: 16px;
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

const TempSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    display: 'none',
  },
  '& .MuiSlider-track': {
    backgroundImage: 'linear-gradient(.25turn, yellow, orange)',
    border: 'none',
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

export function WeatherDailyForecastCard({ tz, daily }: { daily: Daily[] }) {
  return (
    <StyledCard sx={{ position: 'relative' }}>
      <CardHeader
        title={
          <CardTitle>
            <DateRangeIcon />
            7-DAY FORECAST
          </CardTitle>
        }
      />
      <CardContent>
        <Grid container>
          {daily.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <Grid container item justifyContent="space-between" alignItems="center">
                  <Grid item xs={4}>
                    <Typography
                      sx={{
                        fontWeight: 'bold',
                        color: 'common.white',
                      }}
                    >
                      {new Date((item.dt + tz) * 1000).toLocaleString('en-us', { weekday: 'long' })}
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <CoverImgStyle
                      alt={item.weather[0].description}
                      src={`/img/weather-icons/${item.weather[0].icon}@2x.png`}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography
                      sx={{
                        color: 'common.white',
                      }}
                    >
                      {Math.round(item.temp.min) + '\u00b0'}
                    </Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <TempSlider
                      // components={{ Thumb: undefined }}
                      min={item.temp.min}
                      max={item.temp.max}
                      defaultValue={[item.temp.night, item.temp.morn]}
                    />
                  </Grid>
                  <Grid item xs={1}>
                    <Typography
                      sx={{
                        color: 'common.white',
                      }}
                    >
                      {Math.round(item.temp.max) + '\u00b0'}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
              </React.Fragment>
            );
          })}
        </Grid>
      </CardContent>
    </StyledCard>
  );
}
