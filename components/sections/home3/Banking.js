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

    // Pagination
    pagination: {
        el: '.swiper-pagination-2',
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

export default function Banking() {

  return (
    <>

        <section className="custom-banking-two alternat-2">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Custom Banking</span>
                    <h2>Banking For Your Needs</h2>
                </div>
                <Swiper {...swiperOptions} className="three-item-carousel">
                    <SwiperSlide>
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link href="/index-2">Account</Link></h3>
                                    <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/banking-2.jpg" alt=""/></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-102.png" alt=""/></div>
                                    <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link href="/index-2">Loan</Link></h3>
                                    <p>Duty through weakness of will, which is the same as saying through...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/banking-3.jpg" alt=""/></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-103.png" alt=""/></div>
                                    <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link href="/index-2">Investment</Link></h3>
                                    <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/banking-4.jpg" alt=""/></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-104.png" alt=""/></div>
                                    <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link href="/index-2">Account</Link></h3>
                                    <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/banking-2.jpg" alt=""/></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-102.png" alt=""/></div>
                                    <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link href="/index-2">Loan</Link></h3>
                                    <p>Duty through weakness of will, which is the same as saying through...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/banking-3.jpg" alt=""/></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-103.png" alt=""/></div>
                                    <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="banking-block-one">
                            <div className="inner-box">
                                <div className="text-box">
                                    <h3><Link href="/index-2">Investment</Link></h3>
                                    <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                                </div>
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/resource/banking-4.jpg" alt=""/></figure>
                                    <div className="icon-box"><img src="assets/images/icons/icon-104.png" alt=""/></div>
                                    <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="dots-style-one">
                    <div className="swiper-pagination-2 p_relative"></div>
                </div>
                <div className="more-text centred">
                    <h5><i className="flaticon-sparkle"></i>Discover <Link href="/service">More Services</Link> – Tailored to Meet Your Financial Needs.</h5>
                </div>
            </div>
        </section>

    </>
  )
}
