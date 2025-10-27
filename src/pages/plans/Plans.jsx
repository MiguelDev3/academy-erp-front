import { PlanCard } from "./components/PlanCard";
import { PlusIcon } from "../../assets/icons/PlusIcon";
import { useNavigate } from "react-router-dom";
import { LoaderSpin } from "../../components/ui/LoaderSpin";
import { usePlanQuery } from "../../hooks/queries/usePlanQuery";

export const Plans = () => {
  const navigate = useNavigate();
  const { data: plans = [], isLoading, isError, refetch } = usePlanQuery();

  if (isLoading) return <LoaderSpin />;
  if (isError) return <h1>ERROR: No se pudieron cargar los planes</h1>;

  return (
    <>
      <main className="min-h-dvh bg-gray-200 px-3 pb-3 font-roboto flex flex-col gap-3 ">
        <h1 className="pt-3 font-bold text-4xl">Planes</h1>
        <section className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-full h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
          <div className="w-full border-b border-gray-300">
            <h2 className="py-3 ps-3 font-medium text-2xl">Vista general</h2>
          </div>
          <div className="w-full px-3 py-5 flex flex-col gap-5">
            {plans.length > 0 ? (
              plans.map((plan) => (
                <PlanCard
                  key={plan._id}
                  id={plan._id}
                  name={plan.name}
                  hoursPerWeek={plan.hoursPerWeek}
                  cost={plan.cost}
                  refetch={refetch}
                />
              ))
            ) : (
              <h2>No hay planes registrados</h2>
            )}
          </div>
          <div className="w-full border-t border-gray-300 p-3 flex justify-center items-center">
            <button
              className="py-3 px-6 bg-gray-400 text-white text-3xl flex flex-col justify-center items-center"
              onClick={() => navigate("/plans/create")}
            >
              <PlusIcon className={"fill-white"} width={100} height={100} />
              <span>Agregar plan</span>
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
