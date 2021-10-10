import { axios } from '../../../lib/axios';
import { gql } from 'graphql-request';
import { SeasonLeaderboardResponse, WeeklyLeaderboardResponse } from '..';

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

export const getWeeklyLeaderboard = async () => {
  const week = 5;

  const query = gql`
    query WeeklyScores($week: Int!) {
      weeklyScores(week: $week) {
        team {
          name
          pointsFor
          pointsAgainst
          wins
          losses
          ties
          league {
            name
          }
        }
        points
      }
    }
  `;

  const variables = {
    week,
  };

  const { data } = await axios.post<WeeklyLeaderboardResponse>('/graphql', { query, variables });

  return data;
};
