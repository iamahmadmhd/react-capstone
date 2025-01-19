import Testimonial from "./ui/testimonial";

const testimonialsData = [
    {
        name: "John Doe",
        image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "The best food I've ever had! I can't wait to come back!",
    },
    {
        name: "Jane Smith",
        image: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "The food was amazing! I loved everything about it!",
    },
    {
        name: "Alex Johnson",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "The service was great! The food was delicious!",
    },
    {
        name: "Bob Brown",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        rating: "⭐️⭐️⭐️⭐️⭐️",
        review: "I can't wait to come back! The food was amazing!",
    },
];

const Testimonials = () => {
    return (
        <section className="testimonials bg-green py-24">
            <div className="container">
                <h2 className="text-4xl text-center font-display text-yellow">Testimonials</h2>
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                    {testimonialsData.map((testimonial, index) => (
                        <Testimonial key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;