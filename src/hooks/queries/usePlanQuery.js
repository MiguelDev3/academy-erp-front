import { useQuery } from "@tanstack/react-query";
import { useEnv } from "../useEnv";

export const usePlanQuery = () => {
  const { apiDomainPlan } = useEnv();

  const fetchPlans = async () => {
    const res = await fetch(`${apiDomainPlan}`, { credentials: "include" });
    if (!res.ok) throw new Error("Error obteniendo planes");
    return res.json();
  };

  return useQuery({
    queryKey: ["plans"],
    queryFn: fetchPlans,
  })
};
