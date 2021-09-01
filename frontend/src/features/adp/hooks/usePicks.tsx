import { useQueries, UseQueryResult } from 'react-query';

import { getPicks } from '../api';
import { GetPicksResults } from '../types';

export const usePicks = (drafts: string[]): UseQueryResult<GetPicksResults>[] => {
  return useQueries(
    drafts.map((draft) => {
      return {
        queryKey: ['draft', draft],
        queryFn: () => getPicks(draft),
      };
    }),
  );
};
