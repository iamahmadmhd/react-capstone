import DangerIcon from "../../icons/danger";
import Label from "./label";

const Input = ({
    type = 'text',
    name,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    required,
    error,
    ...props
}) => {
    return (
        <div className="w-full min-w-[200px]">
            <label className="block" htmlFor={name}>
                <Label label={label} required={required} color="black" />
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    className="block w-full mt-1 rounded-md border-green focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                    placeholder={placeholder}
                    {...props}
                />
            </label>
            {error && (
                <p className="flex items-center mt-2 text-xs text-red-500">
                    <DangerIcon className="w-5 h-5 mr-1.5" />
                    {error}
                </p>
            )}
        </div>
    );
};

export default Input;