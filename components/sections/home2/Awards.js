'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}

export default function Awards() {

  return (
    <>

        <section className="awards-section pt_110 pb_110">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-5 col-md-12 col-sm-12 title-column">
                        <div className="title-inner">
                            <div className="sec-title">
                                <span className="sub-title">Awards</span>
                                <h2>Prestigious Awards and Honors</h2>
                                <p>Proudly recognized for our commitment to excellence, innovation, and customer satisfaction.</p>
                            </div>
                            <ul className="image-list">
                                <li><img src="assets/images/resource/award-1.jpg" alt=""/></li>
                                <li><img src="assets/images/resource/award-2.jpg" alt=""/></li>
                                <li><img src="assets/images/resource/award-3.jpg" alt=""/></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                        <div className="content-box p_relative centred pl_100 mt_7">
                            <Swiper {...swiperOptions}>
                                <SwiperSlide>
                                    <div className="award-block-one">
                                        <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                                            <h3>Best Bank of <br />the Year</h3>
                                            <div className="icon-box"><img src="assets/images/icons/award-1.png" alt=""/></div>
                                            <p>Awarded by <br />National Banking Assoc...</p>
                                            <span>2023-2025</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="award-block-one">
                                        <div className="inner-box">
                                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                                            <h3>Best Customer <br />Service Award</h3>
                                            <div className="icon-box"><img src="assets/images/icons/award-2.png" alt=""/></div>
                                            <p>Awarded by <br />Global Finance Magazine.</p>
                                            <span>2022</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="award-block-one">
                                        <div className="inner-box">
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                                            <h3>Best Bank of <br />the Year</h3>
                                            <div className="icon-box"><img src="assets/images/icons/award-1.png" alt=""/></div>
                                            <p>Awarded by <br />National Banking Assoc...</p>
                                            <span>2023-2025</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="award-block-one">
                                        <div className="inner-box">
                                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                                            <h3>Best Customer <br />Service Award</h3>
                                            <div className="icon-box"><img src="assets/images/icons/award-2.png" alt=""/></div>
                                            <p>Awarded by <br />Global Finance Magazine.</p>
                                            <span>2022</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="nav-style-one">
                                <div className="owl-nav">
                                    <button type="button" className="owl-prev"><span className="flaticon-next"></span></button>
                                    <button type="button" className="owl-next"><span className="flaticon-next"></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
