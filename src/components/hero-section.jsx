import Link from "./ui/link";

const HeroSection = ({ variant = "home" }) => {
    return (
        <section className="hero-section bg-green py-12">
            <div className="container flex flex-wrap items-center relative">
                <div className="flex flex-col justify-between w-full md:max-w-[50%] md:min-h-[400px] gap-8">
                    <div className="hero-content">
                        <h1 className="text-6xl text-yellow font-display">Little Lemon</h1>
                        <h2 className="text-4xl text-white font-display">Chicago</h2>
                        <p className="text-white max-w-sm mt-4">
                            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                    </div>
                    {variant === "home" && (
                        <div>
                            <Link variant="primary" asRouterLink href="/reservations">Book a Table</Link>
                        </div>
                    )}
                </div>
                {variant === "home" && (
                    <img src="/hero.jpg" alt="little lemon" className="hidden md:block absolute right-6 h-[300px] w-[350px] lg:h-[400px] lg:w-[450px] object-cover translate-y-1/2 lg:translate-y-24 shadow-lg rounded-lg" />
                )}
            </div>
        </section>
    );
};

export default HeroSection;