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

  const updateCourse = useMutation({
    mutationFn: async ({ id, updates }) => {
      const res = await fetch(`${apiDomainCourse}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(updates),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al actualizar Curso: ${errorData}`);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });

  const deleteCourse = useMutation({
    mutationFn: async (id) => {
      const res = await fetch(`${apiDomainCourse}/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(`Error al eliminar Curso: ${errorData}`);
      }
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["courses"]);
    },
  });

  return { createCourse, updateCourse, deleteCourse };
};
