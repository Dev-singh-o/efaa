'use client'
import { useState } from "react"
import Link from "next/link"

export default function Calculator() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

  return (
    <>
        <section className="calculator-section alternat-2 pt_120 pb_120">
            <figure className="image-layer"><img src="assets/images/resource/men-2.png" alt=""/></figure>
            <span className="big-text">Calculation <br />Instant</span>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="tabs-box">
                        <div className="tab-btn-box">
                            <div className="tab-btns tab-buttons clearfix">
                                <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><h4>Home Loan</h4></div>
                                <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><h4>Vehicle Loan</h4></div>
                                <div onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><h4>Personal Loan</h4></div>
                                <div onClick={() => handleOnClick(4)} className={activeIndex === 4 ? "tab-btn active-btn" : "tab-btn"}><h4>Education Loan</h4></div>
                                <div onClick={() => handleOnClick(5)} className={activeIndex === 5 ? "tab-btn active-btn" : "tab-btn"}><h4>Mortgage Loan</h4></div>
                            </div>
                        </div>
                        <div className="tabs-content">
                            <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                <div className="row clearfix">
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="content-box">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 left-column">
                                                    <div className="left-content mr_30">
                                                        <div className="sec-title">
                                                            <span className="sub-title">Home Calculator</span>
                                                            <h2>Flexible <br />Online Loan Calculator</h2>
                                                            <p>Estimate your loan payments quickly & easily with our calculator.</p>
                                                        </div>
                                                        <div className="lower-text">
                                                            <div className="icon-box"><img src="assets/images/icons/icon-114.png" alt=""/></div>
                                                            <h5>Loan Questions? Check Our <Link href="/faq">Faq’s</Link> Page.</h5>
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
                                                                    <div className="bar-inner count-bar" style={{ width: '33.333%' }}></div>
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
                                                <div className="icon-box"><img src="assets/images/icons/icon-115.png" alt=""/></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Apply Online</span></Link></div>
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
                            <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
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
                                                            <div className="icon-box"><img src="assets/images/icons/icon-114.png" alt=""/></div>
                                                            <h5>Loan Questions? Check Our <Link href="/faq">Faq’s</Link> Page.</h5>
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
                                                                    <div className="bar-inner count-bar" style={{ width: '33.333%' }}></div>
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
                                                <div className="icon-box"><img src="assets/images/icons/icon-115.png" alt=""/></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Apply Online</span></Link></div>
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
                            <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
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
                                                            <div className="icon-box"><img src="assets/images/icons/icon-114.png" alt=""/></div>
                                                            <h5>Loan Questions? Check Our <Link href="/faq">Faq’s</Link> Page.</h5>
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
                                                                    <div className="bar-inner count-bar" style={{ width: '33.333%' }}></div>
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
                                                <div className="icon-box"><img src="assets/images/icons/icon-115.png" alt=""/></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Apply Online</span></Link></div>
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
                            <div className={activeIndex === 4 ? "tab active-tab" : "tab"}>
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
                                                            <div className="icon-box"><img src="assets/images/icons/icon-114.png" alt=""/></div>
                                                            <h5>Loan Questions? Check Our <Link href="/faq">Faq’s</Link> Page.</h5>
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
                                                                    <div className="bar-inner count-bar" style={{ width: '33.333%' }}></div>
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
                                                <div className="icon-box"><img src="assets/images/icons/icon-115.png" alt=""/></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Apply Online</span></Link></div>
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
                            <div className={activeIndex === 5 ? "tab active-tab" : "tab"}>
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
                                                            <div className="icon-box"><img src="assets/images/icons/icon-114.png" alt=""/></div>
                                                            <h5>Loan Questions? Check Our <Link href="/faq">Faq’s</Link> Page.</h5>
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
                                                                    <div className="bar-inner count-bar" style={{ width: '33.333%' }}></div>
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
                                                <div className="icon-box"><img src="assets/images/icons/icon-115.png" alt=""/></div>
                                                <h5>Monthly EMI</h5>
                                                <h3>$4,340.00</h3>
                                                <div className="btn-box"><Link href="/" className="theme-btn"><span>Apply Online</span></Link></div>
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
    </>
  )
}
