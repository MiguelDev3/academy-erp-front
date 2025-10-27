import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEnv } from "../useEnv";

export const useCourseMutation = () => {
  const queryClient = useQueryClient();
  const { apiDomainCourse } = useEnv();

  const createCourse = useMutation({
    mutationFn: async (newCourse) => {
      const res = await fetch(`${apiDomainCourse}/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newCourse),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al crear Curso: ${errorData}`);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });

  return { createCourse };
};
