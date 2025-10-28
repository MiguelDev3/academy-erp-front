export const FormTextInput = ({label, id, name, placeholder, onInput}) => {
  return (
    <div className="input flex flex-col col-span-2 static">
      <label
        htmlFor={id}
        className="text-blue-500 text-base font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        name={name}
        className="border-blue-500 input px-[10px] py-[11px] text-base bg-white border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"
        onInput={onInput}
      />
    </div>
  );
};
