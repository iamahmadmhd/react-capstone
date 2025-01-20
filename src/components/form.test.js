// src/components/reservation-form.test.jsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { useFormContext } from '../hooks/use-form';
import ReservationForm from './reservation-form';

jest.mock('../hooks/use-form', () => ({
    useFormContext: () => ({
        values: {
            name: '',
            email: '',
            phone: '',
            requests: '',
        },
        errors: {},
        handleChange: jest.fn(),
        handleBlur: jest.fn(),
        handleSubmit: jest.fn(),
    }),
}));

describe('ReservationForm', () => {
    it('renders the form fields', () => {
        const { getByLabelText } = render(<ReservationForm />);
        expect(getByLabelText('Name')).toBeInTheDocument();
        expect(getByLabelText('Email')).toBeInTheDocument();
        expect(getByLabelText('Phone')).toBeInTheDocument();
        expect(getByLabelText('Requests')).toBeInTheDocument();
    });

    it('calls handleChange when input fields change', () => {
        const { getByLabelText } = render(<ReservationForm />);
        const nameInput = getByLabelText('Name');
        const emailInput = getByLabelText('Email');
        const phoneInput = getByLabelText('Phone');
        const requestsInput = getByLabelText('Requests');

        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
        fireEvent.change(phoneInput, { target: { value: '123-456-7890' } });
        fireEvent.change(requestsInput, { target: { value: 'Special requests' } });

        expect(useFormContext().handleChange).toHaveBeenCalledTimes(4);
    });

    it('calls handleBlur when input fields blur', () => {
        const { getByLabelText } = render(<ReservationForm />);
        const nameInput = getByLabelText('Name');
        const emailInput = getByLabelText('Email');
        const phoneInput = getByLabelText('Phone');
        const requestsInput = getByLabelText('Requests');

        fireEvent.blur(nameInput);
        fireEvent.blur(emailInput);
        fireEvent.blur(phoneInput);
        fireEvent.blur(requestsInput);

        expect(useFormContext().handleBlur).toHaveBeenCalledTimes(4);
    });

    it('calls handleSubmit when the form is submitted', async () => {
        const { getByText } = render(<ReservationForm />);
        const submitButton = getByText('Submit');

        fireEvent.click(submitButton);

        await waitFor(() => expect(useFormContext().handleSubmit).toHaveBeenCalledTimes(1));
    });

    it('displays an error message when the form is submitted with invalid fields', async () => {
        const { getByText } = render(<ReservationForm />);
        const submitButton = getByText('Submit');

        fireEvent.click(submitButton);

        await waitFor(() => expect(getByText('Please fill in all the required fields.')).toBeInTheDocument());
    });
});