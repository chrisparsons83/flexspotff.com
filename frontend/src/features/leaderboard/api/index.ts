import { axios } from '../../../lib/axios';
import { gql } from 'graphql-request';
import { SeasonLeaderboardResponse } from '..';

export const getSeasonLeaderboard = async () => {
  const query = gql`
    query {
      teams {
        name
        league {
          name
        }
        wins
        losses
        pointsFor
        pointsAgainst
      }
    }
  `;

  const { data } = await axios.post<SeasonLeaderboardResponse>('/graphql', { query });

  return data;
};
