const Select = ({ options, name, label, value, placeholder, onChange, required, error }) => {
    return (
        <div className="w-full min-w-[200px]">
            <label className="block" htmlFor={name}>
                <span className="text-black">
                    {label}
                    {required && <span className="text-red-500">*</span>}
                </span>
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
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                    </svg>
                    {error}
                </p>
            )}
        </div>
    )
};

export default Select;