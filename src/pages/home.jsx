import HeroSection from "../components/hero-section";
import Highlights from "../components/highlights";
import Testimonials from "../components/testimonials";
import About from "../components/about";

const highlightsData = {
    headline: "Specials",
    link: {
        variant: "primary",
        label: "View All",
        href: "/",
    },
    highlights: [
        {
            image: "/greeksalad.jpg",
            title: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
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
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            link: { href: "#", label: "Order a delivery" },
        },
        {
            image: "/mediterraneanpizza.jpg",
            title: "Mediterranean Pizza",
            price: "$14.99",
            description: "Our Mediterranean Pizza is a combination of fresh vegetables, feta cheese, and a special blend of herbs and spices.",
            link: { href: "#", label: "Order a delivery" },
        }
    ],
};

const Home = () => {
    return (
        <main>
            <HeroSection variant="home" />
            <Highlights headline={highlightsData.headline} link={highlightsData.link} highlights={highlightsData.highlights} />
            <Testimonials />
            <About />
        </main>
    );
};

export default Home;