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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
}

export default function Testimonial() {

  return (
    <>

        <section className="testimonial-style-two pt_90 pb_90">
            <div className="auto-container">
                <div className="inner-container p_relative">
                    <span className="big-text">testimonials</span>
                    <Swiper {...swiperOptions} className="three-item-carousel">
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt=""/></div>
                                    <h3>Highly Trustworthy</h3>
                                    <p>This bank consistently offers great customer support & reliable services. They’ve made banking experience incredibly convenient.</p>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt=""/></figure>
                                        <h4>Boris Elbert</h4>
                                        <span className="designation">Personal Loan Holder,</span>
                                        <span className="text">Newyork.</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="rating"><i className="flaticon-star"></i><span>Rated 5/5</span></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt=""/></div>
                                    <h3>Fast Transactions</h3>
                                    <p>Excellent banking experience with quick responses and helpful staff. The online services are straight forward and very effective.</p>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-6.png" alt=""/></figure>
                                        <h4>Dexter Clinton</h4>
                                        <span className="designation">Savings Account Holder,</span>
                                        <span className="text">California.</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt=""/></div>
                                    <h3>User Friendly</h3>
                                    <p>Exceptional service and user-friendly online banking. I’ve never had a smoother experience with any other bank like flexibank.</p>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-7.png" alt=""/></figure>
                                        <h4>Francis Emmet</h4>
                                        <span className="designation">Business Account Holder,</span>
                                        <span className="text">Newyork.</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt=""/></div>
                                    <h3>Highly Trustworthy</h3>
                                    <p>This bank consistently offers great customer support & reliable services. They’ve made banking experience incredibly convenient.</p>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-5.png" alt=""/></figure>
                                        <h4>Boris Elbert</h4>
                                        <span className="designation">Personal Loan Holder,</span>
                                        <span className="text">Newyork.</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="rating"><i className="flaticon-star"></i><span>Rated 5/5</span></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt=""/></div>
                                    <h3>Fast Transactions</h3>
                                    <p>Excellent banking experience with quick responses and helpful staff. The online services are straight forward and very effective.</p>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-6.png" alt=""/></figure>
                                        <h4>Dexter Clinton</h4>
                                        <span className="designation">Savings Account Holder,</span>
                                        <span className="text">California.</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="testimonial-block-one">
                                <div className="inner-box">
                                    <div className="rating"><i className="flaticon-star"></i><span>Rated 4.9/5</span></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-121.png" alt=""/></div>
                                    <h3>User Friendly</h3>
                                    <p>Exceptional service and user-friendly online banking. I’ve never had a smoother experience with any other bank like flexibank.</p>
                                    <div className="author-box">
                                        <figure className="thumb-box"><img src="assets/images/resource/testimonial-7.png" alt=""/></figure>
                                        <h4>Francis Emmet</h4>
                                        <span className="designation">Business Account Holder,</span>
                                        <span className="text">Newyork.</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>

    </>
  )
}
