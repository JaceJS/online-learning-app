import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import CountsSection from "../components/sections/CountsSection";
import WhyUsSection from "../components/sections/WhyUsSection";
import PopularCourseSection from "../components/sections/PopularCourseSection";
import TrainersSection from "../components/sections/TrainersSection";

const HomePage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <main id="main">
                <CountsSection />
                <WhyUsSection />
                <PopularCourseSection />
                <TrainersSection />
            </main>
        </>
    );
};

export default HomePage;
