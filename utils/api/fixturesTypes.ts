export interface IFixtures {
  data: Datum[];
}


export interface Datum {
  week: Week;
  id: number;
  createdAt: Date;
  deletedAt: null;
  fixtureDateTime: Date;
  fixtureDetails: null;
  league: AwayTeamLeague;
  homeTeam: Team;
  awayTeam: Team;
  head2head: Head2Head[];
  homeForm: string | [];
  awayForm: string | [];
//   homeForm: string[] | null;
//   awayForm: string[] | null;
  error?: string;
}

export interface Team {
  id: number;
  createdAt: Date;
  deletedAt: null;
  name: string;
  teamId: number;
  shortName: string;
  region: null;
  clubLogo: string;
  competitionType: CompetitionType;
  teamType: TeamType;
  league: AwayTeamLeague;
}

export enum CompetitionType {
  League = "league",
}

export interface AwayTeamLeague {
  leagueId: number;
  name: PurpleName;
  type: Type;
  logo: string;
  country: Country;
  id: number;
  createdAt: Date;
  deletedAt: null;
}

export interface Country {
  name: CountryEnum;
  code: Code;
  flag: string;
  id: number;
  createdAt: Date;
  deletedAt: null;
}

export enum Code {
  De = "DE",
  Es = "ES",
  Fr = "FR",
  GB = "GB",
  It = "IT",
}

export enum CountryEnum {
  England = "England",
  France = "France",
  Germany = "Germany",
  Italy = "Italy",
  Spain = "Spain",
}

export enum PurpleName {
  Bundesliga = "Bundesliga",
  LaLiga = "La Liga",
  Ligue1 = "Ligue 1",
  PremierLeague = "Premier League",
  SerieA = "Serie A",
}

export enum Type {
  League = "League",
}

export enum TeamType {
  Club = "club",
}

export interface Head2Head {
  fixture: Fixture;
  league: Head2HeadLeague;
  teams: Goals;
  goals: Goals;
  score: Score;
}

export interface Fixture {
  id: number;
  referee: string;
  timezone: Timezone;
  date: Date;
  timestamp: number;
  periods: Periods;
  venue: Venue;
  status: Status;
}

export interface Periods {
  first: number;
  second: number;
}

export interface Status {
  long: Long;
  short: Short;
  elapsed: number;
}

export enum Long {
  MatchFinished = "Match Finished",
}

export enum Short {
  Aet = "AET",
  Ft = "FT",
}

export enum Timezone {
  UTC = "UTC",
}

export interface Venue {
  id: number | null;
  name: string;
  city: string;
}

export interface Goals {
  home: AwayClass | number | null;
  away: AwayClass | number | null;
}

export interface AwayClass {
  id: number;
  name: string;
  logo: string;
  winner: boolean | null;
}

export interface Head2HeadLeague {
  id: number;
  name: string;
  country: CountryEnum;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

export interface Score {
  halftime: Goals;
  fulltime: Goals;
  extratime: Goals;
  penalty: Goals;
}

export interface Week {
  id: number;
  createdAt: Date;
  deletedAt: null;
  number: number;
  publish: boolean;
  deadline: null;
}
