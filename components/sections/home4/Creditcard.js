'use client'
import { useState } from "react"
import Link from "next/link"

export default function Creditcard() {

    const [activeIndex, setActiveIndex] = useState(1)
        const handleOnClick = (index) => {
            setActiveIndex(index)
        }

  return (
    <>


        <section className="creditcard-section home-4 sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-31.png)" }}></div>
            <span className="big-text">Spending <br />Secure</span>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 card-column">
                        <div className="card-inner">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-30.png)" }}></div>
                            <figure className="card-box"><img src="assets/images/icons/card-3.png" alt=""/></figure>
                            <span className="highlights-one">Cashback Up to: 25%</span>
                            <span className="highlights-two">Average APR: 5.50%</span>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title light">
                                <span className="sub-title">Credit Card</span>
                                <h2>Discover Our <br />Range of Credit Cards</h2>
                            </div>
                            <div className="tabs-box">
                                <div className="tab-btn-box pb_20">
                                    <div className="tab-btns tab-buttons clearfix">
                                        <div onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><img src="assets/images/icons/icon-33.png" alt=""/><h5>Rewards Cards</h5></div>
                                        <div onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><img src="assets/images/icons/icon-33.png" alt=""/><h5>Cashback Cards</h5></div>
                                        <div onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><img src="assets/images/icons/icon-33.png" alt=""/><h5>Travel Cards</h5></div>
                                    </div>
                                </div>
                                <div className="tabs-content">
                                    <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                        <div className="inner-box">
                                            <div className="text-box">
                                                <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters.</p>
                                                <Link href="/"><i className="flaticon-right-arrow"></i>Explore Cards</Link>
                                            </div>
                                            <div className="form-inner">
                                                <h4>Get Your Perfect Card Now!...</h4>
                                                <form method="post" action="/">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-120.png" alt=""/></div>
                                                        <input type="text" name="phone" placeholder="Ph Num..." required/>
                                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Submit</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                        <div className="inner-box">
                                            <div className="text-box">
                                                <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters.</p>
                                                <Link href="/"><i className="flaticon-right-arrow"></i>Explore Cards</Link>
                                            </div>
                                            <div className="form-inner">
                                                <h4>Get Your Perfect Card Now!...</h4>
                                                <form method="post" action="/">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-120.png" alt=""/></div>
                                                        <input type="text" name="phone" placeholder="Ph Num..." required/>
                                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Submit</span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                        <div className="inner-box">
                                            <div className="text-box">
                                                <p>Business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters.</p>
                                                <a href="/"><i className="flaticon-right-arrow"></i>Explore Cards</a>
                                            </div>
                                            <div className="form-inner">
                                                <h4>Get Your Perfect Card Now!...</h4>
                                                <form method="post" action="/">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-120.png" alt=""/></div>
                                                        <input type="text" name="phone" placeholder="Ph Num..." required/>
                                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Submit</span></button>
                                                    </div>
                                                </form>
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
