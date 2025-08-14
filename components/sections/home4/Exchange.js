'use client'
import { useState } from "react"
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
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function Exchange() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

  return (
    <>

        <section className="exchange-section light-section bg-color-2">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-28.png)" }}></div>
            <div className="auto-container">
                <div className="sec-title centred light">
                    <span className="sub-title">Forex Rates</span>
                    <h2>Foreign Exchange Rates</h2>
                </div>
                <div className="exchange-tab">
                    <div className="tab-btn-box">
                        <ul className="tab-btns product-tab-btns clearfix">
                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>Money Send & Receive</li>
                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>Load & Redeem Forex Card</li>
                        </ul>
                    </div>
                    <div className="p-tabs-content">
                        <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"} id="id_one">
                            <div className="content-inner p_relative">
                                <Swiper {...swiperOptions} className="four-item-carousel">
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>jpy</h4>
                                                            <p>Japanese Yen</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-2.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$153.12</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>aud</h4>
                                                            <p>Australian Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>cad</h4>
                                                            <p>Canadian Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-4.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>sek</h4>
                                                            <p>Swedish Krona</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$67.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>jpy</h4>
                                                            <p>Japanese Yen</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-2.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$153.12</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>aud</h4>
                                                            <p>Australian Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>cad</h4>
                                                            <p>Canadian Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-4.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>sek</h4>
                                                            <p>Swedish Krona</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$67.25</p>
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
                        <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="id_two">
                            <div className="content-inner p_relative">
                                <Swiper {...swiperOptions} className="four-item-carousel">
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>jpy</h4>
                                                            <p>Japanese Yen</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-2.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$153.12</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>aud</h4>
                                                            <p>Australian Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>cad</h4>
                                                            <p>Canadian Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-4.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>sek</h4>
                                                            <p>Swedish Krona</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$67.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>jpy</h4>
                                                            <p>Japanese Yen</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-2.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$153.12</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>aud</h4>
                                                            <p>Australian Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-3.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>cad</h4>
                                                            <p>Canadian Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-4.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="exchange-block-one">
                                            <div className="inner-box">
                                                <div className="upper-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>usd</h4>
                                                            <p>American Dollar</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-1.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Buys</h5>
                                                        <p>$148.25</p>
                                                    </div>
                                                    <div className="btn-box"><button type="button"><i className="flaticon-mobile-data"></i></button></div>
                                                </div>
                                                <div className="lower-box">
                                                    <div className="currency-box">
                                                        <div className="currency-name">
                                                            <h4>sek</h4>
                                                            <p>Swedish Krona</p>
                                                        </div>
                                                        <figure className="flag"><img src="assets/images/icons/flag-5.png" alt=""/></figure>
                                                    </div>
                                                    <div className="buys-box">
                                                        <h5>Sells</h5>
                                                        <p>$67.25</p>
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
                    </div>
                </div>
                <div className="more-text centred">
                    <h5><i className="flaticon-sparkle"></i>Discover <Link href="/service">More Services</Link> – Tailored to Meet Your Financial Needs.</h5>
                </div>
            </div>
        </section>

    </>
  )
}
