import GetAllServices from "@/services";
import { useQuery } from "@tanstack/react-query";

export const usePlayers = () => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ["seasons"],
    queryFn: () => GetAllServices.getSeasons(),
  });

  return { isLoading, data, isSuccess, isError, error, refetch };
};

export const usePublishedWeeks = (id: number) => {
  const { isLoading, data, isSuccess, isError, error, refetch } = useQuery({
    queryKey: ["publishedSeasons"],
    queryFn: () => GetAllServices.getPublishedWeeks(id),
  });

  return { isLoading, data, isSuccess, isError, error, refetch };
};
