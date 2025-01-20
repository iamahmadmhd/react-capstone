const Label = ({ label, required, color, classes = "", ...props }) => {
    return (
        <span className={`text-${color} ${classes}`} {...props}>
            {label}
            {required && <span className="text-red-500">*</span>}
        </span>
    )
};

export default Label;