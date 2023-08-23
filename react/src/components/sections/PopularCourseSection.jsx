import CoursesLayout from "../layout/CoursesLayout";

const PopularCourseSection = () => {
    return (
        <section id="popular-courses" className="courses">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Courses</h2>
                    <p>Popular Courses</p>
                </div>
                <CoursesLayout />
            </div>
        </section>
    );
};

export default PopularCourseSection;
