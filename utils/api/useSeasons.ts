import GetAllServices from "@/services";
import { useQuery } from "@tanstack/react-query";

export const useSeasons = () => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ["seasons"],
    queryFn: () => GetAllServices.getSeasons(),
  });

  return { isLoading, data, isSuccess, isError, error, refetch };
};

export const usePublishedSeasons = (id: number) => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ["publishedSeasons", id],
    queryFn: () => GetAllServices.getPublishedSeasons(id),
    enabled: !!id,
  });

  return { isLoading, data, isSuccess, isError, error, refetch };
};

//  GET /fixtures/season/{seasonId}/week/{weekId}

export const useWeeklyFixtures = (id: number) => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ["weeklyFixtures", id],
    queryFn: () => GetAllServices.getWeeklyFixtures(id),
    enabled: !!id,
  });

  return { isLoading, data, isSuccess, isError, error, refetch };
};
