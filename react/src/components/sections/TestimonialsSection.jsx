import { useEffect } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import FirstTestimonial from "../../assets/img/testimonials/testimonials-1.jpg";
import SecondTestimonial from "../../assets/img/testimonials/testimonials-2.jpg";
import ThirdTestimonial from "../../assets/img/testimonials/testimonials-3.jpg";
import FourthTestimonial from "../../assets/img/testimonials/testimonials-4.jpg";
import FifthTestimonial from "../../assets/img/testimonials/testimonials-5.jpg";

const TestimonialsSection = () => {
    useEffect(() => {
        new Swiper(".testimonials-slider", {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            slidesPerView: "auto",
            pagination: {
                el: ".swiper-pagination",
                type: "bullets",
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },

                1200: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
            },
        });
    }, []);

    return (
        <section id="testimonials" className="testimonials">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2>Testimonials</h2>
                    <p>What are they saying</p>
                </div>

                <div
                    className="testimonials-slider swiper"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-duration="1000"
                >
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <img
                                        src={FirstTestimonial}
                                        className="testimonial-img"
                                        alt=""
                                    />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Proin iaculis purus consequat sem cure
                                        digni ssim donec porttitora entum
                                        suscipit rhoncus. Accusantium quam,
                                        ultricies eget id, aliquam eget nibh et.
                                        Maecen aliquam, risus at semper.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <img
                                        src={SecondTestimonial}
                                        className="testimonial-img"
                                        alt=""
                                    />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Export tempor illum tamen malis malis
                                        eram quae irure esse labore quem cillum
                                        quid cillum eram malis quorum velit fore
                                        eram velit sunt aliqua noster fugiat
                                        irure amet legam anim culpa.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <img
                                        src={ThirdTestimonial}
                                        className="testimonial-img"
                                        alt=""
                                    />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Enim nisi quem export duis labore cillum
                                        quae magna enim sint quorum nulla quem
                                        veniam duis minim tempor labore quem
                                        eram duis noster aute amet eram fore
                                        quis sint minim.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <img
                                        src={FourthTestimonial}
                                        className="testimonial-img"
                                        alt=""
                                    />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Fugiat enim eram quae cillum dolore
                                        dolor amet nulla culpa multos export
                                        minim fugiat minim velit minim dolor
                                        enim duis veniam ipsum anim magna sunt
                                        elit fore quem dolore labore illum
                                        veniam.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="testimonial-wrap">
                                <div className="testimonial-item">
                                    <img
                                        src={FifthTestimonial}
                                        className="testimonial-img"
                                        alt=""
                                    />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore
                                        sunt eram irure aliqua veniam tempor
                                        noster veniam enim culpa labore duis
                                        sunt culpa nulla illum cillum fugiat
                                        legam esse veniam culpa fore nisi cillum
                                        quid.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-pagination"></div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
