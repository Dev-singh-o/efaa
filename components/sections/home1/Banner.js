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

    // Navigation
    navigation: {
        nextEl: '.owl-prev',
        prevEl: '.owl-next',
    },

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

        <section className="banner-section p_relative">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
            <Swiper {...swiperOptions} className="theme_carousel banner-carousel">
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-1.jpg)" }}></div>
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
                    <div className="outer-container">
                        <div className="content-box">
                            <h5><span>Flexi Savings</span> Earn up to 2.5% APY</h5>
                            <h2>Enjoy zero free banking on your sb account.</h2>
                            <div className="btn-box"><Link href="/service-details" className="theme-btn"><span>Book a Consultation</span></Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-2.jpg)" }}></div>
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
                    <div className="outer-container">
                        <div className="content-box">
                            <h5><span>Business Loan</span> From 8.5% APR</h5>
                            <h2>Fuel your business growth with our easy loan</h2>
                            <div className="btn-box"><Link href="/loans-1" className="theme-btn"><span>Apply Your Loan</span></Link></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/banner-3.jpg)" }}></div>
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-1.png)" }}></div>
                    <div className="outer-container">
                        <div className="content-box">
                            <h5><span>Credit Card</span> Enjoy 0% Annual Fee</h5>
                            <h2>Maximize benefits with your every transaction</h2>
                            <div className="btn-box"><Link href="/cards" className="theme-btn"><span>Apply Your Card</span></Link></div>
                        </div>
                    </div>
                </SwiperSlide>

                <div className="owl-dots">
                    <div className="swiper-pagination"></div>
                </div>

                <div className="owl-nav">
                    <button type="button" className="owl-prev"><span className="flaticon-next"></span></button>
                    <button type="button" className="owl-next"><span className="flaticon-next"></span></button>
                </div>
            </Swiper>
        </section>

        </>
    )
}
