const Button = ({ children, variant, ...props }) => {
    const className = "py-3 px-6 font-semibold rounded-2xl";
    if (variant === "primary") {
        return <button className={`${className} bg-yellow text-black`} {...props}>{children}</button>;
    } else if (variant === "secondary") {
        return <button className={`${className} bg-black text-white`} {...props}>{children}</button>;
    }
    return null;
};

export default Button;