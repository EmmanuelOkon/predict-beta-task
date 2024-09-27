export interface ISeasons {
  id: number;
  createdAt: Date;
  deletedAt: null;
  name: string;
  isCurrent: boolean;
  year: number;
}

export interface IPublishedSeasons {
  id: number;
  createdAt: Date;
  deletedAt: null;
  number: number;
  publish: boolean;
  deadline: Date;
}

export interface IMatchCard {
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
}

export interface ISelection {
  type: "H" | "A";
  team: string;
}

export interface INavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href: string;
}

