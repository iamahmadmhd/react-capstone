import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, variant, href, asRouterLink = false, ...props }) => {
    const baseStyles = "py-3 px-6 font-semibold rounded-2xl";
    const variantStyles = {
        "primary": "bg-yellow text-black border-4 border-transparent hover:text-yellow hover:bg-transparent hover:border-yellow transition-all",
        "secondary": "bg-green text-yellow border-4 border-transparent hover:text-green hover:bg-transparent hover:border-green transition-all",
        "link": "underline",
    };

    const selectedVariant = variantStyles[variant];

    return selectedVariant ? (
        asRouterLink ? (
            <RouterLink to={href} className={`${baseStyles} ${selectedVariant}`} {...props}>
                {children}
            </RouterLink>
        ) : (
            <a href={href} className={`${baseStyles} ${selectedVariant}`} {...props}>
                {children}
            </a>
        )
    ) : (
        <span className="text-red-500 font-semibold">
            Error: Invalid variant "{variant}" provided to Link.
        </span>
    )
};

export default Link;