import Breadcrumbs from "../components/sections/Breadcrumbs";
import CoursesSection from "../components/sections/CoursesSection";

const CoursesPage = () => {
    return (
        <main id="main">
            <Breadcrumbs
                title="Courses"
                description="Est dolorum ut non facere possimus quibusdam eligendi
                voluptatem. Quia id aut similique quia voluptas sit
                quaerat debitis. Rerum omnis ipsam aperiam consequatur
                laboriosam nemo harum praesentium."
            />
            <CoursesSection />
        </main>
    );
};

export default CoursesPage;
