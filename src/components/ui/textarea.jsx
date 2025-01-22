import React from "react";
import Label from "./label";
import DangerIcon from "../../icons/danger";

const Textarea = React.forwardRef((props, ref) => {
    const { label, required, color, className = "", error, ...textareaProps } = props;

    return (
        <div className="flex flex-col w-full min-w-[200px]">
            {label && (
                <Label label={label} required={required} color={color} />
            )}
            <textarea
                ref={ref}
                className={`mt-1 rounded-md border-green focus:border-green focus:ring focus:ring-green focus:ring-opacity-50 ${className}`}
                {...textareaProps}
            />
            {error && (
                <p className="flex items-center mt-2 text-xs text-red-500">
                    <DangerIcon className="w-5 h-5 mr-1.5" />
                    {error}
                </p>
            )}
        </div>
    )
});

export default Textarea;