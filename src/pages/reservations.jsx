import { createSearchParams, useNavigate } from "react-router-dom";
import HeroSection from "../components/hero-section";
import ReservationForm from "../components/reservation-form";
import { FormProvider } from "../hooks/use-form";
import { submitAPI } from "../utils/api";


const initialValues = {
    date: "",
    time: '',
    guests: 1,
    occasion: '',
    seating: 'indoor',
    name: '',
    email: '',
    phone: '',
    requests: ''
}

const validate = (values) => {
    const errors = {};

    if (!values.date) {
        errors.date = 'Date is required';
    }
    if (!values.time) {
        errors.time = 'Time is required';
    }
    if (values.guests < 1) {
        errors.guests = 'Guests must be at least 1';
    } else if (values.guests > 50) {
        errors.guests = 'Guests must be at most 50';
    }
    if (!values.occasion) {
        errors.occasion = 'Occasion is required';
    }
    if (!values.seating) {
        errors.seating = 'Seating is required';
    }
    if (!values.name) {
        errors.name = 'Name is required';
    }
    if (!values.email) {
        errors.email = 'Email is required';
    }
    if (!values.phone) {
        errors.phone = 'Phone is required';
    }

    return errors;
};


const Reservations = () => {
    const navigate = useNavigate();
    const onSubmit = (values) => {
        const submit = submitAPI(values);
        if (submit) {
            navigate({
                pathname: "/reservation-confirmation",
                search: createSearchParams(values).toString()
            })
        }
    };
    return (
        <main>
            <HeroSection variant="other" />
            <FormProvider initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                <ReservationForm />
            </FormProvider>
        </main>
    );
};

export default Reservations;