import { useQuery } from 'react-query';

import { axios } from '@/lib/axios-openweathermap';
import { QueryConfig } from '@/lib/react-query';
import { WeatherForcast } from '@/type/WeatherForcast';

export const getWeather = (lat: string, lon: string): Promise<WeatherForcast> => {
  return axios.get(`/onecall`, {
    params: {
      lat,
      lon,
    },
  });
};

type UseWeatherOptions = {
  config?: QueryConfig<typeof getWeather>;
  lat: string;
  lon: string;
};

export const useWeather = ({ lat, lon, config }: UseWeatherOptions) => {
  return useQuery({
    ...config,
    queryKey: ['weather', lat, lon],
    queryFn: () => getWeather(lat, lon),
  });
};
