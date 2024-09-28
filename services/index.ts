import { AxiosResponse } from "axios";
import { axiosInstance } from "@/utils/api";
import { IPublishedWeeks, ISeasons } from "@/utils/api/types";
import { IFixtures } from "@/utils/api/fixturesTypes";

class GetAllServices {
  private static SEASONS_API_BASE = "/seasons";
  private static PUBLISHED_SEASONS_API_BASE = "/weeks/season/";
  private static WEEKLY_FIXTURES_API_BASE = "/fixtures/season/";
  private static HEAD_TO_HEAD_API_BASE = "/fixtures/";

  // GET = /seasons
  public static async getSeasons() {
    const { data } = await axiosInstance.get<AxiosResponse<ISeasons[]>>(
      `${this.SEASONS_API_BASE}`
    );

    return data;
  }

  // Get Published Weeks in Latest Season
  // GET = /weeks/season/{seasonId}/published
  public static async getPublishedWeeks(id: number) {
    const { data } = await axiosInstance.get<AxiosResponse<IPublishedWeeks[]>>(
      `${this.PUBLISHED_SEASONS_API_BASE}${id}/published`
    );

    return data;
  }

  // Get Matches in a Week
  // GET = /fixtures/season/{seasonId}/week/{weekId}
  public static async getWeeksFixtures(seasonId: number, weekId: number) {
    const { data } = await axiosInstance.get<AxiosResponse<IFixtures>>(
      `${this.WEEKLY_FIXTURES_API_BASE}${seasonId}/week/${weekId}`
    );

    return data;
  }

  // GET /fixtures/{fixtureId}/h2h
  public static async getHeadToHead(fixtureId: number) {
    const { data } = await axiosInstance.get<AxiosResponse<IFixtures>>(
      `/fixtures/${fixtureId}/h2h`
    );

    return data;
  }
}

// Get Head-to-Head for a Match
// GET = /fixtures/{fixtureId}/h2h

// Submit Predictions
// POST = /predictions

export default GetAllServices;

// class playersService {
//   private static PLAYERS_API_BASE = "/players";

//   // GET = /players
//   public static async getPlayers() {
//     const { data } = await axiosInstance.get<AxiosResponse<ISeasons[]>>(
//       `${this.PLAYERS_API_BASE}`
//     );

//     return data;
//   }
// }
