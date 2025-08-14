'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

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

export default function Secure() {

  return (
    <>

        <section className="secure-growth-two bg-color-3 sec-pad-2">
            <figure className="image-layer"><img src="assets/images/resource/men-3.png" alt=""/></figure>
            <span className="big-text">Growth</span>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-9 col-md-12 col-sm-12 big-column">
                        <div className="inner-container p_relative">
                            <div className="sec-title light">
                                <span className="sub-title">Secure Growth</span>
                                <h2>Enhance Your Wealth Safely</h2>
                            </div>
                            <Swiper {...swiperOptions} className="three-item-carousel">
                                <SwiperSlide>
                                    <div className="growth-block-two">
                                        <div className="inner-box">
                                            <h3><Link href="/index-2">Trade FX</Link></h3>
                                            <div className="icon-box">
                                                <div className="icon"><img src="assets/images/icons/icon-59.png" alt=""/></div>
                                                <span className="count-text">01.</span>
                                            </div>
                                            <p>Perfect simple easy some matters to this...</p>
                                            <ul className="list-item clearfix">
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Currency Pairs</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Real-time Quotes</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Market Analysis</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="growth-block-two">
                                        <div className="inner-box">
                                            <h3><Link href="/index-2">Multi Currency a/c</Link></h3>
                                            <div className="icon-box">
                                                <div className="icon"><img src="assets/images/icons/icon-60.png" alt=""/></div>
                                                <span className="count-text">02.</span>
                                            </div>
                                            <p>Duty through weaknes will whichis same...</p>
                                            <ul className="list-item clearfix">
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Currency Options</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Best Rates</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Secure Transactions</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="growth-block-two">
                                        <div className="inner-box">
                                            <h3><Link href="/index-2">Mutual Funds</Link></h3>
                                            <div className="icon-box">
                                                <div className="icon"><img src="assets/images/icons/icon-61.png" alt=""/></div>
                                                <span className="count-text">03.</span>
                                            </div>
                                            <p>When nothing prevents our being able to do...</p>
                                            <ul className="list-item clearfix">
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Equity Funds</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>International Funds</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Index Funds</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="growth-block-two">
                                        <div className="inner-box">
                                            <h3><Link href="/index-2">Trade FX</Link></h3>
                                            <div className="icon-box">
                                                <div className="icon"><img src="assets/images/icons/icon-59.png" alt=""/></div>
                                                <span className="count-text">01.</span>
                                            </div>
                                            <p>Perfect simple easy some matters to this...</p>
                                            <ul className="list-item clearfix">
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Currency Pairs</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Real-time Quotes</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Market Analysis</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="growth-block-two">
                                        <div className="inner-box">
                                            <h3><Link href="/index-2">Multi Currency a/c</Link></h3>
                                            <div className="icon-box">
                                                <div className="icon"><img src="assets/images/icons/icon-60.png" alt=""/></div>
                                                <span className="count-text">02.</span>
                                            </div>
                                            <p>Duty through weaknes will whichis same...</p>
                                            <ul className="list-item clearfix">
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Currency Options</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Best Rates</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Secure Transactions</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="growth-block-two">
                                        <div className="inner-box">
                                            <h3><Link href="/index-2">Mutual Funds</Link></h3>
                                            <div className="icon-box">
                                                <div className="icon"><img src="assets/images/icons/icon-61.png" alt=""/></div>
                                                <span className="count-text">03.</span>
                                            </div>
                                            <p>When nothing prevents our being able to do...</p>
                                            <ul className="list-item clearfix">
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Equity Funds</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>International Funds</Link></li>
                                                <li><Link href="/index-2"><img src="assets/images/icons/icon-88.png" alt=""/>Index Funds</Link></li>
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
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
