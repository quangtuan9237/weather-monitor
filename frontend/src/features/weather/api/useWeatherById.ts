import { useQuery } from 'react-query';

import { axios } from '@/lib/axios-openweathermap';
import { QueryConfig } from '@/lib/react-query';
import { WeatherItem } from '@/type/Weather';

export const getWeatherById = (id: string): Promise<WeatherItem> => {
  return axios.get(`/weather`, {
    params: {
      id,
      units: 'metric',
    },
  });
};

type UseWeatherOptions = {
  config?: QueryConfig<typeof getWeatherById>;
  id: string;
};

export const useWeatherById = ({ id, config }: UseWeatherOptions) => {
  return useQuery({
    ...config,
    queryKey: ['weather', id],
    queryFn: () => getWeatherById(id),
  });
};
