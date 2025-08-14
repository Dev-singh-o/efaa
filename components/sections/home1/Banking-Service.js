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
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}


export default function Banking_Service() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }


    return (
        <> 

        <section className="banking-service sec-pad">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Custom Banking</span>
                    <h2>Banking For Your Needs</h2>
                </div>
                <div className="tabs-box">
                    <div className="tab-btn-box mb_70 p_relative">
                        <Swiper {...swiperOptions} className="tab-btns tab-buttons tab-btn-carousel">
                            <SwiperSlide>
                                <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-12.png" alt=""/></div>
                                    <h3>Fixed Deposit</h3>
                                    <p>Higher Returns & Security.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt=""/></div>
                                    <h3>Accounts</h3>
                                    <p>Duty the obligations business.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt=""/></div>
                                    <h3>Investments</h3>
                                    <p>Secure you & your family.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-15.png" alt=""/></div>
                                    <h3>Family 360o</h3>
                                    <p>Complete banking solutions.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-12.png" alt=""/></div>
                                    <h3>Fixed Deposit</h3>
                                    <p>Higher Returns & Security.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => handleOnClick(6)} className={activeIndex === 6 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-13.png" alt=""/></div>
                                    <h3>Accounts</h3>
                                    <p>Duty the obligations business.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => handleOnClick(7)} className={activeIndex === 7 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-14.png" alt=""/></div>
                                    <h3>Investments</h3>
                                    <p>Secure you & your family.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div onClick={() => handleOnClick(8)} className={activeIndex === 8 ? "p-tab-btn active-btn tab-btn" : "tab-btn"}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-15.png" alt=""/></div>
                                    <h3>Family 360o</h3>
                                    <p>Complete banking solutions.</p>
                                </div>
                            </SwiperSlide> 
                        </Swiper>  
                        <div className="owl-nav">
                            <button type="button" className="owl-prev"><span className="flaticon-next"></span></button>
                            <button type="button" className="owl-next"><span className="flaticon-next"></span></button>
                        </div>
                    </div>
                    <div className="tabs-content">
                        <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"} id="id_one">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Fixed Deposit</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt=""/></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="id_two">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Accounts</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt=""/></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 3 ? "tab p-tab active-tab" : "tab"} id="id_three">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Investments</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt=""/></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 4 ? "tab p-tab active-tab" : "tab"} id="id_Four">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Family 360o</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt=""/></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 5 ? "tab p-tab active-tab" : "tab"} id="id_five">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Fixed Deposit</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt=""/></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 6 ? "tab p-tab active-tab" : "tab"} id="id_six">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Accounts</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt=""/></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 7 ? "tab p-tab active-tab" : "tab"} id="id_seven">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Investments</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt=""/></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={activeIndex === 8 ? "tab p-tab active-tab" : "tab"} id="id_eight">
                            <div className="row clearfix">
                                <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                                    <div className="image-box mr_35">
                                        <figure className="image"><img src="assets/images/resource/banking-1.jpg" alt=""/></figure>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                    <div className="content-box mr_50">
                                        <h2>Family 360o</h2>
                                        <p>Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.</p>
                                        <div className="inner-box">
                                            <h6>Key Benefits:</h6>
                                            <ul className="list-style-one clearfix">
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>100% Guaranteed returns</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Loan against FD available</li>
                                                <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible tenure options</li>
                                            </ul>
                                            <div className="inner">
                                                <div className="icon-box"><img src="assets/images/icons/icon-17.png" alt=""/></div>
                                                <h4>Guide to <br />Fixed Deposits</h4>
                                                <h6>pdf 6.8mb</h6>
                                                <button type="button" className="theme-btn"><span>Download</span></button>
                                            </div>
                                        </div>
                                        <div className="lower-text">
                                            <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                            <h5>Find the Perfect <Link href="/">FD Option</Link> for Your Needs.</h5>
                                        </div>
                                    </div>
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
