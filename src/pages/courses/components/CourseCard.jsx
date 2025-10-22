export const CourseCard = ({ id, title, description }) => {
  return (
    <div className="w-full border-3 border-green-100 bg-green-700 rounded-lg p-4 flex justify-start items-center gap-2">
      <picture className="max-h-24">
        <img className="max-h-24 block" src="https://academy.maik-dev.com/assets/violin_figure_4.png" alt="Violin image" />
      </picture>
      <h3 className="font-semibold text-white text-xl uppercase">Violín</h3>
    </div>
  );
}