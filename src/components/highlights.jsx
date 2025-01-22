import UILink from "./ui/link";
import Card from "./ui/card";

const Highlights = ({ headline, link = {}, highlights = [] }) => {

    const { variant, label, href } = link;
    return (
        <section className="highlights container py-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl text-center font-display">{headline}</h2>
                {link && (
                    <UILink variant={variant} href={href}>{label}</UILink>
                )}
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {highlights.map((highlight, index) => (
                    <Card key={index} {...highlight} />
                ))}
            </div>
        </section>
    );
};
export default Highlights;