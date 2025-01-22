import { useState } from 'react';
import Button from './ui/button';
import Input from './ui/input';
import Select from './ui/select';
import RadioGroup from './ui/radio-group';
import { useFormContext } from '../hooks/use-form';
import { fetchAPI } from "../utils/api";
import Textarea from './ui/textarea';
import DangerIcon from '../icons/danger';
import ChevronLeft from '../icons/chevron-left';

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
];

const ReservationForm = () => {
    const { values, errors, handleChange, handleSubmit, currentStep, handleNextStep, handlePrevStep } = useFormContext();
    const [timeOptions, setTimeOptions] = useState([]);

    const handleDateField = (e) => {
        const times = fetchAPI(new Date(e.target.value));
        handleChange(e);
        setTimeOptions(times);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSubmit(e);
    };

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
                        <ChevronLeft className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1" />
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
                            value={values.step1.date.value}
                            onChange={handleDateField}
                            placeholder={"Enter a date"}
                            required
                            error={errors.date}
                        />
                        <Select
                            options={timeOptions.length ? timeOptions.map((time) => ({ label: time, value: time })) : [{ label: "Select a date first", value: "" }]}
                            name="time"
                            label="Time"
                            defaultValue={timeOptions.length ? values.step1.time.value : ""}
                            onChange={handleChange}
                            required
                            disabled={!timeOptions.length}
                            error={errors.time}
                        />
                        <Input
                            type="number"
                            name="guests"
                            label="Number of guests"
                            value={values.step1.guests.value}
                            onChange={handleChange}
                            required
                            error={errors.guests}
                        />
                        <Select
                            options={occasionOptions}
                            name="occasion"
                            label="Occasion"
                            placeholder="Select an occasion"
                            value={values.step1.occasion.value}
                            onChange={handleChange}
                            required
                            error={errors.occasion}
                        />
                        <RadioGroup
                            options={seatingOptions}
                            name="seating"
                            label="Seating Preference"
                            defaultValue={values.step1.seating.value}
                            onChange={handleChange}
                            required
                            error={errors.seating}
                        />
                        {Object.keys(errors).length > 0 && (
                            <p className="flex items-center mt-2 text-xs text-red-500">
                                <DangerIcon className="w-5 h-5 mr-1.5" />
                                Please fill in all the required fields and ensure values are valid.
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
                            value={values.step2.name.value}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            required
                            error={errors.name}
                        />
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                            value={values.step2.email.value}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            error={errors.email}
                        />
                        <Input
                            type="tel"
                            name="phone"
                            label="Phone"
                            value={values.step2.phone.value}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                            required
                            error={errors.phone}
                        />
                        <Textarea
                            name="requests"
                            label="Requests"
                            placeholder="Enter any requests"
                            value={values.step2.requests.value}
                            onChange={handleChange}
                            error={errors.requests}
                        />
                        {Object.keys(errors).length > 0 && (
                            <p className="flex items-center mt-2 text-xs text-red-500">
                                <DangerIcon className="w-5 h-5 mr-1.5" />
                                Please fill in all the required fields and ensure values are valid.
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