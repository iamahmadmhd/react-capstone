const About = () => {
    return (
        <section className="about container py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 relative">
                <div className="about-content flex flex-col justify-between items-center lg:items-start">
                    <h1 className="text-6xl text-yellow font-display">Little Lemon</h1>
                    <h2 className="text-4xl text-black font-display">Chicago</h2>
                    <p className="text-black max-w-sm mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.
                    </p>
                </div>
                <div className="about-images">
                    <img src="/mario-adrian.png" alt="" className="w-full" />
                </div>
            </div>
        </section>
    )
};

export default About;