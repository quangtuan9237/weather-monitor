import { useQuery } from 'react-query';

import { axios } from '@/lib/axios-openweathermap';
import { QueryConfig } from '@/lib/react-query';
import { WeatherForcast } from '@/type/WeatherForcast';

export const getWeatherForecast = (lat: string, lon: string): Promise<WeatherForcast> => {
  return axios.get(`/onecall`, {
    params: {
      lat,
      lon,
      units: 'metric',
    },
  });
};

type UseWeatherOptions = {
  config?: QueryConfig<typeof getWeatherForecast>;
  lat: string;
  lon: string;
};

export const useWeatherForecast = ({ lat, lon, config }: UseWeatherOptions) => {
  return useQuery({
    ...config,
    queryKey: ['weather-forecast', lat, lon],
    queryFn: () => getWeatherForecast(lat, lon),
  });
};
