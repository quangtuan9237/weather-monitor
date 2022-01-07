import SearchIcon from '@mui/icons-material/Search';
import { Container, Box, Grid, InputAdornment, OutlinedInput, styled } from '@mui/material';
import React from 'react';

import { useWeathers } from '../api/useWeathers';
import { WeatherCard } from '../components';

import Page from '@/components/Page';
import { useDebounce } from '@/hooks/useDebounce';

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  marginBottom: '16px',
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

function formatTime(dt: number, tz = 0) {
  const time = new Date((dt + tz) * 1000);

  if (tz != 0) {
    return time.getUTCHours() + ':' + time.getUTCMinutes();
  } else {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  }
}

export function List() {
  const [search, setSearch] = React.useState('');
  const searchDebounce = useDebounce(search, 500);
  const { data } = useWeathers({ search: searchDebounce });

  console.log('DATA', data);

  return (
    <Page title="Weathers">
      <Container>
        <SearchStyle
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Tìm thành phố..."
          startAdornment={
            <InputAdornment position="start">
              <Box component={SearchIcon} sx={{ color: 'text.disabled' }} />
            </InputAdornment>
          }
        />
        <Grid container spacing={3}>
          {data?.list?.length ? (
            data.list.map((item) => (
              <WeatherCard
                key={item.id}
                post={{
                  title: item.name,
                  localTime: formatTime(item.dt, item.timezone),
                  weatherType: item.weather[0].main,
                  highTemp: Math.round(item.main.temp_max),
                  lowTemp: Math.round(item.main.temp_min),
                  currTemp: Math.round(item.main.temp),
                  cover: `/img/${item.weather[0].main}.jpg`,
                  lat: item.coord.Lat,
                  lon: item.coord.Lon,
                }}
              ></WeatherCard>
            ))
          ) : (
            <Grid item>
              <p>Không tìm thấy thành phố</p>
            </Grid>
          )}
        </Grid>
      </Container>
    </Page>
  );
}
