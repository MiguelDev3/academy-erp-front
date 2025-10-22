import { CourseCard } from "./components/CourseCard";

export const Courses = () => {
  return (
    <>
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3">
        <h1 className="pt-3 font-bold text-4xl">Cursos</h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-300">
            <h2 className="py-3 ps-3 font-medium text-2xl">Vista general</h2>
          </div>
          <div className="w-full px-3 py-5 flex flex-col gap-5">
            <CourseCard />
          </div>
        </section>
      </main>
    </>
  );
};
