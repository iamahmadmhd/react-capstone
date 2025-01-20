const Link = ({ children, variant, href, ...props }) => {
    const baseStyles = "py-3 px-6 font-semibold rounded-2xl";
    const variantStyles = {
        "primary": "bg-yellow text-black border-4 border-transparent hover:text-yellow hover:bg-transparent hover:border-yellow transition-all",
        "secondary": "bg-green text-yellow border-4 border-transparent hover:text-green hover:bg-transparent hover:border-green transition-all",
        "link": "underline",
    };

    const selectedVariant = variantStyles[variant];

    return selectedVariant ? (
        <a href={href} className={`${baseStyles} ${selectedVariant}`} {...props}>
            {children}
        </a>
    ) : (
        <span className="text-red-500 font-semibold">
            Error: Invalid variant "{variant}" provided to Button.
        </span>
    );
};

export default Link;