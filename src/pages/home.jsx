import HeroSection from "../components/hero-section";
import Highlights from "../components/highlights";
import Testimonials from "../components/testimonials";
import About from "../components/about";

const Home = () => {
    return (
        <main>
            <HeroSection variant="home" />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    );
};

export default Home;