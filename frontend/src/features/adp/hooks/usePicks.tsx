import { useQuery } from 'react-query';

import { getPicks } from '../api';

export const usePicks = (draft: number) => {
  return useQuery(['drafts', draft], () => getPicks(draft));
};
