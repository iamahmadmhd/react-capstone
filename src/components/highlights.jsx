import Button from "./ui/button";
import Card from "./ui/card";

const highlightsData = [
    {
        image: "/greeksalad.jpg",
        title: "Greek Salad",
        price: "$12.99",
        description: "GThe famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        link: { href: "#", label: "Order a delivery" },
    },
    {
        image: "/bruchetta.jpg",
        title: "Bruchetta",
        price: "$8.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        link: { href: "#", label: "Order a delivery" },
    },
    {
        image: "/lemondessert.jpg",
        title: "Lemon Dessert",
        price: "$6.99",
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        link: { href: "#", label: "Order a delivery" },
    },
    {
        image: "/mediterraneanpizza.jpg",
        title: "Mediterranean Pizza",
        price: "$14.99",
        description: "Our Mediterranean Pizza is a combination of fresh vegetables, feta cheese, and a special blend of herbs and spices.",
        link: { href: "#", label: "Order a delivery" },
    }
];

const Highlights = () => {
    return (
        <section className="highlights container py-24">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-4xl text-center font-display">Specials</h2>
                <Button variant="primary">Online Menu</Button>
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {highlightsData.map((highlight, index) => (
                    <Card key={index} {...highlight} />
                ))}
            </div>
        </section>
    );
};
export default Highlights;