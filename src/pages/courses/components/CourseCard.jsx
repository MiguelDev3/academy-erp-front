import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";

export const CourseCard = ({ id, title, imgUrl, imgAlt }) => {
  return (
    <div
      className="w-full border-b-2 border-s-2 border-black bg-cyan-700 rounded-xl p-4 flex justify-between items-center gap-2"
      data-id={id}
    >
      <picture className="max-h-24">
        <img
          className="max-h-24 drop-shadow-[0_0_8px_rgba(0,0,0,0.8)]"
          src={imgUrl}
          alt={imgAlt}
        />
      </picture>
      <h3 className="font-semibold text-white text-3xl uppercase">{title}</h3>
      <div className="flex flex-col justify-center items-center gap-8">
        <button role="button" className="bg-red-700 p-2 rounded-lg">
          <DeleteIcon className={"fill-white pointer-events-none"} />
        </button>
        <button role="button" className="bg-amber-600 p-2 rounded-lg">
          <EditIcon className={"fill-white pointer-events-none"} />
        </button>
      </div>
    </div>
  );
};
