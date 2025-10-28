import { useParams } from "react-router-dom";
import { LoaderSpin } from "../../components/ui/LoaderSpin";
import { FormTextInput } from "../../components/ui/FormTextInput";
import { useState } from "react";
import { FormMultiselect } from "../../components/ui/FormMultiselect";

const TeacherDataDefault = {
  name: "",
  courses: [],
  salaryType: 0,
  salaryAmount: 0,
  isActive: false,
};
const options = [
  { value: "1", label: "Violin" },
  { value: "2", label: "Teclado" },
];

export const TeachersForm = () => {
  const [teacherData, setTeacherData] = useState({ ...TeacherDataDefault });
  const { action } = useParams();

  return (
    <>
      <LoaderSpin />
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3">
        <h1 className="pt-3 font-bold text-4xl">
          {action === "create" ? "Añadir" : "Editar"} Profesor
        </h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <form
            action=""
            className="w-full p-5 grid grid-cols-2 gap-x-5 gap-y-2"
          >
            <FormTextInput
              label="Nombre completo:"
              id="teacher-fullname"
              name="teacher-fullname"
              placeholder="Nombre"
              onInput={(e) => {
                console.log(teacherData);
                setTeacherData({
                  ...teacherData,
                  name: e.target.value,
                });
              }}
            />
            <FormMultiselect
              label={"Cursos"}
              id={"teacher-courses"}
              name={"teacher-courses"}
              placeholder={"Selecciona cursos..."}
              options={options}
              onInput={(e) => {
                console.log(e.target.value);
              }}
            />
          </form>
        </section>
      </main>
    </>
  );
};
