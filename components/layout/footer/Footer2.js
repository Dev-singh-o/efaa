'use client'
import { useState } from "react"
import Link from "next/link"

export default function Footer2() {

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
            
            <footer className="footer-style-two">
            <div className="footer-top">
                <div className="auto-container">
                    <div className="top-inner">
                        <ul className="option-list">
                            <li><img src="assets/images/icons/icon-84.png" alt=""/><Link href="/index-2">Bill Payment</Link></li>
                            <li><img src="assets/images/icons/icon-84.png" alt=""/><Link href="/index-2">Safe Deposit Locker</Link></li>
                            <li><img src="assets/images/icons/icon-84.png" alt=""/><Link href="/index-2">Loan Calculator</Link></li>
                        </ul>
                        <div className="support-box chat-toggler">
                            <div className="icon-box"><img src="assets/images/icons/icon-85.png" alt=""/></div>
                            <h5>Live Chat with <br />Experts.</h5>
                            <figure className="image-box"><img src="assets/images/resource/chat-1.png" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Our Bank</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/index-2">About Us <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Awards <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Leadership <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">News <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Career <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Investors <i className="flaticon-next"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Support</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/index-2">Branches <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">ATM’s <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Customer Care <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Appointment <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Faq’s <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Contact Us <i className="flaticon-next"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Services</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/index-2">Account <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Lending <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Digital Banking <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Investment <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Business <i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/index-2">Specialized <i className="flaticon-next"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget">
                                <div className="widget-title">
                                    <h3>Find Nearest</h3>
                                </div>
                                <div className="tabs-box">
                                    <div className="tab-btns tab-buttons mb_25">
                                        <div className={`tab-btn ${activeTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab1')}>Branches</div>
                                        <div className={`tab-btn ${activeTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleTabClick('#tab2')}>ATM’s</div>
                                    </div>
                                    <div className="tabs-content">
                                        <div  className={`tab ${activeTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                            <div className="inner-box">
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-89.png" alt=""/></div>
                                                    <input type="text" name="location" placeholder="Current Location"/>
                                                </div>
                                                <p>14 Hackescher Markt, Mitte 10115, Berlin, German.</p>
                                                <div className="link-box"><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</Link></div>
                                            </div>
                                        </div>
                                        <div  className={`tab ${activeTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                           <div className="inner-box">
                                                <div className="form-group">
                                                    <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                                    <input type="text" name="location" placeholder="Old Location"/>
                                                </div>
                                                <p>14 Hackescher Markt, Mitte 10115, Berlin, German.</p>
                                                <div className="link-box"><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="contact-info-box">
                        <div className="tabs-box">
                            <div className="tab-btns tab-buttons clearfix">
                                <div className={`tab-btn ${subActiveTab === '#tab1' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab1')}><h3>Personal</h3></div>
                                <div className={`tab-btn ${subActiveTab === '#tab2' ? 'active-btn' : ''}`} onClick={() => handleSubTabClick('#tab2')}><h3>Business</h3></div>
                            </div>
                            <div className="tabs-content">
                                <div  className={`tab ${subActiveTab === '#tab1' ? 'active-tab' : ''}`} id="tab1">
                                    <div className="inner-box">
                                        <ul className="info-list">
                                            <li>
                                                <div className="icon-box"><img src="assets/images/icons/icon-90.png" alt=""/></div>
                                                <Link href="tel:08008961234">0800 896 1234 <span>(Toll Free)</span></Link>
                                            </li>
                                            <li>
                                                <div className="icon-box"><img src="assets/images/icons/icon-91.png" alt=""/></div>
                                                <Link href="mailto:getsupport@example.com">getsupport@example.com</Link>
                                            </li>
                                            <li>
                                                <div className="icon-box"><img src="assets/images/icons/icon-92.png" alt=""/></div>
                                                <Link href="tel:49691234567">+49 69 1234 567 <span>(Whats App)</span></Link>
                                            </li>
                                        </ul>
                                        <div className="btn-box"><Link href="/faq"><img src="assets/images/icons/icon-93.png" alt=""/><span>Read Faq’s</span></Link></div>
                                    </div>
                                </div>
                                <div  className={`tab ${subActiveTab === '#tab2' ? 'active-tab' : ''}`} id="tab2">
                                   <div className="inner-box">
                                        <ul className="info-list">
                                            <li>
                                                <div className="icon-box"><img src="assets/images/icons/icon-90.png" alt=""/></div>
                                                <Link href="tel:08008961234">0800 896 1235 <span>(Toll Free)</span></Link>
                                            </li>
                                            <li>
                                                <div className="icon-box"><img src="assets/images/icons/icon-91.png" alt=""/></div>
                                                <Link href="mailto:getsupport@example.com">getsupport@example.com</Link>
                                            </li>
                                            <li>
                                                <div className="icon-box"><img src="assets/images/icons/icon-92.png" alt=""/></div>
                                                <Link href="tel:49691234567">+49 69 1234 568 <span>(Whats App)</span></Link>
                                            </li>
                                        </ul>
                                        <div className="btn-box"><Link href="/faq"><img src="assets/images/icons/icon-93.png" alt=""/><span>Read Faq’s</span></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-inner">
                        <div className="copyright"><p>Copyrights &copy; {new Date().getFullYear()} <a href="/index-2">Flexibank</a>. All Rights Reserved.</p></div>
                        <ul className="footer-nav">
                            <li><Link href="/index-2">Privacy Policy</Link></li>
                            <li><Link href="/index-2">Terms & Conditions</Link></li>
                            <li><Link href="/index-2">Disclaimer.</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


        </>
    )
}
