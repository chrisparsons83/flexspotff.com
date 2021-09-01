import { axios } from '../../../lib/axios';
import { GetPicksResults } from '../types';

export const getPicks = async (draft: string) => {
  const results = await axios.get(`https://api.sleeper.app/v1/draft/${draft}/picks`);

  const data: GetPicksResults = {
    results,
  };

  return data;
};
