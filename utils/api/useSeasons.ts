import GetAllServices from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useSeasons = () => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ["seasons"],
    queryFn: () => GetAllServices.getSeasons(),
  });

  return { isLoading, data, isSuccess, isError, error, refetch };
};

export const usePublishedWeeks = (id: number) => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ["published", id],
    queryFn: () => GetAllServices.getPublishedWeeks(id),
    enabled: !!id,
  });

  return { isLoading, data, isSuccess, isError, error, refetch };
};

//  GET /fixtures/season/{seasonId}/week/{weekId}
export const useWeeksFixtures = (seasonId: number, weekId: number) => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ["weeklyFixtures", seasonId, weekId],
    queryFn: () => GetAllServices.getWeeksFixtures(seasonId, weekId),
    enabled: !!seasonId && !!weekId,
  });

  return { isLoading, data, isSuccess, isError, error, refetch };
};

