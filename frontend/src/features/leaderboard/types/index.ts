export type LeaderboardRow = {
  name: string;
  league: {
    name: string;
  };
  wins: number;
  losses: number;
  pointsFor: number;
  pointsAgainst: number;
};

export type SeasonLeaderboardResponse = {
  teams: LeaderboardRow[];
};
