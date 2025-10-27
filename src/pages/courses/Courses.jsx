import { useNavigate } from "react-router-dom";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { LoaderSpin } from "../../components/ui/LoaderSpin";
import { useCourseQuery } from "../../hooks/queries/useCourseQuery";
import { CourseCard } from "./components/CourseCard";
import { NotFound } from "../maintenance/NotFound";

export const Courses = () => {
  const navigate = useNavigate();
  const { data: courses, isLoading, isError, refetch } = useCourseQuery();

  if (isLoading) return <LoaderSpin />;
  if (isError) return <h1>ERROR: No se pudieron cargar los cursos</h1>;

  return (
    <>
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3">
        <h1 className="pt-3 font-bold text-4xl">Cursos</h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-300">
            <h2 className="py-3 ps-3 font-medium text-2xl">Vista general</h2>
          </div>
          <div className="w-full px-3 py-5 flex flex-col gap-5">
            {courses.length > 0 ? (
              courses.map((course, index) => (
                <CourseCard
                  key={index}
                  id={course._id}
                  name={course.name}
                  imgUrl={course.imgData.url}
                  imgAlt={course.imgData.alt}
                  isActive={course.isActive}
                  refetch={refetch}
                />
              ))
            ) : (
              <h2>No hay cursos registrados</h2>
            )}
          </div>
          <div className="w-full border-t border-gray-300 flex justify-end p-3">
            <button
              className="bg-green-600 text-white flex justify-center items-center gap-2 px-4 py-2 rounded-lg"
              onClick={() => navigate("/courses/create")}
            >
              <PlusIcon className={"fill-white pointer-events-none"} />
              <span className="pointer-events-none">Agregar Curso</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
