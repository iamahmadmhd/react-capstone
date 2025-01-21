import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ initialValues, onSubmit, children }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [stepErrors, setStepErrors] = useState({});

    const validate = (values) => {
        const errors = {};
        Object.keys(values).forEach(step => {
            Object.keys(values[step]).forEach(field => {
                const error = values[step][field].validate(values[step][field].value);
                if (error) {
                    errors[field] = error;
                }
            });
        });
        return errors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        const step = `step${currentStep}`;
        setValues((prev) => ({
            ...prev,
            [step]: {
                ...prev[step],
                [name]: {
                    ...prev[step][name],
                    value
                }
            }
        }));
        setErrors((prevErrors) => ({ ...prevErrors, [name]: '' })); // Clear field-specific error
    };

    const handleBlur = async (e) => {
        const { name, value } = e.target;
        const step = `step${currentStep}`;
        const validationErrors = validate(values);
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
            const flattenedValues = Object.keys(values).reduce((acc, step) => {
                Object.keys(values[step]).forEach(field => {
                    acc[field] = values[step][field].value;
                });
                return acc;
            }, {});
            onSubmit(flattenedValues);
            setIsSubmitting(false);
        }
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        const step = `step${currentStep}`;
        const stepValues = initialValues[step];
        const stepErrors = Object.keys(stepValues).reduce((acc, key) => {
            const error = stepValues[key].validate(values[step][key].value);
            if (error) {
                acc[key] = error;
            }
            return acc;
        }, {});

        if (Object.keys(stepErrors).length > 0) {
            setStepErrors(stepErrors);
            return;
        }

        setStepErrors({});
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = () => {
        setStepErrors({});
        setCurrentStep((prev) => prev - 1);
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
                currentStep,
                handleNextStep,
                handlePrevStep,
                stepErrors,
                setStepErrors
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
