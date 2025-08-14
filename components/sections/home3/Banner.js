'use client'
import { useState } from "react"
import Link from "next/link"
import CircleText from "../../../components/elements/CircleText"

export default function Banner() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

  return (
    <>

        <section className="banner-style-three p_relative">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-11.png)" }}></div>
            <div className="inner-container">
                <div className="inner-box clearfix">
                    <div className="content-box">
                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-12.png)" }}></div>
                        <div className="light-icon"><img src="assets/images/icons/icon-97.png" alt=""/></div>
                        <figure className="doller-box"><img src="assets/images/resource/doller-1.png" alt=""/></figure>
                        <div className="rotate-box">
                            <div className='curve-text'>
                                <div className="curved-circle"><CircleText text="Business Loan Interst Rate" radius={77} /></div>
                            </div>
                            <div className="text">
                                <span>From</span>
                                <h3>8.5%</h3>
                                <h6>apr</h6>
                            </div>
                        </div>
                        <div className="sec-title">
                            <span className="sub-title">Business Loan</span>
                            <h2>Business <br /><span>Dreams</span> Realized</h2>
                        </div>
                        <p>Proudly recognized for our commitment to excellence.</p>
                        <div className="btn-box">
                            <Link href="/index-3"><i className="flaticon-right-arrow"></i>Find Out More</Link>
                        </div>
                        <div className="appointment-box">
                            <div className="icon-box"><img src="assets/images/icons/icon-98.png" alt=""/></div>
                            <h5>Make an Appointment</h5>
                            <p>Consultation with our executive today.</p>
                            <div className="link"><Link href="/index-3"><i className="flaticon-right-arrow"></i></Link></div>
                        </div>
                    </div>
                    <div className="image-box">
                        <figure className="image"><img src="assets/images/banner/banner-img-1.jpg" alt=""/></figure>
                    </div>
                </div>
                <div className="form-inner">
                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-14.png)" }}></div>
                    <h3>Banking Portal</h3>
                    <div className="tabs-box">
                        <div className="tab-btns tab-buttons mb_30">
                            <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "active-btn tab-btn" : "tab-btn"}><h5>Personal</h5></div>
                            <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "active-btn tab-btn" : "tab-btn"}><h5>Business</h5></div>
                        </div>
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"} id="id_one">
                                <div className="form-content">
                                    <form method="post" action="/index-3">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-99.png" alt=""/></div>
                                            <input type="text" name="phone" placeholder="Mobile Num" required/>
                                        </div>
                                        <div className="text-box pt_6 pb_16 centred">[or]</div>
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-100.png" alt=""/></div>
                                            <input type="text" name="name" placeholder="User Name" required/>
                                        </div>
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-101.png" alt=""/></div>
                                            <input type="password" name="password" placeholder="Password" required/>
                                        </div>
                                        <div className="message-btn pt_10"><button type="submit" className="theme-btn"><span>Login Your Account</span></button></div>
                                        <div className="forgot-password pt_18 pb_12 centred">
                                            <button type="button">Forgot Username?</button>
                                        </div>
                                        <div className="text centred"><p>New to banking? <Link href="/index-3">Sign Up.</Link></p></div>
                                    </form>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="id_two">
                                <div className="form-content">
                                    <form method="post" action="/index-3">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-99.png" alt=""/></div>
                                            <input type="text" name="phone" placeholder="Mobile Num 2" required/>
                                        </div>
                                        <div className="text-box pt_6 pb_16 centred">[or]</div>
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-100.png" alt=""/></div>
                                            <input type="text" name="name" placeholder="User Name 2" required/>
                                        </div>
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-101.png" alt=""/></div>
                                            <input type="password" name="password" placeholder="Password 2" required/>
                                        </div>
                                        <div className="message-btn pt_10"><button type="submit" className="theme-btn"><span>Login Your Account</span></button></div>
                                        <div className="forgot-password pt_18 pb_12 centred">
                                            <button type="button">Forgot Username?</button>
                                        </div>
                                        <div className="text centred"><p>New to banking? <Link href="/index-3">Sign Up.</Link></p></div>
                                    </form>
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
