import { useQuery } from "@tanstack/react-query";
import { useEnv } from "../useEnv";

export const useCourseQuery = () => {
  const { apiDomainCourse } = useEnv();

  const fetchCourses = async () => {
    const res = await fetch(`${apiDomainCourse}`, { credentials: "include" });
    if (!res.ok) throw new Error("Error obteniendo cursos");
    return res.json();
  };

  return useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });
};
