import { useNavigate, useParams } from "react-router-dom";
import { SaveIcon } from "../../assets/icons/SaveIcon";
import { useState } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";
import { NotFound } from "../maintenance/NotFound";
import { FormCheckbox } from "../../components/ui/FormCheckbox";
import { useCourseMutation } from "../../hooks/mutations/useCourseMutation";

const courseFormDataDefault = {
  name: "",
  imgData: {
    url: "",
    alt: "",
  },
  isActive: false,
};

export const CoursesForm = () => {
  const [courseData, setCourseData] = useState({ ...courseFormDataDefault });
  const { action } = useParams();
  const { createCourse, updateCourse } = useCourseMutation();
  const navigate = useNavigate();

  if (action !== "create" && action !== "edit") {
    return <NotFound />;
  }

  const handleCreateCourse = async () => {
    const confirmCreate = await Swal.fire({
      title: "¿Crear el nuevo curso?",
      icon: "question",
      confirmButtonColor: "green",
      confirmButtonText: "Sí",
      showDenyButton: "true",
    });

    if (!confirmCreate.isConfirmed) return;

    createCourse.mutate(courseData, {
      onSuccess: () => {
        Swal.fire("Curso creado con éxito", "", "success").then((result) => {
          if (result.isConfirmed) {
            navigate("/courses");
          }
        });
      },
      onError: () => {
        Swal.fire("Error en el servidor", `Error: ${error.message}`, "error");
      },
    });
  };

  const handleUpdateCourse = async () => {
    const { id } = JSON.parse(localStorage.getItem("current-course"));
    const confirmUpdate = await Swal.fire({
      title: "¿Los cambios son correctos?",
      icon: "question",
      confirmButtonColor: "green",
      confirmButtonText: "Sí",
      showDenyButton: "true",
    });

    if (!confirmUpdate.isConfirmed) return;

    updateCourse.mutate(
      {
        id,
        updates: courseData,
      },
      {
        onSuccess: () => {
          Swal.fire("Curso actualizado con éxito", "", "success").then(
            (result) => {
              if (result.isConfirmed) {
                navigate("/courses");
              }
            }
          );
        },
        onError: () => {
          Swal.fire("Error en el servidor", `Error: ${error.message}`, "error");
        },
      }
    );
  };

  useEffect(() => {
    if (action === "edit") {
      const currentCourse = JSON.parse(localStorage.getItem("current-course"));
      document.getElementById("course-name").value = currentCourse.name;
      document.getElementById("course-img-url").value = currentCourse.imgData.url;
      document.getElementById("course-img-alt").value = currentCourse.imgData.alt;
      document.getElementById("course-is-active").checked = currentCourse.isActive;
      const { id: _, ...currentCourseData } = currentCourse;
      setCourseData({ ...currentCourseData });
    }
  }, []);

  return (
    <>
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3">
        <h1 className="pt-3 font-bold text-4xl">
          {action === "create" ? "Crear" : "Editar"} Curso
        </h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <form
            action=""
            className="w-full p-5 grid grid-cols-2 gap-x-5 gap-y-2"
          >
            <div className="input flex flex-col col-span-2 static">
              <label
                htmlFor="course-name"
                className="text-blue-500 text-base font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
              >
                Nombre del curso:
              </label>
              <input
                id="course-name"
                type="text"
                placeholder="Curso..."
                name="course-name"
                className="border-blue-500 input px-[10px] py-[11px] text-base bg-white border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                onInput={(e) => {
                  setCourseData({ ...courseData, name: e.target.value });
                }}
              />
            </div>
            <div className="input flex flex-col col-span-2 static">
              <label
                htmlFor="course-img-url"
                className="text-blue-500 text-base font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
              >
                URL de la imagen:
              </label>
              <input
                id="course-img-url"
                type="text"
                placeholder="URL"
                name="course-img-url"
                className="border-blue-500 input px-[10px] py-[11px] text-base bg-white border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                onInput={(e) => {
                  setCourseData({
                    ...courseData,
                    imgData: {
                      alt: courseData.imgData.alt,
                      url: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="input flex flex-col col-span-2 static">
              <label
                htmlFor="course-img-alt"
                className="text-blue-500 text-base font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
              >
                Texto Alternativo de la imagen:
              </label>
              <input
                id="course-img-alt"
                type="text"
                placeholder=""
                name="course-img-alt"
                className="border-blue-500 input px-[10px] py-[11px] text-base bg-white border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                onInput={(e) => {
                  setCourseData({
                    ...courseData,
                    imgData: {
                      url: courseData.imgData.url,
                      alt: e.target.value,
                    },
                  });
                }}
              />
            </div>
            <div className="input flex w-full static">
              <FormCheckbox 
                id={"course-is-active"}
                name={"course-is-active"}
                labelText="Activo"
                onInput={(e) => {
                  setCourseData({
                    ...courseData,
                    isActive: e.target.checked,
                  })
                }}
              />
            </div>
            <div className="input flex flex-col w-full static col-span-2">
              <button
                className="relative mt-3 cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-blue-800 active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  if (action === "create") {
                    handleCreateCourse();
                  }
                  if (action === "edit") {
                    handleUpdateCourse();
                  }
                }}
              >
                <span className="w-full h-full flex items-center justify-center gap-2 px-8 py-3 bg-blue-500 text-white text-lg rounded-[14px] bg-blue-700">
                  <SaveIcon classname={"fill-white"} />
                  Guardar
                </span>
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
};
