const Testimonial = ({ name, image, rating, review }) => {
    return (
        <div className="testimonial flex flex-col gap-4 p-6 bg-gray shadow-lg rounded-2xl">
            <span>{rating}</span>
            <div className="testimonial__author flex items-center gap-4">
                <img src={image} alt={name} className="inline-block size-10 rounded-full ring-2 ring-white" />
                <h4>{name}</h4>
            </div>
            <p>{review}</p>
        </div>
    );
};

export default Testimonial;