import { createSearchParams, useNavigate } from "react-router-dom";
import HeroSection from "../components/hero-section";
import ReservationForm from "../components/reservation-form";
import { FormProvider } from "../hooks/use-form";
import { submitAPI } from "../utils/api";

const initialValues = {
    step1: {
        date: {
            value: "",
            validate: (value) => {
                if (!value) {
                    return 'Date is required';
                }
            }
        },
        time: {
            value: '',
            validate: (value) => {
                if (!value) {
                    return 'Time is required';
                }
            }
        },
        guests: {
            value: 1,
            validate: (value) => {
                if (value < 1) {
                    return 'Guests must be at least 1';
                } else if (value > 50) {
                    return 'Guests must be at most 50';
                }
            }
        },
        occasion: {
            value: '',
            validate: (value) => {
                if (!value) {
                    return 'Occasion is required';
                }
            }
        },
        seating: {
            value: 'indoor',
            validate: (value) => {
                if (!value) {
                    return 'Seating is required';
                }
            }
        }
    },
    step2: {
        name: {
            value: '',
            validate: (value) => {
                if (!value) {
                    return 'Name is required';
                }
            }
        },
        email: {
            value: '',
            validate: (value) => {
                if (!value) {
                    return 'Email is required';
                }
            }
        },
        phone: {
            value: '',
            validate: (value) => {
                if (!value) {
                    return 'Phone is required';
                }
            }
        },
        requests: {
            value: '',
            validate: () => { }
        }
    }
};

const Reservations = () => {
    const navigate = useNavigate();
    const onSubmit = (values) => {
        const submit = submitAPI(values);
        if (submit) {
            navigate({
                pathname: "/reservation-confirmation",
                search: createSearchParams(values).toString()
            });
        }
    };

    return (
        <main>
            <HeroSection variant="other" />
            <FormProvider initialValues={initialValues} onSubmit={onSubmit}>
                <ReservationForm />
            </FormProvider>
        </main>
    );
};

export default Reservations;