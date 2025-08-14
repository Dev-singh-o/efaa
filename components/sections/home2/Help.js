'use client'
import { useState } from "react"
import Link from "next/link"

export default function Help() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

  return (
    <>

        <section className="help-section sec-pad">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">Instant Help</span>
                    <h2>Immediate Service Request</h2>
                </div>
                <div className="tabs-box">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 btn-column">
                            <div className="tab-btn-box">
                                <div className="tab-btns tab-buttons">
                                    <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "active-btn tab-btn" : "tab-btn"}>
                                        <div className="icon-box"><img src="assets/images/icons/icon-62.png" alt=""/></div>
                                        <h4>Account <br />Management</h4>
                                    </div>
                                    <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "active-btn tab-btn" : "tab-btn"}>
                                        <div className="icon-box"><img src="assets/images/icons/icon-63.png" alt=""/></div>
                                        <h4>Transaction <br />Services</h4>
                                    </div>
                                    <div onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "active-btn tab-btn" : "tab-btn"}>
                                        <div className="icon-box"><img src="assets/images/icons/icon-64.png" alt=""/></div>
                                        <h4>Loan and Credit <br />Services</h4>
                                    </div>
                                    <div onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "active-btn tab-btn" : "tab-btn"}>
                                        <div className="icon-box"><img src="assets/images/icons/icon-65.png" alt=""/></div>
                                        <h4>Mobile / Internet <br />Banking</h4>
                                    </div>
                                    <div onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "active-btn tab-btn" : "tab-btn"}>
                                        <div className="icon-box"><img src="assets/images/icons/icon-66.png" alt=""/></div>
                                        <h4>Fraud and <br />Security Services</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="id_one">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Effortlessly Manage Your Account Details</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link href="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt=""/></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="id_two">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Effortlessly Manage Your Transaction Services</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link href="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt=""/></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="id_three">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Manage Your Loan and Credit Services</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link href="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt=""/></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="id_four">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Manage Your Mobile / Internet Banking</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link href="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt=""/></figure>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="id_five">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                            <div className="content-box">
                                                <h4>Manage Your Security Services</h4>
                                                <ul className="list-item clearfix">
                                                    <li><Link href="/index-2">Change Account Details<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Contact Information<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Reset Net Banking Password<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Update Beneficiaries<i className="flaticon-right-arrow"></i></Link></li>
                                                    <li><Link href="/index-2">Set Up Account Alerts<i className="flaticon-right-arrow"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box"><img src="assets/images/resource/help-1.jpg" alt=""/></figure>
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
