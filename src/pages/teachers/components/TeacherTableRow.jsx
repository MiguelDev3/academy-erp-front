import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";

export const TeacherTableRow = ({
  index,
  name,
  courses,
  salaryType,
  salaryAmount,
  isActive,
}) => {
  return (
    <div className="grid grid-cols-[1fr_3fr_3fr_2fr_2fr_2fr_2fr] gap-4 min-w-[1000px] text-center items-center min-h-[80px]">
      <span>{index}</span>
      <span>{name}</span>
      <span>{courses}</span>
      <span>{salaryType}</span>
      <span>{salaryAmount}</span>
      <span>{isActive ? "Si" : "No"}</span>
      <span className="flex justify-center items-center w-full gap-3">
        <button className="bg-blue-500 p-1 rounded-xl">
          <EditIcon className={"fill-white pointer-events-none"} />
        </button>
        <button className="bg-red-500 p-1 rounded-xl">
          <DeleteIcon className={"fill-white pointer-events-none"} />
        </button>
      </span>
    </div>
  );
};
