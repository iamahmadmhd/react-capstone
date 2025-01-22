import { useEffect } from 'react';

const Card = ({ image, title, description, link = {} }) => {
    useEffect(() => {
        console.log({ image });
    }, [image]);

    const { href, label } = link;

    return (
        <article className="bg-gray shadow-lg rounded-2xl overflow-hidden">
            <img src={image} alt={title} className="w-full aspect-4/3 object-cover" />
            <div className="p-6 flex flex-col gap-4">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p>{description}</p>
                {link && (
                    <a href={href} className="font-semibold">{label}</a>
                )}
            </div>
        </article>
    )
};

export default Card;