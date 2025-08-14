'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Card_Details_Four() {

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
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Easy EMI Card">

            <section className="card-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                            <div className="cards-sidebar pt_110 pb_120">
                                <div className="category-widget mb_30">
                                    <div className="widget-title">
                                        <h3>Card Types</h3>
                                    </div>
                                    <ul className="category-list clearfix">
                                        <li><Link href="/card-details">Platinum Card</Link></li>
                                        <li><Link href="/card-details-2">Millinnia Card</Link></li>
                                        <li><Link href="/card-details-3">Money Back Card</Link></li>
                                        <li><Link href="/card-details-4" className="current">Easy EMI Card</Link></li>
                                        <li><Link href="/card-details-5">Dinners Club Privilege</Link></li>
                                        <li><Link href="/card-details-6">Titanium Times</Link></li>
                                    </ul>
                                </div>
                                <div className="contact-widget">
                                    <div className="inner-box" style={{ backgroundImage: "url(assets/images/resource/sidebar-1.jpg)" }}>
                                        <h3>Now, Get Your Credit Card Online</h3>
                                        <span className="text">Approve with in 24 Hrs.</span>
                                        <Link href="/contact" className="theme-btn"><span>Apply Here</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 content-side">
                            <div className="card-details-content pt_110 pb_120">
                                <div className="content-one">
                                    <div className="text-box mb_45">
                                        <h6>Know About</h6>
                                        <h2>Easy EMI Credit Card</h2>
                                        <p>Fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain cases are perfectly simple and easy to distinguish. In a free hour, when our power of the claims off duty or the obligations business.</p>
                                        <p>Through weakness of will which is the same as saying through shrinking from toil and pain cases are perfectly simple and easy to distinguish in a free hour.</p>
                                    </div>
                                    <div className="image-box">
                                        <div className="row clearfix">
                                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                <figure className="image"><img src="assets/images/resource/card-6.jpg" alt=""/></figure>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                <figure className="image"><img src="assets/images/resource/card-7.jpg" alt=""/></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-two mb_10">
                                    <div className="text-box mb_35">
                                        <h2>Features</h2>
                                        <p>Through weakness of will which is the same as saying through shrinking from to and pain cases are perfectly simple and easy to distinguish in a free hour.</p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><img src="assets/images/icons/icon-195.png" alt=""/></div>
                                                <h3>Welcome Bonus</h3>
                                                <p>Holds these matters principles selection right some rejects.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><img src="assets/images/icons/icon-195.png" alt=""/></div>
                                                <h3>Accelerated Rewards</h3>
                                                <p>Business will frequently occur that pleasure have to be repudiated.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><img src="assets/images/icons/icon-195.png" alt=""/></div>
                                                <h3>Fuel Surcharge Waiver</h3>
                                                <p>The wise man therefore always holds these principle of selection.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><img src="assets/images/icons/icon-195.png" alt=""/></div>
                                                <h3>Low Interest Rates</h3>
                                                <p>Holds these matters principles selection right some rejects.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><img src="assets/images/icons/icon-195.png" alt=""/></div>
                                                <h3>Cashback Offers</h3>
                                                <p>Business will frequently occur that pleasure have to be repudiated.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                            <div className="single-item">
                                                <div className="icon-box"><img src="assets/images/icons/icon-195.png" alt=""/></div>
                                                <h3>24/7 Support</h3>
                                                <p>The wise man therefore always holds these principle of selection.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-three mb_30">
                                    <div className="text-box mb_30">
                                        <h2>Exciting Offers for You</h2>
                                        <p>Toil and pain cases are perfectly simple and easy to distinguish a free hour.</p>
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 deals-block">
                                            <div className="deals-block-one">
                                                <div className="inner-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-74.png" alt=""/></div>
                                                        <span className="category">Medical</span>
                                                        <p>Expire On: 25th Oct’24</p>
                                                    </div>
                                                    <h3>Get 10% cashback on trust care medical.</h3>
                                                    <div className="lower-box">
                                                        <div className="link-box"><Link href="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                                        <div className="share-box">
                                                            <div className="share-text"><img src="assets/images/icons/icon-79.png" alt=""/><span>Share</span></div>
                                                            <ul className="social-links">
                                                                <li><Link href="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                                                <li><Link href="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                                                <li><Link href="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                                                <li><Link href="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 deals-block">
                                            <div className="deals-block-one">
                                                <div className="inner-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-75.png" alt=""/></div>
                                                        <span className="category">Restaurant</span>
                                                        <p>Expire On: 31st Oct’24</p>
                                                    </div>
                                                    <h3>Get 15% discount on classic cuisine restaurant.</h3>
                                                    <div className="lower-box">
                                                        <div className="link-box"><Link href="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                                        <div className="share-box">
                                                            <div className="share-text"><img src="assets/images/icons/icon-79.png" alt=""/><span>Share</span></div>
                                                            <ul className="social-links">
                                                                <li><Link href="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                                                <li><Link href="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                                                <li><Link href="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                                                <li><Link href="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content-four">
                                    <ul className="accordion-box">
                                        <li className="accordion block">
                                            <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                                <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                                <h4>Eligibility to Apply</h4>
                                            </div>
                                            <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <h5>To apply for a Credit Card,</h5>
                                                    <ul className="list-item mb_35">
                                                        <li>You will need to be minimum 18 years of age</li>
                                                        <li>For salary person net annual income of Rs 4.5 lakh or more</li>
                                                        <li>Consider a credit score between 750 and 900 to be adequate for a Credit Card.</li>
                                                        <li>Location is also another factor </li>
                                                    </ul>
                                                    <Link href="/card-details" className="theme-btn"><span>Check Eligibility</span></Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="accordion block">
                                            <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                                <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                                <h4>Fees & Charges</h4>
                                            </div>
                                            <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                                <div className="content">
                                                    <h5>To apply for a Credit Card,</h5>
                                                    <ul className="list-item mb_35">
                                                        <li>You will need to be minimum 18 years of age</li>
                                                        <li>For salary person net annual income of Rs 4.5 lakh or more</li>
                                                        <li>Consider a credit score between 750 and 900 to be adequate for a Credit Card.</li>
                                                        <li>Location is also another factor </li>
                                                    </ul>
                                                    <Link href="/card-details" className="theme-btn"><span>Check Eligibility</span></Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
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