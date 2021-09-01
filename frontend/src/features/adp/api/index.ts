import { axios } from '../../../lib/axios';

export const getPicks = async (draft: number) => {
  console.log(draft);
  const results = await axios.get(`https://api.sleeper.app/v1/draft/732849644899532800/picks`);
  return {
    results,
  };
};
