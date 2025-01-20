import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ initialValues, validate, onSubmit, children }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear field-specific error
    };

    const handleBlur = async (e) => {
        const { name, value } = e.target;

        // Validate field onBlur
        const validationErrors = validate({ ...values, [name]: value });
        if (validationErrors[name]) {
            setErrors((prevErrors) => ({ ...prevErrors, [name]: validationErrors[name] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate(values);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setIsSubmitting(true);
            onSubmit(values);
            setIsSubmitting(false);
        }
    };

    return (
        <FormContext.Provider
            value={{
                values,
                errors,
                isSubmitting,
                handleChange,
                handleBlur,
                handleSubmit,
            }}
        >
            {children}
        </FormContext.Provider>
    );
};

export const useFormContext = () => {
    const context = useContext(FormContext);
    if (!context) {
        throw new Error('useFormContext must be used within a FormProvider');
    }
    return context;
};
