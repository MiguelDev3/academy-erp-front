import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { useEnv } from "../../../hooks/useEnv";
import Swal from "sweetalert2";

export const PlanCard = ({ id, name, hoursPerWeek, cost, setPlanData }) => {
  const { apiDomainPlan } = useEnv();
  const navigate = useNavigate();

  const deletePlan = async (planId = "") => {
    const options = {
      method: "DELETE",
    };

    try {
      const result = await fetch(`${apiDomainPlan}/delete/${planId}`, options);
      const data = await result.json();
      if (!result.ok) {
        Swal.fire({
          title: "No se pudo eliminar plan",
          text: `Error: ${data}`,
          icon: "error",
        });
        return;
      }
      setPlanData(prevPlans => prevPlans.filter(plan => plan._id !== planId));
      Swal.fire("Eliminado correctamente", "", "success");
    } catch (error) {
      Swal.fire("Error de servidor", "", "error");
    }
  };
  return (
    <div className="relative bg-white rounded-lg shadow-md border-s-2 border-green-600">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
        <h3 className="text-2xl uppercase font-bold text-gray-900">{name}</h3>
      </div>

      <div className="p-4 md:p-5 flex flex-col gap-3 text-lg">
        <span>
          <b>Horas por Semana: </b>
          {hoursPerWeek}
        </span>
        <span>
          <b>Costo: </b>
          S/ {cost.toFixed(2)}
        </span>
      </div>
      <div className="flex items-center justify-end gap-5 p-4 md:p-5 border-t border-gray-400 rounded-b">
        <button
          data-id={id}
          type="button"
          className="text-gray-400 bg-green-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 inline-flex justify-center items-center"
          onClick={() => {
            localStorage.setItem("current-plan", JSON.stringify({id, name, hoursPerWeek, cost}))
            navigate("/plans/edit")
          }}
        >
          <EditIcon className={"fill-white"} />
          <span className="sr-only">Edit</span>
        </button>
        <button
          data-id={id}
          type="button"
          className="text-gray-400 bg-red-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 inline-flex justify-center items-center"
          onClick={(e) => {
            Swal.fire({
              title: "¿Eliminar?",
              icon: "question",
              confirmButtonColor: "green",
              confirmButtonText: "Sí",
              showDenyButton: "true",
            }).then(result => {
              if(result.isConfirmed){
                deletePlan(e.target.dataset.id);
              }else if(result.isDenied){
                return
              }
            })
          }}
        >
          <DeleteIcon className={"fill-white pointer-events-none"} />
          <span className="sr-only">Edit</span>
        </button>
      </div>
    </div>
  );
};
