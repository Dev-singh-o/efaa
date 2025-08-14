'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import React from 'react'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
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


export default function Banner() {
    return (
        <> 

        <section className="banner-style-two p_relative">
            <Swiper {...swiperOptions} className="banner-carousel dots-style-one">
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-4.jpg)" }}></div>
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>Banking for a Better Tomorrow</h2>
                                        <p>Secure, convenient, and innovative banking solutions today.</p>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <h3>3.2k</h3>
                                                <span>Live Savings Accounts</span>
                                                <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                            </div>
                                            <div className="single-item">
                                                <h3>$2b</h3>
                                                <span>In Customer Savings</span>
                                                <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/account-details" className="theme-btn"><span>Open Your Account</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-5.jpg)" }}></div>
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>Invest with Confidence Now</h2>
                                        <p>Secure, convenient, and innovative banking solutions today.</p>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <h3>3.2k</h3>
                                                <span>Live Savings Accounts</span>
                                                <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                            </div>
                                            <div className="single-item">
                                                <h3>$2b</h3>
                                                <span>In Customer Savings</span>
                                                <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/investments-details" className="theme-btn"><span>Start Investing Now</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-item">
                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-6.jpg)" }}></div>
                        <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-10.png)" }}></div>
                        <div className="auto-container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-md-12 col-sm-12 content-column">
                                    <div className="content-box">
                                        <h2>Easy Loans, Quick Approvals</h2>
                                        <p>Secure, convenient, and innovative banking solutions today.</p>
                                        <div className="inner-box">
                                            <div className="single-item">
                                                <h3>3.2k</h3>
                                                <span>Live Savings Accounts</span>
                                                <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                            </div>
                                            <div className="single-item">
                                                <h3>$2b</h3>
                                                <span>In Customer Savings</span>
                                                <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                            </div>
                                        </div>
                                        <div className="btn-box">
                                            <Link href="/loans-1" className="theme-btn"><span>Check Loan Eligibility</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
        </section>

        </>
    )
}
