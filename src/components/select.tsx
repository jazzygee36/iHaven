interface SelectProps {
  label?: string;
  options?: string[];
}

const HomeSelect = ({ label, options = [] }: SelectProps) => {
  return (
    <div>
      <label className="mb-2 text-sm text-[#374151]">{label} </label>
      <select
        className={`border border-[#E5E7EB] h-[50px]  w-full outline-none rounded-md`}
      >
        {options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option disabled selected>
            Select an option
          </option>
        )}
      </select>
    </div>
  );
};

export default HomeSelect;
