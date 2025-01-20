
import { useEffect, useState } from 'react';
import Button from './ui/button';
import Input from './ui/input';
import Select from './ui/select';
import RadioGroup from './ui/radio-group';
import { useFormContext } from '../hooks/use-form';
import { fetchAPI } from "../utils/api";
import Textarea from './ui/textarea';

const occasionOptions = [
    { label: "Birthday", value: "birthday" },
    { label: "Anniversary", value: "anniversary" },
    { label: "Engagement", value: "engagement" },
    { label: "Wedding", value: "wedding" },
    { label: "Corporate", value: "corporate" },
    { label: "Other", value: "other" },
];

const seatingOptions = [
    { label: "Indoor", value: "indoor" },
    { label: "Outdoor", value: "outdoor" },
    { label: "Both", value: "both" },
]

const ReservationForm = () => {
    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormContext();
    const [firstStepError, setFirstStepError] = useState(false);
    const [secondStepError, setSecondStepError] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const [timeOptions, setTimeOptions] = useState([]);

    const handleNextStep = (e) => {
        e.preventDefault();
        if (!values.date || !values.time || !values.guests || !values.occasion || !values.seating) {
            setFirstStepError(true);
            return;
        }
        if (errors.date || errors.time || errors.guests || errors.occasion || errors.seating) {
            setFirstStepError(true);
            return;
        }
        setCurrentStep((prev) => prev + 1);
    };
    const handlePrevStep = () => {
        setSecondStepError(false);
        setCurrentStep((prev) => prev - 1)
    };

    const handleDateField = (e) => {
        const times = fetchAPI(new Date(e.target.value));
        handleChange(e);
        setTimeOptions(times);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!values.name || !values.email || !values.phone) {
            setSecondStepError(true);
            return;
        }
        if (errors.name || errors.email || errors.phone) {
            setSecondStepError(true);
            return;
        }
        handleSubmit(e);
    }

    return (
        <section className="reservation-form container max-w-screen-sm py-20">
            {currentStep === 1 && (
                <h2 className="text-4xl text-green font-display mb-8">Reserve a Table</h2>
            )}
            {currentStep === 2 && (
                <div className="mb-8">
                    <button
                        type="button"
                        className="group flex items-center text-green"
                        onClick={handlePrevStep}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                        <span className="ml-2">Back</span>
                    </button>
                    <h2 className="text-4xl text-green font-display mt-8">Your Contact Information</h2>
                </div>
            )}
            <form className="form flex flex-col gap-4 items-end" onSubmit={handleFormSubmit}>
                {currentStep === 1 && (
                    <>
                        <Input
                            type="date"
                            name="date"
                            label="Date"
                            value={values.date}
                            onChange={handleDateField}
                            onBlur={handleBlur}
                            placeholder={"Enter a date"}
                            required
                            error={errors.date}
                        />
                        <Select
                            options={timeOptions.map((time) => ({ label: time, value: time }))}
                            name="time"
                            label="Time"
                            value={values.time}
                            onChange={handleChange}
                            placeholder={timeOptions.length ? "Select a time" : "Select a date first"}
                            required
                        />
                        <Input
                            type="number"
                            name="guests"
                            label="Number of guests"
                            value={values.guests}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            error={errors.guests}
                        />
                        <Select
                            options={occasionOptions}
                            name="occasion"
                            label="Occasion"
                            placeholder="Select an occasion"
                            value={values.occasion}
                            onChange={handleChange}
                            required
                            error={errors.occasion}
                        />
                        <RadioGroup
                            options={seatingOptions}
                            name="seating"
                            label="Seating Preference"
                            value={values.seating}
                            onChange={handleChange}
                            required
                            error={errors.seating}
                        />
                        {firstStepError && (
                            <p className="flex items-center mt-2 text-xs text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>
                                Please fill in all the required fields.
                            </p>
                        )}
                        <div className="mt-4">
                            <Button variant="secondary" type="button" onClick={handleNextStep}>Next</Button>
                        </div>
                    </>
                )}
                {currentStep === 2 && (
                    <>
                        <Input
                            type="text"
                            name="name"
                            label="Name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your name"
                            required
                            error={errors.name}
                        />
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your email"
                            required
                            error={errors.email}
                        />
                        <Input
                            type="tel"
                            name="phone"
                            label="Phone"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            placeholder="Enter your phone number"
                            required
                            error={errors.phone}
                        />
                        <Textarea
                            name="requests"
                            label="Requests"
                            placeholder="Enter any requests"
                        />
                        {secondStepError && (
                            <p className="flex items-center mt-2 text-xs text-red-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1.5">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM12 8.25a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm0 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>
                                Please fill in all the required fields.
                            </p>
                        )}
                        <div className="mt-4">
                            <Button variant="secondary" type="submit">Submit</Button>
                        </div>
                    </>
                )}
            </form>
        </section>
    );
};

export default ReservationForm;