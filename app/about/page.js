'use client'
import Layout from "@/components/layout/Layout"
import VideoPopup from "@/components/elements/VideoPopup"
import "app/favicon.ico"
import Link from "next/link"
import Funfact from "@/components/sections/home1/Funfact"
import Awards from "@/components/sections/home2/Awards"

export default function About() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">

            <section className="about-section pt_110 pb_120">
                <div className="auto-container">
                    <div className="upper-content pb_110">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                                <div className="title-box p_relative">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-41.png)" }}></div>
                                    <div className="sec-title">
                                        <span className="sub-title">Overview</span>
                                        <h2>Explore Our Journey & Core Beliefs</h2>
                                    </div>
                                    <div className="certified-box">
                                        <div className="rotate-box">
                                            <span className="curved-circle-2">ISO 27001 Certified Bank</span>
                                            <div className="icon-box"><img src="assets/images/icons/icon-196.png" alt=""/></div>
                                        </div>
                                        <h6>ISO Certification</h6>
                                        <h4>Our Commitment to Quality and <br />Secure banking.</h4>
                                        <span className="text">2000-2001</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div className="content-box">
                                    <div className="text-box mb_30">
                                        <p>On the other hand, we denounce with righteous indignation dislike men who are so beguiled and demoralized same as saying through shrinking from toil and pain.</p>
                                        <p>We denounce with righteous indignation dislike men who are so beguiled and demoralized same as saying.</p>
                                    </div>
                                    <div className="inner-box">
                                        <div className="icon-box">
                                            <div className="icon"><img src="assets/images/icons/icon-197.png" alt=""/></div>
                                            <span className="big-text">Features</span>
                                        </div>
                                        <ul className="list-item">
                                            <li>Wide Range of Financial Products</li>
                                            <li>Innovative Financial Solutions</li>
                                            <li>Extensive Branch and ATM Network</li>
                                            <li>Robust Security Measures</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lower-content">
                        <div className="row clearfix">
                            <div className="col-lg-8 col-md-12 col-sm-12 left-column">
                                <div className="left-content">
                                    <figure className="image-box"><img src="assets/images/resource/about-1.jpg" alt=""/></figure>
                                    <div className="content-box">
                                        <div className="bg-layer" style={{ backgroundImage: "url(assets/images/shape/shape-42.png)" }}></div>
                                        <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-43.png)" }}></div>
                                        <h2>29<span>+</span></h2>
                                        <h6>Years of experience in the Banking Sector.</h6>
                                        <Link href="/about"><i className="flaticon-right-arrow"></i>Our History</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 right-column">
                                <div className="video-content">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/video-1.jpg)" }}>
                                        <div className="video-btn centred mb_60">
                                            <VideoPopup /> 
                                        </div>
                                        <div className="author-box">
                                            <span className="designation">CEO & Founder of Flexibank</span>
                                            <h4>Leo George</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Funfact/>

            <section className="statements-section sec-pad-2 centred">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="sub-title">Statements</span>
                        <h2>Our Purpose and Principles</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                            <div className="statements-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/statements-1.jpg" alt=""/></figure>
                                        <h3>Our Mission</h3>
                                    </div>
                                    <div className="text-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-199.png" alt=""/></div>
                                        <p>Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                            <div className="statements-block-two">
                                <div className="inner-box">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-44.png)" }}></div>
                                    <div className="icon-box"><img src="assets/images/icons/icon-201.png" alt=""/></div>
                                    <h3>Our Core Values</h3>
                                    <p>Find fault with a man who chooses to enjoy a pleasure that has annoying resultant pleasure.</p>
                                    <ul className="list-item clearfix">
                                        <li>Integrity</li>
                                        <li>Customer Focus</li>
                                        <li>Transparency</li>
                                        <li>Accountability</li>
                                        <li>Teamwork</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 statements-block">
                            <div className="statements-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/statements-2.jpg" alt=""/></figure>
                                        <h3>Our Vision</h3>
                                    </div>
                                    <div className="text-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-200.png" alt=""/></div>
                                        <p>Equal blame belongs to those who fail in their duty through weakness of will which the same as saying.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Awards/>

            <section className="chooseus-section sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-45.png)" }}></div>
                <div className="auto-container">
                    <div className="sec-title light centred">
                        <span className="sub-title">Why Choose Us</span>
                        <h2>Reason for Choosing Us</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box">
                                <figure className="image"><img src="assets/images/resource/chooseus-1.jpg" alt=""/></figure>
                                <div className="chart-box centred">
                                    <h6> Financial Growth</h6>
                                    <div className="chart mb_12"><img src="assets/images/icons/chart-1.png" alt=""/></div>
                                    <ul className="option-list mb_7 clearfix">
                                        <li>
                                            <div className="check-box">
                                                <input className="check" type="radio" id="checkbox1" name="same" checked=""/>
                                                <label for="checkbox1">Option&nbsp;1</label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="check-box">
                                                <input className="check" type="radio" id="checkbox2" name="same"/>
                                                <label for="checkbox2">Option&nbsp;2</label>
                                            </div>
                                        </li>
                                    </ul>
                                    <span className="text">Growth</span>
                                    <span className="price">$42,4670</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-203.png" alt=""/></div>
                                        <h3>Customer <br />Centric Approach</h3>
                                        <p>Idea of denouncing pleasure and praising pain was born.</p>
                                    </div>
                                </div>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-204.png" alt=""/></div>
                                        <h3>Innovative Banking <br />Solutions</h3>
                                        <p>Rationally encounter consequences that are extremely.</p>
                                    </div>
                                </div>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-205.png" alt=""/></div>
                                        <h3>Advanced Digital <br />Banking</h3>
                                        <p>The wise man therefore always holds in these matters.</p>
                                    </div>
                                </div>
                                <div className="chooseus-block-one">
                                    <div className="inner-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-206.png" alt=""/></div>
                                        <h3>Expert Financial <br />Advice</h3>
                                        <p>Power of choice is untrammelled and when nothing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}