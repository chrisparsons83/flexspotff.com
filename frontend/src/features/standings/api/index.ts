import { gql } from 'graphql-request';
import { axios } from '../../../lib/axios';
import { SeasonStandingsResponse } from '../types';

export const getStandings = async () => {
  const query = gql`
    query SeasonStandings {
      leagues {
        name
        tier
        sleeperLeagueId
        teams {
          name
          wins
          ties
          losses
          pointsFor
          pointsAgainst
        }
      }
    }
  `;

  const { data } = await axios.post<SeasonStandingsResponse>('/graphql', { query });

  return data;
};
