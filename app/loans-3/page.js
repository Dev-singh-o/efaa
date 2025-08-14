'use client'
import { useState } from "react"
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Loans_Three() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Vehicle Loan">


            <section className="cards-section pt_120">
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


            <section className="working-section alternat-2 centred">
                <div className="auto-container">
                    <div className="sec-title">
                        <span className="sub-title">How It’s Work</span>
                        <h2>Start Banking With in 5 Mins</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="inner-box">
                                    <span className="count-text">01</span>
                                    <h3>Verify Customer</h3>
                                    <p>Nor again is there anyone who loves or pursues desire obtain pain all itself.</p>
                                    <div className="icon-box"><img src="assets/images/icons/icon-184.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="inner-box">
                                    <span className="count-text">02</span>
                                    <h3>Documentation</h3>
                                    <p>One rejects, dislikes avoids pleasure itself because it is who do not know.</p>
                                    <div className="icon-box"><img src="assets/images/icons/icon-185.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="inner-box">
                                    <span className="count-text">03</span>
                                    <h3>A/c Verification</h3>
                                    <p>Ever undertakes laborious physical exercise except in all advantages.</p>
                                    <div className="icon-box"><img src="assets/images/icons/icon-186.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                            <div className="working-block-one">
                                <div className="inner-box">
                                    <span className="count-text">04</span>
                                    <h3>Start Banking</h3>
                                    <p>Foresee the pain & trouble that are bound ensue equal blame belongs fail.</p>
                                    <div className="icon-box"><img src="assets/images/icons/icon-187.png" alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="more-text centred">
                        <h5><i className="flaticon-sparkle"></i>Your Financial Future Starts Here, <Link href="index-2.html">Start Your Account.</Link></h5>
                    </div>
                </div>
            </section>


            <section className="appointment-section pt_120 pb_120">
                <div className="bg-layer" style={{ backgroundImage: "url(assets/images/background/appointment-bg.jpg)" }}></div>
                <span className="big-text">Appointment <br/>Make an</span>
                <div className="auto-container">
                    <div className="appointment-form">
                        <form action="loans-1.html" method="post">
                            <div className="row clearfix">
                                <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                    <div className="form-group">
                                        <div className="icon-box"><img src="assets/images/icons/icon-221.png" alt=""/></div>
                                        <label>Your Name</label>
                                        <input type="text" name="name" placeholder="Enter name here" required/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                    <div className="form-group">
                                        <div className="icon-box"><img src="assets/images/icons/icon-222.png" alt=""/></div>
                                        <label>Email</label>
                                        <input type="email" name="email" placeholder="Email address" required/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                    <div className="form-group">
                                        <div className="icon-box"><img src="assets/images/icons/icon-223.png" alt=""/></div>
                                        <label>Phone</label>
                                        <input type="text" name="phone" placeholder="Phone number" required/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                    <div className="form-group">
                                        <div className="icon-box"><img src="assets/images/icons/icon-224.png" alt=""/></div>
                                        <label>Date</label>
                                        <input type="text" name="date" placeholder="Date" id="datepicker"/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 single-column">
                                    <div className="form-group">
                                        <div className="icon-box"><img src="assets/images/icons/icon-225.png" alt=""/></div>
                                        <label>Time</label>
                                        <input type="text" name="time" placeholder="Time"/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                    <div className="form-group">
                                        <div className="icon-box"><img src="assets/images/icons/icon-226.png" alt=""/></div>
                                        <label>Address</label>
                                        <input type="text" name="name" placeholder="Your address" required/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 single-column">
                                    <div className="message-btn pt_7">
                                        <button type="submit" className="theme-btn"><span>Send Your Request</span></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>


            <section className="calculator-section pt_120 pb_120">
                <figure className="image-layer"><img src="assets/images/resource/men-2.png" alt=""/></figure>
                <span className="big-text">Calculation <br />Instant</span>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="tabs-box">
                            <div className="tab-btn-box">
                                <div className="tab-btns tab-buttons clearfix">
                                    <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "active-btn tab-btn" : "tab-btn"}><h4>Home Loan</h4></div>
                                    <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "active-btn tab-btn" : "tab-btn"}><h4>Vehicle Loan</h4></div>
                                    <div onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "active-btn tab-btn" : "tab-btn"}><h4>Personal Loan</h4></div>
                                    <div onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "active-btn tab-btn" : "tab-btn"}><h4>Education Loan</h4></div>
                                    <div onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "active-btn tab-btn" : "tab-btn"}><h4>Mortgage Loan</h4></div>
                                </div>
                            </div>
                            <div className="tabs-content">
                                <div className={activeIndex === 1 ? "tab active-tab" : "tab"} id="id_one">
                                    <div className="row clearfix">
                                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                            <div className="content-box">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                        <div className="left-content mr_30">
                                                            <div className="sec-title">
                                                                <span className="sub-title">Home Loan</span>
                                                                <h2>Flexible <br />Online Loan Calculator</h2>
                                                                <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                            </div>
                                                            <div className="lower-text">
                                                                <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                                                <h5>Loan Questions? Check Our <Link href="faq.html">Faq’s</Link> Page.</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                        <div className="right-content">
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Amount</h5>
                                                                    <h6>$500000</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>$50,000</span>
                                                                        <span>$2.5 million</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '20%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Term (Years)</h5>
                                                                    <h6>20</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>20 Years</span>
                                                                        <span>40 Years</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Interest Rate</h5>
                                                                    <h6>8.5%</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>6%</span>
                                                                        <span>18%</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '33%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                            <div className="amount-box">
                                                <div className="emi-box centred">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt=""/></div>
                                                    <h5>Monthly EMI</h5>
                                                    <h3>$4,340.00</h3>
                                                    <div className="btn-box"><Link href="index.html" className="theme-btn"><span>Apply Online</span></Link></div>
                                                </div>
                                                <div className="interest-amount">
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 2 ? "tab active-tab" : "tab"} id="id_two">
                                    <div className="row clearfix">
                                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                            <div className="content-box">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                        <div className="left-content mr_30">
                                                            <div className="sec-title">
                                                                <span className="sub-title">Vehicle Loan</span>
                                                                <h2>Flexible <br />Online Loan Calculator</h2>
                                                                <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                            </div>
                                                            <div className="lower-text">
                                                                <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                                                <h5>Loan Questions? Check Our <Link href="faq.html">Faq’s</Link> Page.</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                        <div className="right-content">
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Amount</h5>
                                                                    <h6>$500000</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>$50,000</span>
                                                                        <span>$2.5 million</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '20%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Term (Years)</h5>
                                                                    <h6>20</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>20 Years</span>
                                                                        <span>40 Years</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Interest Rate</h5>
                                                                    <h6>8.5%</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>6%</span>
                                                                        <span>18%</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '33%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                            <div className="amount-box">
                                                <div className="emi-box centred">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt=""/></div>
                                                    <h5>Monthly EMI</h5>
                                                    <h3>$4,340.00</h3>
                                                    <div className="btn-box"><Link href="index.html" className="theme-btn"><span>Apply Online</span></Link></div>
                                                </div>
                                                <div className="interest-amount">
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 3 ? "tab active-tab" : "tab"} id="id_three">
                                    <div className="row clearfix">
                                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                            <div className="content-box">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                        <div className="left-content mr_30">
                                                            <div className="sec-title">
                                                                <span className="sub-title">Personal Loan</span>
                                                                <h2>Flexible <br />Online Loan Calculator</h2>
                                                                <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                            </div>
                                                            <div className="lower-text">
                                                                <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                                                <h5>Loan Questions? Check Our <Link href="faq.html">Faq’s</Link> Page.</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                        <div className="right-content">
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Amount</h5>
                                                                    <h6>$500000</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>$50,000</span>
                                                                        <span>$2.5 million</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '20%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Term (Years)</h5>
                                                                    <h6>20</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>20 Years</span>
                                                                        <span>40 Years</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Interest Rate</h5>
                                                                    <h6>8.5%</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>6%</span>
                                                                        <span>18%</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '33%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                            <div className="amount-box">
                                                <div className="emi-box centred">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt=""/></div>
                                                    <h5>Monthly EMI</h5>
                                                    <h3>$4,340.00</h3>
                                                    <div className="btn-box"><Link href="index.html" className="theme-btn"><span>Apply Online</span></Link></div>
                                                </div>
                                                <div className="interest-amount">
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 4 ? "tab active-tab" : "tab"} id="id_four">
                                    <div className="row clearfix">
                                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                            <div className="content-box">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                        <div className="left-content mr_30">
                                                            <div className="sec-title">
                                                                <span className="sub-title">Education Loan</span>
                                                                <h2>Flexible <br />Online Loan Calculator</h2>
                                                                <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                            </div>
                                                            <div className="lower-text">
                                                                <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                                                <h5>Loan Questions? Check Our <Link href="faq.html">Faq’s</Link> Page.</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                        <div className="right-content">
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Amount</h5>
                                                                    <h6>$500000</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>$50,000</span>
                                                                        <span>$2.5 million</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '20%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Term (Years)</h5>
                                                                    <h6>20</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>20 Years</span>
                                                                        <span>40 Years</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Interest Rate</h5>
                                                                    <h6>8.5%</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>6%</span>
                                                                        <span>18%</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '33%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                            <div className="amount-box">
                                                <div className="emi-box centred">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt=""/></div>
                                                    <h5>Monthly EMI</h5>
                                                    <h3>$4,340.00</h3>
                                                    <div className="btn-box"><Link href="index.html" className="theme-btn"><span>Apply Online</span></Link></div>
                                                </div>
                                                <div className="interest-amount">
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={activeIndex === 5 ? "tab active-tab" : "tab"} id="id_five">
                                    <div className="row clearfix">
                                        <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                            <div className="content-box">
                                                <div className="row clearfix">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                        <div className="left-content mr_30">
                                                            <div className="sec-title">
                                                                <span className="sub-title">Mortgage Loan</span>
                                                                <h2>Flexible <br />Online Loan Calculator</h2>
                                                                <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                            </div>
                                                            <div className="lower-text">
                                                                <div className="icon-box"><img src="assets/images/icons/icon-31.png" alt=""/></div>
                                                                <h5>Loan Questions? Check Our <Link href="faq.html">Faq’s</Link> Page.</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 right-column">
                                                        <div className="right-content">
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Amount</h5>
                                                                    <h6>$500000</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>$50,000</span>
                                                                        <span>$2.5 million</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '20%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Loan Term (Years)</h5>
                                                                    <h6>20</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>20 Years</span>
                                                                        <span>40 Years</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '50%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="progress-block-one">
                                                                <div className="title-box">
                                                                    <h5>Interest Rate</h5>
                                                                    <h6>8.5%</h6>
                                                                </div>
                                                                <div className="inner-box">
                                                                    <div className="text-box">
                                                                        <span>6%</span>
                                                                        <span>18%</span>
                                                                    </div>
                                                                    <div className="bar">
                                                                        <div className="bar-inner count-bar" style={{ width: '33%' }}></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-12 col-sm-12 amount-column">
                                            <div className="amount-box">
                                                <div className="emi-box centred">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-32.png" alt=""/></div>
                                                    <h5>Monthly EMI</h5>
                                                    <h3>$4,340.00</h3>
                                                    <div className="btn-box"><Link href="index.html" className="theme-btn"><span>Apply Online</span></Link></div>
                                                </div>
                                                <div className="interest-amount">
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                    <div className="single-amount">
                                                        <div className="icon-box"><i className="flaticon-sparkle"></i></div>
                                                        <h5>Interest Amount</h5>
                                                        <span>$541,388</span>
                                                    </div>
                                                </div>
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