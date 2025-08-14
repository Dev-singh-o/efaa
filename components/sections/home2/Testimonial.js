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
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial() {

  return (
    <>

        <section className="testimonial-section pt_110 pb_120">
            <div className="auto-container">
                <div className="inner-container">
                    <span className="big-text">Feedback</span>
                    <Swiper {...swiperOptions} className="single-item-carousel">
                        <SwiperSlide>
                            <div className="testimonial-content">
                                <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt=""/></div>
                                <p>Flexibank made it so easy to open a new business checking account. The service was exceptional & quick process.</p>
                                <div className="author-inner">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-1.png" alt=""/></figure>
                                        <h4>Boris Elbert</h4>
                                        <span className="designation">Personal Loan Account, NY</span>
                                    </div>
                                    <ul className="thumb-list">
                                        <li><img src="assets/images/resource/testimonial-2.png" alt=""/></li>
                                        <li><img src="assets/images/resource/testimonial-3.png" alt=""/></li>
                                        <li><img src="assets/images/resource/testimonial-4.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-content">
                                <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt=""/></div>
                                <p>Flexibank made it so easy to open a new business checking account. The service was exceptional & quick process.</p>
                                <div className="author-inner">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-2.png" alt=""/></figure>
                                        <h4>Boris Elbert</h4>
                                        <span className="designation">Personal Loan Account, NY</span>
                                    </div>
                                    <ul className="thumb-list">
                                        <li><img src="assets/images/resource/testimonial-1.png" alt=""/></li>
                                        <li><img src="assets/images/resource/testimonial-3.png" alt=""/></li>
                                        <li><img src="assets/images/resource/testimonial-4.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-content">
                                <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt=""/></div>
                                <p>Flexibank made it so easy to open a new business checking account. The service was exceptional & quick process.</p>
                                <div className="author-inner">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-3.png" alt=""/></figure>
                                        <h4>Boris Elbert</h4>
                                        <span className="designation">Personal Loan Account, NY</span>
                                    </div>
                                    <ul className="thumb-list">
                                        <li><img src="assets/images/resource/testimonial-2.png" alt=""/></li>
                                        <li><img src="assets/images/resource/testimonial-1.png" alt=""/></li>
                                        <li><img src="assets/images/resource/testimonial-4.png" alt=""/></li>
                                    </ul>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-content">
                                <div className="icon-box"><img src="assets/images/icons/icon-82.png" alt=""/></div>
                                <p>Flexibank made it so easy to open a new business checking account. The service was exceptional & quick process.</p>
                                <div className="author-inner">
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-4.png" alt=""/></figure>
                                        <h4>Boris Elbert</h4>
                                        <span className="designation">Personal Loan Account, NY</span>
                                    </div>
                                    <ul className="thumb-list">
                                        <li><img src="assets/images/resource/testimonial-2.png" alt=""/></li>
                                        <li><img src="assets/images/resource/testimonial-3.png" alt=""/></li>
                                        <li><img src="assets/images/resource/testimonial-1.png" alt=""/></li>
                                    </ul>
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
                <div className="customer-review">
                    <div className="review-text mr_20">
                        <div className="icon-box"><img src="assets/images/icons/icon-83.png" alt=""/></div>
                        <p>Google Reviews from 6.4k Happy Customers.</p>
                    </div>
                    <div className="rating-box">
                        <h2>4.8</h2>
                        <ul className="rating-list">
                            <li><i className="flaticon-star"></i></li>
                            <li><i className="flaticon-star"></i></li>
                            <li><i className="flaticon-star"></i></li>
                            <li><i className="flaticon-star"></i></li>
                            <li><i className="flaticon-star"></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
