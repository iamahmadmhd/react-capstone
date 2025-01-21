const Label = ({ label, required, color, className = "", ...props }) => {
    return (
        <span className={`text-${color} ${className}`} {...props}>
            {label}
            {required && <span className="text-red-500">*</span>}
        </span>
    )
};

export default Label;