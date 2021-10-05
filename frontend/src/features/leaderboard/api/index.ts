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
        ties
        pointsFor
        pointsAgainst
      }
    }
  `;

  const { data } = await axios.post<SeasonLeaderboardResponse>('/graphql', { query });

  return data;
};
