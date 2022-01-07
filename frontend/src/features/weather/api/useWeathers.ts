import { useQuery } from 'react-query';

import { axios } from '@/lib/axios-openweathermap';
import { QueryConfig } from '@/lib/react-query';
import { WeatherList } from '@/type/Weather';

export const getWeathers = (q?: string): Promise<WeatherList> => {
  if (!q) {
    return axios.get(`/box/city`, {
      params: {
        bbox: '102,19,108,23,10',
      },
    });
  }

  return axios
    .get(`/weather`, {
      params: {
        q,
        units: 'metric',
      },
    })
    .then((data) => {
      return { list: [data] } as WeatherList;
    });
};

type UseWeathersOptions = {
  config?: QueryConfig<typeof getWeathers>;
  search?: string;
};

export const useWeathers = ({ search, config }: UseWeathersOptions = {}) => {
  return useQuery({
    ...config,
    queryKey: ['weathers', search],
    queryFn: () => getWeathers(search).catch((error) => ({ list: [] } as WeatherList)),
  });
};
