export type SeasonLeaderboardRow = {
  name: string;
  league: {
    name: string;
  };
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
};

export type SeasonLeaderboardResponse = {
  teams: SeasonLeaderboardRow[];
};

export type WeeklyLeaderboardRow = {
  team: {
    name: string;
    wins: number;
    losses: number;
    ties: number;
    pointsFor: number;
    pointsAgainst: number;
    league: {
      name: string;
    };
  };
  points: number;
};

export type WeeklyLeaderboardResponse = {
  weeklyScores: WeeklyLeaderboardRow[];
};
