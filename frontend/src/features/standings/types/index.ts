export type SeasonStandingsRow = {
  name: string;
  tier: number;
  sleeperLeagueId: string;
  teams: SeasonStandingTeam[];
};

export type SeasonStandingTeam = {
  name: string;
  wins: number;
  losses: number;
  ties: number;
  pointsFor: number;
  pointsAgainst: number;
};

export type SeasonStandingsResponse = {
  leagues: SeasonStandingsRow[];
};
