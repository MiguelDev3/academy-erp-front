import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";

export const PlanCard = ({ id, name, hourPerWeek, cost }) => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white rounded-lg shadow-md border-s-2 border-green-600">
      <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
        <h3 className="text-2xl uppercase font-bold text-gray-900">{name}</h3>
      </div>

      <div className="p-4 md:p-5 flex flex-col gap-3 text-lg">
        <span>
          <b>Horas por Semana: </b>
          {hourPerWeek}
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
          onClick={() => navigate("/plans/edit")}
        >
          <EditIcon className={"fill-white"} />
          <span className="sr-only">Edit</span>
        </button>
        <button
          data-id={id}
          type="button"
          className="text-gray-400 bg-red-600 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-10 h-10 inline-flex justify-center items-center"
        >
          <DeleteIcon className={"fill-white"} />
          <span className="sr-only">Edit</span>
        </button>
      </div>
    </div>
  );
};
