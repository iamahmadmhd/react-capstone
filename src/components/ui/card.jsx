const Card = ({ image, title, description, link }) => {
    return (
        <div className="bg-gray shadow-lg rounded-2xl overflow-hidden">
            <img src={image} alt={title} className="w-full mb-4 aspect-4/3 object-cover" />
            <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="">{description}</p>
                <a href={link.href} className="mt-auto font-semibold">{link.label}</a>
            </div>
        </div>
    );
};

export default Card;