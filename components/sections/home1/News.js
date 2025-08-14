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

export default function News() {

  return (
    <>

        <section className="news-section sec-pad-2">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Blog Post</span>
                    <h2>Latest from Blog Post</h2>
                </div>
                <div className="inner-container p_relative">
                    <Swiper {...swiperOptions}>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Financial Planning</h6>
                                                <h5><span>By </span><Link href="/blog-details">D.Beckham</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>21</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>5 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Credit Card</h6>
                                                <h5><span>By </span><Link href="/blog-details">Vk.Christopher</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>06</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>4 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="block-content">
                                <div className="news-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="upper-box">
                                                <div className="title-box">
                                                    <h6><img src="assets/images/icons/icon-36.png" alt=""/>Business Banking</h6>
                                                    <h5><span>By </span><Link href="/blog-details">Z.Benjamin</Link></h5>
                                                </div>
                                                <div className="post-date align-3">
                                                    <h3>15</h3>
                                                    <h6>Jun, 2025</h6>
                                                </div>
                                            </div>
                                            <div className="lower-box">
                                                <h3><Link href="/blog-details">Growth Strategies for Your Small Business.</Link></h3>
                                                <div className="link-box">
                                                    <h5><img src="assets/images/icons/icon-37.png" alt=""/>6 Mins Read</h5>
                                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="upper-box">
                                                <div className="title-box">
                                                    <h6><img src="assets/images/icons/icon-36.png" alt=""/>Technology</h6>
                                                    <h5><span>By </span><a href="/blog-details">L.Nathaniel</a></h5>
                                                </div>
                                                <div className="post-date align-3">
                                                    <h3>31</h3>
                                                    <h6>May, 2025</h6>
                                                </div>
                                            </div>
                                            <div className="lower-box">
                                                <h3><Link href="/blog-details">Digital Payment Systems: The Future of Transactions.</Link></h3>
                                                <div className="link-box">
                                                    <h5><img src="assets/images/icons/icon-37.png" alt=""/>5 Mins Read</h5>
                                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-1.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Financial Planning</h6>
                                                <h5><span>By </span><Link href="/blog-details">D.Beckham</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>21</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>5 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-2.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Credit Card</h6>
                                                <h5><span>By </span><Link href="/blog-details">Vk.Christopher</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>06</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>4 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="block-content">
                                <div className="news-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="upper-box">
                                                <div className="title-box">
                                                    <h6><img src="assets/images/icons/icon-36.png" alt=""/>Business Banking</h6>
                                                    <h5><span>By </span><Link href="/blog-details">Z.Benjamin</Link></h5>
                                                </div>
                                                <div className="post-date align-3">
                                                    <h3>15</h3>
                                                    <h6>Jun, 2025</h6>
                                                </div>
                                            </div>
                                            <div className="lower-box">
                                                <h3><Link href="/blog-details">Growth Strategies for Your Small Business.</Link></h3>
                                                <div className="link-box">
                                                    <h5><img src="assets/images/icons/icon-37.png" alt=""/>6 Mins Read</h5>
                                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="news-block-one">
                                    <div className="inner-box">
                                        <div className="content-box">
                                            <div className="upper-box">
                                                <div className="title-box">
                                                    <h6><img src="assets/images/icons/icon-36.png" alt=""/>Technology</h6>
                                                    <h5><span>By </span><a href="/blog-details">L.Nathaniel</a></h5>
                                                </div>
                                                <div className="post-date align-3">
                                                    <h3>31</h3>
                                                    <h6>May, 2025</h6>
                                                </div>
                                            </div>
                                            <div className="lower-box">
                                                <h3><Link href="/blog-details">Digital Payment Systems: The Future of Transactions.</Link></h3>
                                                <div className="link-box">
                                                    <h5><img src="assets/images/icons/icon-37.png" alt=""/>5 Mins Read</h5>
                                                    <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
        </section>

    </>
  )
}
