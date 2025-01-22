import React from 'react';

const Radio = React.forwardRef((props, ref) => {
    const { name, value, checked, onChange, label, ...inputProps } = props;

    return (
        <div className="flex items-center">
            <input
                ref={ref}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="border-green text-green checked:bg-green focus:border-green focus:ring focus:ring-green focus:ring-opacity-50"
                {...inputProps}
            />
            <label className="ml-2 text-black">{label}</label>
        </div>
    );
});

export default Radio;