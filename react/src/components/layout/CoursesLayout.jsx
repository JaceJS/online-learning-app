import FirstCourse from "../../assets/img/course-1.jpg";
import SecondCourse from "../../assets/img/course-2.jpg";
import ThirdCourse from "../../assets/img/course-3.jpg";

const CoursesLayout = () => {
    return (
        <div
            className="row"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1000"
        >
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="course-item">
                    <img src={FirstCourse} className="img-fluid" alt="..." />
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Web Development</h4>
                            <p className="price">$169</p>
                        </div>

                        <h3>
                            <a href="course-details.html">Website Design</a>
                        </h3>
                        <p>
                            Et architecto provident deleniti facere repellat
                            nobis iste. Id facere quia quae dolores dolorem
                            tempore.
                        </p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                            <div className="trainer-profile d-flex align-items-center">
                                <img
                                    src="trainers/trainer-1.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <span>Antonio</span>
                            </div>
                            <div className="trainer-rank d-flex align-items-center">
                                <i className="bx bx-user"></i>&nbsp;50
                                &nbsp;&nbsp;
                                <i className="bx bx-heart"></i>&nbsp;65
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="course-item">
                    <img src={SecondCourse} className="img-fluid" alt="" />
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Marketing</h4>
                            <p className="price">$250</p>
                        </div>

                        <h3>
                            <a href="course-details.html">
                                Search Engine Optimization
                            </a>
                        </h3>
                        <p>
                            Et architecto provident deleniti facere repellat
                            nobis iste. Id facere quia quae dolores dolorem
                            tempore.
                        </p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                            <div className="trainer-profile d-flex align-items-center">
                                <img
                                    src="trainers/trainer-2.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <span>Lana</span>
                            </div>
                            <div className="trainer-rank d-flex align-items-center">
                                <i className="bx bx-user"></i>&nbsp;35
                                &nbsp;&nbsp;
                                <i className="bx bx-heart"></i>&nbsp;42
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                <div className="course-item">
                    <img src={ThirdCourse} className="img-fluid" alt="..." />
                    <div className="course-content">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4>Content</h4>
                            <p className="price">$180</p>
                        </div>

                        <h3>
                            <a href="course-details.html">Copywriting</a>
                        </h3>
                        <p>
                            Et architecto provident deleniti facere repellat
                            nobis iste. Id facere quia quae dolores dolorem
                            tempore.
                        </p>
                        <div className="trainer d-flex justify-content-between align-items-center">
                            <div className="trainer-profile d-flex align-items-center">
                                <img
                                    src="assets/img/trainers/trainer-3.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                                <span>Brandon</span>
                            </div>
                            <div className="trainer-rank d-flex align-items-center">
                                <i className="bx bx-user"></i>&nbsp;20
                                &nbsp;&nbsp;
                                <i className="bx bx-heart"></i>&nbsp;85
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesLayout;
