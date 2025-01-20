import DangerIcon from "../../icons/danger";
import Label from "./label";

const Select = ({ options, name, label, value, placeholder, onChange, required, error }) => {
    return (
        <div className="w-full min-w-[200px]">
            <label className="block" htmlFor={name}>
                <Label label={label} required={required} color="black" />
                <select
                    name={name}
                    onChange={(e) => onChange(e)}
                    className="block w-full mt-1 rounded-md border-green focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                >
                    <option disabled selected>{placeholder}</option>
                    {options.map((option, index) => (
                        <option key={index} value={option.value} selected={option.value === value}>{option.label}</option>
                    ))}
                </select>
            </label>
            {error && (
                <p className="flex items-center mt-2 text-xs text-red-500">
                    <DangerIcon className="w-5 h-5 mr-1.5" />
                    {error}
                </p>
            )}
        </div>
    )
};

export default Select;