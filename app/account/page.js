'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import Custom_Banking from "@/components/sections/home1/Custom-Banking"
import "app/favicon.ico"
import Link from "next/link"

export default function About_page() {

        const [isActive, setIsActive] = useState({
            status: false,
            key: 1,
        })
    
        const handleToggle = (key) => {
            if (isActive.key === key) {
                setIsActive({
                    status: false,
                })
            } else {
                setIsActive({
                    status: true,
                    key,
                })
            }
        }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Accounts">

            <section className="custom-banking-two pb_90">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="sub-title">Custom Banking</span>
                        <h2>Banking For Your Needs</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                            <div className="banking-block-one">
                                <div className="inner-box">
                                    <div className="text-box">
                                        <h3><Link href="/index-2">Savings Account</Link></h3>
                                        <p>Perfectly simple and easy to distinguishto the claims of duty ...</p>
                                    </div>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/banking-6.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-161.png" alt=""/></div>
                                        <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                            <div className="banking-block-one">
                                <div className="inner-box">
                                    <div className="text-box">
                                        <h3><Link href="/index-2">Current Account</Link></h3>
                                        <p>Duty through weakness of will, which is the same as saying through...</p>
                                    </div>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/banking-7.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-162.png" alt=""/></div>
                                        <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                            <div className="banking-block-one">
                                <div className="inner-box">
                                    <div className="text-box">
                                        <h3><Link href="/index-2">Family 360o</Link></h3>
                                        <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                                    </div>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/banking-8.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-163.png" alt=""/></div>
                                        <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                            <div className="banking-block-one">
                                <div className="inner-box">
                                    <div className="text-box">
                                        <h3><Link href="/index-2">Senior Citizen</Link></h3>
                                        <p>Choice is untrammelled when nothing prevents our being able to do...</p>
                                    </div>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/banking-9.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-164.png" alt=""/></div>
                                        <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                            <div className="banking-block-one">
                                <div className="inner-box">
                                    <div className="text-box">
                                        <h3><Link href="/index-2">Demat Account</Link></h3>
                                        <p>Perfectly simple and easy to distinguish to the claims of duty ...</p>
                                    </div>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/banking-10.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-165.png" alt=""/></div>
                                        <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 banking-block">
                            <div className="banking-block-one">
                                <div className="inner-box">
                                    <div className="text-box">
                                        <h3><Link href="/index-2">Business Accounts</Link></h3>
                                        <p>Duty through weakness of will, which is the same as saying through...</p>
                                    </div>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/banking-11.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-166.png" alt=""/></div>
                                        <div className="btn-box"><Link href="/index-2" className="theme-btn"><span>Read More</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Custom_Banking/>

            <section className="instant-section sec-pad">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <div className="sec-title">
                                    <span className="sub-title">Instant Help</span>
                                    <h2>Immediate Service Request</h2>
                                </div>
                                <ul className="accordion-box">
                                    <li className="accordion block">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                            <div className="icon-box"><i className="flaticon-down-arrow-1"></i></div>
                                            <h4><img src="assets/images/icons/icon-168.png" alt=""/>Account Management</h4>
                                        </div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="row clearfix">
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Change Account Details</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Update Contact Information</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Reset Net Banking Password</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                            <div className="icon-box"><i className="flaticon-down-arrow-1"></i></div>
                                            <h4><img src="assets/images/icons/icon-169.png" alt=""/>Transaction Services</h4>
                                        </div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="row clearfix">
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Change Account Details</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Update Contact Information</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Reset Net Banking Password</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                            <div className="icon-box"><i className="flaticon-down-arrow-1"></i></div>
                                            <h4><img src="assets/images/icons/icon-170.png" alt=""/>Loan and Credit Services</h4>
                                        </div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="row clearfix">
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Change Account Details</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Update Contact Information</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Reset Net Banking Password</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                            <div className="icon-box"><i className="flaticon-down-arrow-1"></i></div>
                                            <h4><img src="assets/images/icons/icon-171.png" alt=""/>Mobile / Internet Banking</h4>
                                        </div>
                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <div className="row clearfix">
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Change Account Details</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Update Contact Information</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                                        <div className="single-item">
                                                            <Link href="/index-4">
                                                                <img src="assets/images/icons/icon-147.png" alt=""/>
                                                                <span>Reset Net Banking Password</span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12 support-column">
                            <div className="support-inner">
                                <div className="support-icon mt_11 align-3">
                                    <div className="icon"><img src="assets/images/icons/icon-167.png" alt=""/></div>
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}></div>
                                </div>
                                <div className="support-box">
                                    <figure className="image-box"><img src="assets/images/resource/support-1.png" alt=""/></figure>
                                    <div className="lower-content">
                                        <span className="big-text">support</span>
                                        <ul className="info-list mb_30 pb_3 clearfix">
                                            <li><Link href="tel:08008961234">0800 896 1234</Link> <span>(Toll Free)</span> <br />Personal</li>
                                            <li><Link href="tel:496912345678">+49 69 1234 5678 </Link> <br />Corporate</li>
                                        </ul>
                                        <div className="btn-box">
                                            <Link href="/index-4" className="theme-btn"><span>Send Your Queries</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="apps-section sec-pad">
                <div className="pattern-layer">
                    <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-33.png)" }}></div>
                    <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-34.png)" }}></div>
                </div>
                <figure className="image-layer"><img src="assets/images/resource/apps-3.png" alt=""/></figure>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                            <div className="content-box p_relative pl_200">
                                <span className="big-text">anytime <br />bank</span>
                                <div className="inner-box">
                                    <div className="sec-title light">
                                        <span className="sub-title">Mobile App</span>
                                        <h2>Download Our Mobile App</h2>
                                        <p>Our mobile app for secure, convenient banking anytime, anywhere.</p>
                                    </div>
                                    <div className="download-btn">
                                        <Link href="/index-2"><i className="flaticon-play-store"></i><span>Google Play</span></Link>
                                        <Link href="/index-2"><i className="flaticon-apple"></i><span>App Store</span></Link>
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