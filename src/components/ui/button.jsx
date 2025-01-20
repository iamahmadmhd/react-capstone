const Button = ({ children, variant, type, ...props }) => {
    const baseStyles = "py-3 px-6 font-semibold rounded-2xl transition-all";
    const variantStyles = {
        primary: "bg-yellow text-black border-4 border-transparent hover:text-yellow hover:bg-transparent hover:border-yellow",
        secondary: "bg-green text-white border-4 border-transparent hover:text-green hover:bg-transparent hover:border-green",
        link: "group flex items-center space-x-2 text-green",
    };

    const selectedVariant = variantStyles[variant];

    return selectedVariant ? (
        <button type={type} className={`${baseStyles} ${selectedVariant}`} {...props}>
            {children}
        </button>
    ) : (
        <span className="text-red-500 font-semibold">
            Error: Invalid variant "{variant}" provided to Button.
        </span>
    );
};

export default Button;