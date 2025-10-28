import { useNavigate } from "react-router-dom";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { EditIcon } from "../../assets/icons/EditIcon";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";
import { TeacherTableRow } from "./components/TeacherTableRow";

export const Teachers = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3">
        <h1 className="pt-3 font-bold text-4xl">Profesores</h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-300">
            <h2 className="py-3 ps-3 font-medium text-2xl">
              Profesores Activos
            </h2>
          </div>
          <div className="w-full px-3 py-5 flex flex-col gap-5">
            <div id="table-box" className="overflow-x-scroll">
              <div className="grid grid-cols-[1fr_3fr_3fr_2fr_2fr_2fr_2fr] gap-4 min-w-[1000px] font-bold text-center border-b border-gray-300 py-2">
                <span>N°</span>
                <span>Nombre</span>
                <span>Cursos</span>
                <span>Tipo de Salario</span>
                <span>Salario (S/)</span>
                <span>Activo</span>
                <span>Acciones</span>
              </div>
              <div data-element="table-body">
                <TeacherTableRow
                  index={1}
                  name={"Jefferson Frank Salluca Payehuanca"}
                  courses={"Violín, Guitarra"}
                  salaryType={"Mensual"}
                  salaryAmount={2000.0}
                  isActive={true}
                />
              </div>
            </div>
          </div>
          <div className="w-full border-t border-gray-300 flex justify-end p-3">
            <button
              className="bg-green-600 text-white flex justify-center items-center gap-2 px-4 py-2 rounded-lg"
              onClick={() => navigate("/teachers/create")}
            >
              <PlusIcon className={"fill-white pointer-events-none"} />
              <span className="pointer-events-none">Agregar Profesor</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
