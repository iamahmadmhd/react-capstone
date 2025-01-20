import DangerIcon from "../../icons/danger";
import Label from "./label";
import Radio from "./radio";

const RadioGroup = ({ options, name, label, value, onChange, required, error }) => {
    const renderedOptions = options.map((option) => (
        <Radio key={option.value} name={name} value={option.value} label={option.label} checked={option.value === value} onChange={onChange} />
    ));

    return (
        <div className="w-full min-w-[200px]">
            <label className={`block mb-2 text-black`} htmlFor={name}>
                <Label label={label} required={required} color="black" />
            </label>
            {renderedOptions}
            {error && (
                <p className="flex items-center mt-2 text-xs text-red-500">
                    <DangerIcon className="w-5 h-5 mr-1.5" />
                    {error}
                </p>
            )}
        </div>
    )
};

export default RadioGroup;