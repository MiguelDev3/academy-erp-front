import { useNavigate } from "react-router-dom";
import { DeleteIcon } from "../../../assets/icons/DeleteIcon";
import { EditIcon } from "../../../assets/icons/EditIcon";
import { useCourseMutation } from "../../../hooks/mutations/useCourseMutation";
import Swal from "sweetalert2";

export const CourseCard = ({ id, name, imgUrl, imgAlt = "", isActive, refetch }) => {
  const navigate = useNavigate();
  const { deleteCourse } = useCourseMutation();

  const handleDeleteCourse = async () => {
    const confirm = await Swal.fire({
      title: "¿Eliminar?",
      icon: "question",
      confirmButtonColor: "green",
      confirmButtonText: "Sí",
      showDenyButton: "true",
    });

    if (!confirm.isConfirmed) return;

    deleteCourse.mutate(id, {
      onSuccess: () => {
        Swal.fire("Eliminado correctamente", "", "success");
      },
      onError: () => {
        Swal.fire("Error de servidor", "", "error");
      },
    });

    refetch();
  };

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
      <h3 className="font-semibold text-white text-3xl uppercase">{name}</h3>
      <div className="flex flex-col justify-center items-center gap-8">
        <button role="button" className="bg-red-700 p-2 rounded-lg" onClick={handleDeleteCourse}>
          <DeleteIcon className={"fill-white pointer-events-none"} />
        </button>
        <button
          role="button"
          className="bg-amber-600 p-2 rounded-lg"
          onClick={() => {
            const imgData = { url: imgUrl, alt: imgAlt };
            localStorage.setItem(
              "current-course",
              JSON.stringify({ id, name, imgData, isActive })
            );
            navigate("/courses/edit/");
          }}
        >
          <EditIcon className={"fill-white pointer-events-none"} />
        </button>
      </div>
    </div>
  );
};
