import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ initialValues, onSubmit, children }) => {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const validateStep = (stepValues) => {
        const errors = {};
        Object.keys(stepValues).forEach(field => {
            const error = stepValues[field].validate(stepValues[field].value);
            if (error) {
                errors[field] = error;
            }
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
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name];
            return newErrors;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateStep(values[`step${currentStep}`]);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        setIsSubmitting(true);
        const flattenedValues = Object.keys(values).reduce((acc, step) => {
            Object.keys(values[step]).forEach(field => {
                acc[field] = values[step][field].value;
            });
            return acc;
        }, {});
        onSubmit(flattenedValues);
        setIsSubmitting(false);
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        const step = `step${currentStep}`;
        const stepValues = values[step];
        const stepErrors = validateStep(stepValues);

        if (Object.keys(stepErrors).length > 0) {
            setErrors(stepErrors);
            return;
        }

        setErrors({});
        setCurrentStep((prev) => prev + 1);
    };

    const handlePrevStep = () => {
        setErrors({});
        setCurrentStep((prev) => prev - 1);
    };

    return (
        <FormContext.Provider
            value={{
                values,
                errors,
                isSubmitting,
                handleChange,
                handleSubmit,
                currentStep,
                handleNextStep,
                handlePrevStep
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
