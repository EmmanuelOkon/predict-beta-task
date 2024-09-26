import { Icons } from "@/components/assets/icon";
import { URLS } from "./route";

export const navItems = [
  { label: "All Seasons", href: URLS.ALL_SEASONS, icon: <Icons.Globe /> },
  { label: "Fixtures", href: URLS.FIXTURES, icon: <Icons.Calendar /> },
  { label: "Wallet", href: URLS.WALLET, icon: <Icons.WalletIcon /> },
  { label: "Leaderboard", href: URLS.LEADERBOARD, icon: <Icons.Chart /> },
  {
    label: "Prediction History",
    href: URLS.PREDICTION_HISTORY,
    icon: <Icons.History />,
  },
];
