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

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    }
}

export default function Clients() {

  return (
    <>

        <section className="clients-section centred">
            <div className="inner-container">
                <div className="sec-title">
                    <span className="sub-title">centred</span>
                    <h2>Trusted Corporate Partners</h2>
                </div>
                <Swiper {...swiperOptions}>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-1.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-2.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-3.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-4.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-5.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-6.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-1.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-2.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-3.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-4.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-5.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-6.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-1.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-2.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-3.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-4.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-5.png" alt=""/></Link></figure>
                    </SwiperSlide>
                    <SwiperSlide>
                        <figure className="clients-logo"><Link href="/index-2"><img src="assets/images/clients/clients-6.png" alt=""/></Link></figure>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>

    </>
  )
}
