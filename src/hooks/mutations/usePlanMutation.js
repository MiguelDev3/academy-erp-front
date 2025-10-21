import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEnv } from "../useEnv";

export const UsePlanMutation = () => {
  const queryClient = useQueryClient();
  const { apiDomainPlan } = useEnv();

  const createPlan = useMutation({
    mutationFn: async (newPlan) => {
      const res = await fetch(`${apiDomainPlan}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newPlan),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al crear Plan: ${errorData}`);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["plans"]);
    },
  });

  const updatePlan = useMutation({
    mutationFn: async ({ id, updates }) => {
      console.log(id)
      const res = await fetch(`${apiDomainPlan}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updates),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al actualizar Plan: ${errorData}`);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["plans"]);
    },
  });

  const deletePlan = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`${apiDomainPlan}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al eliminar Plan: ${errorData}`);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["plans"]);
    },
  });

  return {
    createPlan,
    updatePlan,
    deletePlan,
  };
};
