import Breadcrumbs from "../components/sections/Breadcrumbs";
import AboutSection from "../components/sections/AboutSection";
import CountsSection from "../components/sections/CountsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

const AboutPage = () => {
    return (
        <main id="main">
            <Breadcrumbs
                title="About Us"
                description="Est dolorum ut non facere possimus quibusdam eligendi
                voluptatem. Quia id aut similique quia voluptas sit
                quaerat debitis. Rerum omnis ipsam aperiam consequatur
                laboriosam nemo harum praesentium."
            />
            <AboutSection />
            <CountsSection />
            <TestimonialsSection />
        </main>
    );
};

export default AboutPage;
