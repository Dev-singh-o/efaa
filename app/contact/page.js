'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Contact() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Get in Touch">


            <section className="corporate-section sec-pad-2">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="sub-title">Corporate Office</span>
                        <h2>Connect with Corporate Team</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 corporate-block">
                            <div className="corporate-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-227.png" alt=""/></div>
                                        <div className="overlay-icon"><img src="assets/images/icons/icon-228.png" alt=""/></div>
                                    </div>
                                    <h4>Dial Us</h4>
                                    <p>For Instant Help and Friendly Service.</p>
                                    <h5><Link href="tel:080089612345678">0800 896 1234 & 5678</Link></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 corporate-block">
                            <div className="corporate-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-230.png" alt=""/></div>
                                        <div className="overlay-icon"><img src="assets/images/icons/icon-231.png" alt=""/></div>
                                    </div>
                                    <h4>Mail Us</h4>
                                    <p>Questions? Mail us, and we’ll handle the rest.</p>
                                    <h5><Link href="mailto:getsupport@example.com">getsupport@example.com</Link></h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 corporate-block">
                            <div className="corporate-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-232.png" alt=""/></div>
                                        <div className="overlay-icon"><img src="assets/images/icons/icon-233.png" alt=""/></div>
                                    </div>
                                    <h4>Address</h4>
                                    <p>Your Destination for banking Service.</p>
                                    <h5>14 Hackescher Markt, Mitte 10115, German.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 corporate-block">
                            <div className="corporate-block-one">
                                <div className="inner-box">
                                    <div className="icon-box">
                                        <div className="icon"><img src="assets/images/icons/icon-234.png" alt=""/></div>
                                        <div className="overlay-icon"><img src="assets/images/icons/icon-235.png" alt=""/></div>
                                    </div>
                                    <h4>Banking Hours</h4>
                                    <p>Flexible Banking Hours, Just for You.</p>
                                    <h5>Mon-Sat: 9am to 5pm <span>[2nd Sat Holiday]</span></h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="branches-section pt_120 pb_120">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-48.png)" }}></div>
                <span className="big-text">& Atm’s <br/>Branches</span>
                <div className="auto-container">
                    <div className="content-box">
                        <h3>Over 280 Branches & ATM’s Nationwide</h3>
                        <div className="tabs-box">
                            <div className="tab-btns tab-buttons mb_25">
                                <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "active-btn tab-btn" : "tab-btn"}><h5>Branches</h5></div>
                                <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "active-btn tab-btn" : "tab-btn"}><h5>ATM’s</h5></div>
                            </div>
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="id_one">
                                    <div className="inner-box">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                            <input type="text" name="location" placeholder="Current Location"/>
                                        </div>
                                        <div className="text">[or]</div>
                                        <div className="form-group">
                                            <input type="text" name="city" placeholder="City name: Hamburg"/>
                                        </div>
                                        <div className="link-box"><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</Link></div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="id_two">
                                    <div className="inner-box">
                                        <div className="form-group">
                                            <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                            <input type="text" name="location" placeholder="Current Australis"/>
                                        </div>
                                        <div className="text">[or]</div>
                                        <div className="form-group">
                                            <input type="text" name="city" placeholder="City name: Hamburg"/>
                                        </div>
                                        <div className="link-box"><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-inner">
                    <div className="map-box">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="map-content">
                        <h4>St. Georg, Hamburg</h4>
                        <p>26 Maggie St, Little South <br />Slope, 22763.</p>
                        <h5><Link href="tel:08008961234">0800 896 1234</Link></h5>
                    </div>
                </div>
            </section>


            <section className="contact-section sec-pad">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-49.png)" }}></div>
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="sub-title">Send Message</span>
                        <h2>Message Our Support Team</h2>
                    </div>
                    <div className="tabs-box">
                        <div className="tab-btns tab-buttons clearfix">
                            <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "active-btn tab-btn" : "tab-btn"}><h4>Personal Banking</h4></div>
                            <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "active-btn tab-btn" : "tab-btn"}><h4>Corporate Banking</h4></div>
                        </div>
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="id_one">
                                <div className="form-inner">
                                    <form method="post" action="sendemail.php" id="contact-form">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-221.png" alt=""/></div>
                                                    <label>Your Name</label>
                                                    <input type="text" name="username" placeholder="Enter name here" required/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-222.png" alt=""/></div>
                                                    <label>Email</label>
                                                    <input type="email" name="email" placeholder="Email address" required/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-223.png" alt=""/></div>
                                                    <label>Phone</label>
                                                    <input type="text" name="phone" placeholder="Phone number" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Reason for Contact</label>
                                                    <div className="select-box">
                                                        <select className="wide">
                                                        <option data-display="Bill Payment Inquiries">Bill Payment Inquiries</option>
                                                        <option value="1">Branches</option>
                                                        <option value="2">Customer Care</option>
                                                        <option value="3">News & Media</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-236.png" alt=""/></div>
                                                    <label>Message</label>
                                                    <textarea name="message" placeholder="Message goes here"></textarea>
                                                </div>
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn" name="submit-form"><span>Send Your Message</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="id_two">
                                <div className="form-inner">
                                    <form method="post" action="sendemail.php" id="contact-form2">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-221.png" alt=""/></div>
                                                    <label>Your Name</label>
                                                    <input type="text" name="username" placeholder="Enter name here" required/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-222.png" alt=""/></div>
                                                    <label>Email</label>
                                                    <input type="email" name="email" placeholder="Email address Two" required/>
                                                </div>
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-223.png" alt=""/></div>
                                                    <label>Phone</label>
                                                    <input type="text" name="phone" placeholder="Phone number Two" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Reason for Contact</label>
                                                    <div className="select-box">
                                                        <select className="wide">
                                                        <option data-display="Bill Payment Inquiries">Bill Payment Inquiries</option>
                                                        <option value="1">Branches</option>
                                                        <option value="2">Customer Care</option>
                                                        <option value="3">News & Media</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-236.png" alt=""/></div>
                                                    <label>Message</label>
                                                    <textarea name="message" placeholder="Message goes here"></textarea>
                                                </div>
                                                <div className="form-group message-btn">
                                                    <button type="submit" className="theme-btn" name="submit-form"><span>Send Your Message</span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="support-section sec-pad">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">Customer Care</span>
                        <h2>Connect with Customer Care</h2>
                    </div>
                    <div className="inner-container">
                        <div className="table-outer">
                            <table>
                                <thead className="cart-header">
                                    <tr>
                                        <th>Services</th>
                                        <th>Contact Details</th>
                                    </tr>    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><h5>General Query/Complaint</h5></td>
                                        <td><span><Link href="tel:844123456789">+844 123 4567 89</Link> (Toll Free)</span><span><Link href="mailto:customercare@example.com">customercare@example.com</Link></span></td>
                                    </tr>
                                    <tr>
                                        <td><h5>Credit Card</h5></td>
                                        <td><span><Link href="tel:844789012345">+844 789 0123 45</Link></span><span><Link href="mailto:creditcard@example.com">creditcard@example.com</Link></span></td>
                                    </tr>
                                </tbody>    
                            </table>
                            <div className="more-text centred">
                                <h5><i className="flaticon-sparkle"></i>Have Questions? Check Our <Link href="/faq">Faq’s</Link> Page.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}