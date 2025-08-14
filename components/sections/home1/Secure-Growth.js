'use client'
import Link from "next/link"
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
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
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


export default function Secure_Growth() {

    return (
        <> 

        <section className="secure-growth bg-color-1">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Secure Growth</span>
                    <h2>Enhance Your Wealth Safely</h2>
                </div>
                <div className="inner-container p_relative">
                    <Swiper {...swiperOptions}>
                        <SwiperSlide>
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Trade FX</Link></h3>
                                    <p>Perfectly simple easy distinguish to the claims of duty...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-1.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="Link">Multi Currency a/c</Link></h3>
                                    <p>Duty through weaknes will which is same as saying through...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-2.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-19.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Mutual Funds</Link></h3>
                                    <p>Choice is when nothing prevents our being able to do...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-3.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-20.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Trade FX</Link></h3>
                                    <p>Perfectly simple easy distinguish to the claims of duty...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-1.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="Link">Multi Currency a/c</Link></h3>
                                    <p>Duty through weaknes will which is same as saying through...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-2.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-19.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Mutual Funds</Link></h3>
                                    <p>Choice is when nothing prevents our being able to do...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-3.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-20.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
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
                    <div className="more-text centred">
                        <h5><i className="flaticon-sparkle"></i>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
