'use client'
import { useState } from "react"
import Link from "next/link"

export default function Custom_Banking() {

    const [activeTab, setActiveTab] = useState('#tab1');
    const [subActiveTab, setsubActiveTab] = useState('#tab1');

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };
    const handleSubTabClick = (tabId) => {
        setsubActiveTab(tabId);
    };

    return (
        <> 

        <section className="custom-banking home-3 alternat-2 sec-pad bg-color-1">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
            <div className="auto-container">
                <div className="title-box">
                    <div className="sec-title light">
                        <span className="sub-title">Custom Banking</span>
                        <h2>Banking For Your Needs</h2>
                    </div>
                    <div className="support-box">
                        <h5>Get Support</h5>
                        <div className="phone-box">
                            <div className="icon-box"><img src="assets/images/icons/icon-105.png" alt=""/></div>
                            <Link href="tel:49556789091">+49 55 678 90 & 91</Link>
                            <span>9.00 am to 7.00 pm</span>
                        </div>
                    </div>
                </div>
                <div className="tabs-box">
                    <figure className="support-image"><img src="assets/images/resource/men-1.png" alt=""/></figure>
                    <div className="tab-btn-one">
                        <ul className="tab-btns tab-buttons clearfix">
                            <li className={`tab-btn ${activeTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab1')}>Business</li>
                            <li className={`tab-btn ${activeTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab2')}>Individual</li>
                        </ul>
                    </div>
                    <div className="tabs-content">
                        <div  className={`tab ${activeTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                            <div className="tabs-box-2">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 col-sm-12 button-column">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2">
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab1')}>
                                                    <h4>Savings Accounts</h4>
                                                    <p>High interest...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab2')}>
                                                    <h4>Consumer Loans</h4>
                                                    <p>Low collateral...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab3' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab3')}>
                                                    <h4>Credit Cards</h4>
                                                    <p>No fees...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab4' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab4')}>
                                                    <h4>Advisory Services</h4>
                                                    <p>Financial advice...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab5' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab5')}>
                                                    <h4>Insurance Products</h4>
                                                    <p>Fits your needs...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab6' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab6')}>
                                                    <h4>Savings Account</h4>
                                                    <p>Banking Products</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="tabs-content-2">
                                            <div  className={`tab-2 ${subActiveTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Savings Account</h4>
                                                        <h2>Invest in Your Future, <br />Start Saving.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Consumer Loans</h4>
                                                        <h2>Flexibank in Your Future, Consumer Loans.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab3' ? 'active-tab' : ''}`} id="tab3">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Credit Cards</h4>
                                                        <h2>Flexibank in Your Future, <br />Credit Cards.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab4' ? 'active-tab' : ''}`} id="tab4">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Advisory Services</h4>
                                                        <h2>Flexibank is Provided, Advisory Services.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab5' ? 'active-tab' : ''}`} id="tab5">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Insurance Products</h4>
                                                        <h2>Flexibank is Protected, Your life Insurance.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab6' ? 'active-tab' : ''}`} id="tab6">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Banking Products</h4>
                                                        <h2>Flexibank is Protected, Your Savings Account.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
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
                        <div  className={`tab ${activeTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                            <div className="tabs-box-2">
                                <div className="row clearfix">
                                    <div className="col-lg-4 col-md-12 col-sm-12 button-column">
                                        <div className="tab-btn-two">
                                            <ul className="tab-btns tab-buttons-2">
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab1')}>
                                                    <h4>Savings Accounts</h4>
                                                    <p>High interest...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab4' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab4')}>
                                                    <h4>Advisory Services</h4>
                                                    <p>Financial advice...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab5' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab5')}>
                                                    <h4>Insurance Products</h4>
                                                    <p>Fits your needs...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab6' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab6')}>
                                                    <h4>Savings Account</h4>
                                                    <p>Banking Products</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab2')}>
                                                    <h4>Consumer Loans</h4>
                                                    <p>Low collateral...</p>
                                                </li>
                                                <li className={`tab-btn-2 ${subActiveTab === '#tab3' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab3')}>
                                                    <h4>Credit Cards</h4>
                                                    <p>No fees...</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                        <div className="tabs-content-2">
                                            <div  className={`tab-2 ${subActiveTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Savings Account</h4>
                                                        <h2>Invest in Your Future, <br />Start Saving.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Consumer Loans</h4>
                                                        <h2>Flexibank in Your Future, Consumer Loans.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab3' ? 'active-tab' : ''}`} id="tab3">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Credit Cards</h4>
                                                        <h2>Flexibank in Your Future, <br />Credit Cards.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab4' ? 'active-tab' : ''}`} id="tab4">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Advisory Services</h4>
                                                        <h2>Flexibank is Provided, Advisory Services.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab5' ? 'active-tab' : ''}`} id="tab5">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Insurance Products</h4>
                                                        <h2>Flexibank is Protected, Your life Insurance.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div  className={`tab-2 ${subActiveTab === '#tab6' ? 'active-tab' : ''}`} id="tab6">
                                                <div className="content-box">
                                                    <div className="title-box">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                                        <h4>Banking Products</h4>
                                                        <h2>Flexibank is Protected, Your Savings Account.</h2>
                                                    </div>
                                                    <div className="inner-box">
                                                        <p>Every pleasure is to be welcomed and every pain avoided duty or the obligations of business our power of choice is untrammelled and when nothing prevents.</p>
                                                        <div className="row clearfix">
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>3.2k</h2>
                                                                    <p>Live Savings Accounts</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>2.6% in lfy</div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                                                <div className="single-item">
                                                                    <h2>$2b</h2>
                                                                    <p>In Customer Savings</p>
                                                                    <div className="growth-box"><img src="assets/images/icons/icon-22.png" alt=""/>4.5% in lfy</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="btn-box"><Link href="/" className="theme-btn"><span>Explore Options</span></Link></div>
                                                        <div className="form-inner">
                                                            <h3>Digital Opening</h3>
                                                            <form method="post" action="/">
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                                                    <input type="text" name="name" placeholder="Full Name" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-24.png" alt=""/></div>
                                                                    <input type="email" name="email" placeholder="Email" required/>
                                                                </div>
                                                                <div className="form-group">
                                                                    <div className="icon-box"><img src="assets/images/icons/icon-25.png" alt=""/></div>
                                                                    <input type="text" name="phone" placeholder="Ph num" required/>
                                                                </div>
                                                                <div className="form-group message-btn">
                                                                    <button type="submit"><i className="flaticon-right-arrow"></i>Proceed to Details</button>
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
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
