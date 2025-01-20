const Radio = ({ name, value, label, checked, onChange }) => {
    return (
        <label className="mb-2 flex items-center gap-2" htmlFor={value}>
            <input type="radio" name={name} value={value} id={value} onChange={onChange} className="border-green text-green checked:bg-green focus:border-green focus:ring focus:ring-green focus:ring-opacity-50" checked={checked} />
            <span className="text-sm text-black">
                {label}
            </span>
        </label>
    )
};

export default Radio;