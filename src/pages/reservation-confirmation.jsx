import { useSearchParams } from "react-router-dom";

const ReservationConfirmation = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    return (
        <main>
            <section className="reservation-confirmation py-24">
                <div className="container max-w-screen-sm flex flex-col gap-12">
                    <div>
                        <h2 className="text-4xl font-display text-green mb-5">Reservation completed!</h2>
                        <p>
                            Thank you for booking your reservation with us. A confirmation email with your reservation details has been sent to your inbox. Please check your email for further instructions.
                            We look forward to hosting you! If you have any questions or need to make changes, feel free to contact us.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-4xl font-display text-green mb-5">Reservation summary</h2>
                        {searchParams.has("name") && (
                            <p>
                                <span className="font-semibold">Name: </span>
                                {searchParams.get("name")}
                            </p>
                        )}
                        {searchParams.has("email") && (
                            <p>
                                <span className="font-semibold">Email: </span>
                                {searchParams.get("email")}
                            </p>
                        )}
                        {searchParams.has("phone") && (
                            <p>
                                <span className="font-semibold">Phone: </span>
                                {searchParams.get("phone")}
                            </p>
                        )}
                        {(searchParams.has("date") && searchParams.has("time")) && (
                            <p>
                                <span className="font-semibold">Reservation date: </span>
                                {searchParams.get("date")}
                                {", "}
                                {searchParams.get("time")}
                            </p>
                        )}
                        {searchParams.has("occasion") && (
                            <p>
                                <span className="font-semibold">Occasion: </span>
                                {searchParams.get("occasion")}
                            </p>
                        )}
                        {searchParams.has("guests") && (
                            <p>
                                <span className="font-semibold">Guests: </span>
                                {searchParams.get("guests")}
                            </p>
                        )}
                        {searchParams.has("seating") && (
                            <p>
                                <span className="font-semibold">Seating Preference: </span>
                                {searchParams.get("seating")}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ReservationConfirmation;