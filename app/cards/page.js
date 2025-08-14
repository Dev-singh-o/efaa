'use client'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Cards() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="All Cards">

            <section className="cards-section pt_120 pb_110">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="upper-content">
                            <figure className="card-image p_absolute t_0 r_0"><img src="assets/images/resource/card-1.png" alt=""/></figure>
                            <div className="content-box">
                                <div className="sec-title">
                                    <h2>More than just <br />a card-It’s freedom...</h2>
                                    <p>Welcomed and every pain avoidedduty or the obligations of business our power of choice.</p>
                                </div>
                                <ul className="list-style-one clearfix">
                                    <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Exclusive discounts <br />and offers</li>
                                    <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Advanced security <br />features</li>
                                    <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Generous Rewards <br />Program</li>
                                    <li><div className="icon-box"><img src="assets/images/icons/icon-16.png" alt=""/></div>Flexible Credit <br />Limits</li>
                                </ul>
                            </div>
                        </div>
                        <div className="lower-content">
                            <div className="more-text">
                                <h5><i className="flaticon-sparkle"></i>Unlock Exclusive Rewards, <Link href="index.html">Apply Now</Link> and Elevate your Everyday Spending.</h5>
                            </div>
                            <div className="btn-box">
                                <Link href="/cards" className="theme-btn"><span>Enquire Now</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="cards-style-two pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                            <div className="cards-sidebar">
                                <div className="category-widget mb_30">
                                    <div className="widget-title">
                                        <h3>Card Types</h3>
                                    </div>
                                    <ul className="category-list clearfix">
                                        <li><Link href="/cards">Business</Link></li>
                                        <li><Link href="/cards">Cashback</Link></li>
                                        <li><Link href="/cards">Low Interest</Link></li>
                                        <li><Link href="/cards">Rewards</Link></li>
                                        <li><Link href="/cards">Secured</Link></li>
                                        <li><Link href="/cards">Travel & Hotel</Link></li>
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
                            <div className="content-box">
                                <div className="cards-block-one">
                                    <div className="inner-box">
                                        <div className="cards-column">
                                            <h3><Link href="/card-details">Platinum Credit Card</Link></h3>
                                            <figure className="image-box"><img src="assets/images/resource/cards-1.jpg" alt=""/></figure>
                                            <div className="btn-box">
                                                <Link href="/card-details">Apply Now</Link>
                                                <Link href="/card-details">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="content-column">
                                            <p>Explore a new world of rewards with the Platinum Credit Card.</p>
                                            <h4>Features & Benefits</h4>
                                            <ul className="list-item">
                                                <li><img src="assets/images/icons/icon-191.png" alt=""/>Zero Joining and Annual Fees</li>
                                                <li><img src="assets/images/icons/icon-192.png" alt=""/>2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                                <li><img src="assets/images/icons/icon-193.png" alt=""/>Multi Rewards & Lifestyle Benefits</li>
                                                <li><img src="assets/images/icons/icon-194.png" alt=""/>5X TAT Miles on Travel</li>
                                            </ul>
                                            <div className="check-box-two">
                                                <input className="check" type="checkbox" id="checkbox1"/>
                                                <label for="checkbox1">Add to Compare</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cards-block-one">
                                    <div className="inner-box">
                                        <div className="cards-column">
                                            <h3><Link href="/card-details-2">Millinnia Credit Card</Link></h3>
                                            <figure className="image-box"><img src="assets/images/resource/cards-2.jpg" alt=""/></figure>
                                            <div className="btn-box">
                                                <Link href="/card-details-2">Apply Now</Link>
                                                <Link href="/card-details-2">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="content-column">
                                            <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                            <h4>Features & Benefits</h4>
                                            <ul className="list-item">
                                                <li><img src="assets/images/icons/icon-191.png" alt=""/>Zero Joining and Annual Fees</li>
                                                <li><img src="assets/images/icons/icon-192.png" alt=""/>2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                                <li><img src="assets/images/icons/icon-193.png" alt=""/>Multi Rewards & Lifestyle Benefits</li>
                                                <li><img src="assets/images/icons/icon-194.png" alt=""/>5X TAT Miles on Travel</li>
                                            </ul>
                                            <div className="check-box-two">
                                                <input className="check" type="checkbox" id="checkbox2"/>
                                                <label for="checkbox2">Add to Compare</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cards-block-one">
                                    <div className="inner-box">
                                        <div className="cards-column">
                                            <h3><Link href="/card-details-3">Money Back Credit Card</Link></h3>
                                            <figure className="image-box"><img src="assets/images/resource/cards-3.jpg" alt=""/></figure>
                                            <div className="btn-box">
                                                <Link href="/card-details-3">Apply Now</Link>
                                                <Link href="/card-details-3">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="content-column">
                                            <p>Explore a new world of rewards with the Platinum Credit Card.</p>
                                            <h4>Features & Benefits</h4>
                                            <ul className="list-item">
                                                <li><img src="assets/images/icons/icon-191.png" alt=""/>Zero Joining and Annual Fees</li>
                                                <li><img src="assets/images/icons/icon-192.png" alt=""/>2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                                <li><img src="assets/images/icons/icon-193.png" alt=""/>Multi Rewards & Lifestyle Benefits</li>
                                                <li><img src="assets/images/icons/icon-194.png" alt=""/>5X TAT Miles on Travel</li>
                                            </ul>
                                            <div className="check-box-two">
                                                <input className="check" type="checkbox" id="checkbox3"/>
                                                <label for="checkbox3">Add to Compare</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cards-block-one">
                                    <div className="inner-box">
                                        <div className="cards-column">
                                            <h3><Link href="/card-details-4">Easy EMI Credit Card</Link></h3>
                                            <figure className="image-box"><img src="assets/images/resource/cards-4.jpg" alt=""/></figure>
                                            <div className="btn-box">
                                                <Link href="/card-details-4">Apply Now</Link>
                                                <Link href="/card-details-4">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="content-column">
                                            <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                            <h4>Features & Benefits</h4>
                                            <ul className="list-item">
                                                <li><img src="assets/images/icons/icon-191.png" alt=""/>Zero Joining and Annual Fees</li>
                                                <li><img src="assets/images/icons/icon-192.png" alt=""/>2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                                <li><img src="assets/images/icons/icon-193.png" alt=""/>Multi Rewards & Lifestyle Benefits</li>
                                                <li><img src="assets/images/icons/icon-194.png" alt=""/>5X TAT Miles on Travel</li>
                                            </ul>
                                            <div className="check-box-two">
                                                <input className="check" type="checkbox" id="checkbox4"/>
                                                <label for="checkbox4">Add to Compare</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cards-block-one">
                                    <div className="inner-box">
                                        <div className="cards-column">
                                            <h3><Link href="/card-details-5">Diners Club Privilege Card</Link></h3>
                                            <figure className="image-box"><img src="assets/images/resource/cards-5.jpg" alt=""/></figure>
                                            <div className="btn-box">
                                                <Link href="/card-details-5">Apply Now</Link>
                                                <Link href="/card-details-5">Read More</Link>
                                            </div>
                                        </div>
                                        <div className="content-column">
                                            <p>Business it will frequently occur that pleasures have to be repudiated.</p>
                                            <h4>Features & Benefits</h4>
                                            <ul className="list-item">
                                                <li><img src="assets/images/icons/icon-191.png" alt=""/>Zero Joining and Annual Fees</li>
                                                <li><img src="assets/images/icons/icon-192.png" alt=""/>2% Fuel Surcharge waiver HPCL Petrol Pumps</li>
                                                <li><img src="assets/images/icons/icon-193.png" alt=""/>Multi Rewards & Lifestyle Benefits</li>
                                                <li><img src="assets/images/icons/icon-194.png" alt=""/>5X TAT Miles on Travel</li>
                                            </ul>
                                            <div className="check-box-two">
                                                <input className="check" type="checkbox" id="checkbox5"/>
                                                <label for="checkbox5">Add to Compare</label>
                                            </div>
                                        </div>
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