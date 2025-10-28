import Select from "react-select";

export const FormMultiselect = ({
  id,
  label,
  name,
  placeholder,
  options,
  onInput,
}) => {
  return (
    <div className="input flex flex-col col-span-2 static">
      <label
        htmlFor={id}
        className="text-blue-500 text-base font-semibold relative top-2 ml-[7px] px-[3px] bg-white w-fit"
      >
        {label}
      </label>
      <Select
        id={id}
        name={name}
        placeholder={placeholder}
        classNames={{control: () => "border-blue-500 input px-[10px] py-[11px] text-base bg-white border-2 rounded-[5px] w-full focus:outline-none placeholder:text-black/25"}}
        onInput={onInput}
        options={options}
        isMulti
      />
    </div>
  );
};
