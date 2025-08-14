'use client'
import { useState } from "react"
import Link from "next/link"

export default function Instant() {

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
    <>

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
                                        <h4><img src="assets/images/icons/icon-143.png" alt=""/>Account Management</h4>
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
                                        <h4><img src="assets/images/icons/icon-144.png" alt=""/>Transaction Services</h4>
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
                                        <h4><img src="assets/images/icons/icon-145.png" alt=""/>Loan and Credit Services</h4>
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
                                        <h4><img src="assets/images/icons/icon-146.png" alt=""/>Mobile / Internet Banking</h4>
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
                                <div className="icon"><img src="assets/images/icons/icon-148.png" alt=""/></div>
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

    </>
  )
}
