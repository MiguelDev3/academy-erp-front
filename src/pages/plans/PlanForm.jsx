import { useNavigate, useParams } from "react-router-dom";
import { SaveIcon } from "../../assets/icons/SaveIcon";
import { useState } from "react";
import Swal from "sweetalert2";
import { LoaderSpin } from "../../components/ui/LoaderSpin";
import { useEffect } from "react";
import { UsePlanMutation } from "../../hooks/mutations/usePlanMutation";

const planFormDataDefault = {
  name: "",
  hoursPerWeek: 0,
  cost: 0,
};

export const PlanForm = () => {
  const [planData, setPlanData] = useState({ ...planFormDataDefault });
  const { action } = useParams();
  const { createPlan, updatePlan } = UsePlanMutation();
  const navigate = useNavigate();

  if (action !== "create" && action !== "edit") {
    return <h1>ERROR 404: PAGE NOT FOUND</h1>;
  }

  const handleCreatePlan = async () => {
    const confirmCreate = await Swal.fire({
      title: "¿Crear el nuevo plan?",
      icon: "question",
      confirmButtonColor: "green",
      confirmButtonText: "Sí",
      showDenyButton: "true",
    });

    if (!confirmCreate.isConfirmed) return;

    createPlan.mutate(planData, {
      onSuccess: () => {
        Swal.fire("Plan creado con éxito", "", "success").then((result) => {
          if (result.isConfirmed) {
            navigate("/plans");
          }
        });
      },
      onError: () => {
        Swal.fire("Error en el servidor", `Error: ${error.message}`, "error");
      },
    });
  };

  const handleUpdatePlan = async () => {
    const { id } = JSON.parse(localStorage.getItem("current-plan"));
    const confirmUpdate = await Swal.fire({
      title: "¿Los cambios son correctos?",
      icon: "question",
      confirmButtonColor: "green",
      confirmButtonText: "Sí",
      showDenyButton: "true",
    });

    if (!confirmUpdate.isConfirmed) return;

    updatePlan.mutate(
      {
        id,
        updates: planData,
      },
      {
        onSuccess: () => {
          Swal.fire("Plan actualizado con éxito", "", "success").then(
            (result) => {
              if (result.isConfirmed) {
                navigate("/plans");
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
      const currentPlan = JSON.parse(localStorage.getItem("current-plan"));
      document.getElementById("plan-name").value = currentPlan.name;
      document.getElementById("plan-hours").value = currentPlan.hoursPerWeek;
      document.getElementById("plan-cost").value = currentPlan.cost;
      const { id: _, ...currentPlanData } = currentPlan;
      setPlanData({ ...currentPlanData });
    }
  }, []);

  return (
    <>
      <LoaderSpin />
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3">
        <h1 className="pt-3 font-bold text-4xl">
          {action === "create" ? "Crear" : "Editar"} Plan
        </h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <form
            action=""
            className="w-full p-5 grid grid-cols-2 gap-x-5 gap-y-2"
          >
            <div className="input flex flex-col col-span-2 static">
              <label
                htmlFor="plan-name"
                className="text-blue-500 text-base font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
              >
                Nombre del plan:
              </label>
              <input
                id="plan-name"
                type="text"
                placeholder="Plan..."
                name="plan-name"
                className="border-blue-500 input px-[10px] py-[11px] text-base bg-white border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                onInput={(e) => {
                  setPlanData({ ...planData, name: e.target.value });
                }}
              />
            </div>
            <div className="input flex flex-col w-full static">
              <label
                htmlFor="plan-hours"
                className="text-blue-500 text-base font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
              >
                Horas:
              </label>
              <input
                id="plan-hours"
                type="number"
                placeholder=""
                name="plan-hours"
                className="border-blue-500 input px-[10px] py-[11px] text-base bg-white border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                onInput={(e) => {
                  setPlanData({
                    ...planData,
                    hoursPerWeek: Number(e.target.value),
                  });
                }}
              />
            </div>
            <div className="input flex flex-col w-full static">
              <label
                htmlFor="plan-cost"
                className="text-blue-500 text-base font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
              >
                Costo:
              </label>
              <input
                id="plan-cost"
                type="number"
                placeholder=""
                name="plan-cost"
                className="border-blue-500 input px-[10px] py-[11px] text-base bg-white border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
                onInput={(e) => {
                  setPlanData({ ...planData, cost: Number(e.target.value) });
                }}
              />
            </div>
            <div className="input flex flex-col w-full static col-span-2">
              <button
                className="relative mt-3 cursor-pointer opacity-90 hover:opacity-100 transition-opacity p-[2px] bg-black rounded-[16px] bg-blue-800 active:scale-95"
                onClick={(e) => {
                  e.preventDefault();
                  if (action === "create") {
                    handleCreatePlan();
                  }
                  if (action === "edit") {
                    handleUpdatePlan();
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
