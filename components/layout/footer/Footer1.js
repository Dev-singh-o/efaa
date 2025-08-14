import Link from "next/link"

export default function Footer1() {
    return (
        <>
        
        <footer className="main-footer">
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget mr_100">
                                <div className="certified-box">
                                    <div className="image-box"><img src="assets/images/icons/certified-1.png" alt=""/></div>
                                    <h4>Certified for Quality Management Excellence.</h4>
                                    <span>2000-2001</span>
                                </div>
                                <div className="widget-content">
                                    <div className="schedule-inner">
                                        <div className="contact-info">
                                            <h3>Enquiry</h3>
                                            <ul className="list-item clearfix">
                                                <li><Link href="tel:08008961234">0800 896 1234</Link> <span>(Toll Free) <br />Personal</span></li>
                                                <li><Link href="tel:496912345678">+49 69 1234 5678</Link> <br /><span>Corporate</span></li>
                                            </ul>
                                        </div>
                                        <div className="opening-hour">
                                            <h3>Banking Hours</h3>
                                            <ul className="list-item clearfix">
                                                <li>9.00am to 5.00pm <br /><span>Mon - Friday</span></li>
                                                <li>9.00am to 2.00pm <br /><span>Satday</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="support-box">
                                        <div className="icon-box"><img src="assets/images/icons/icon-35.png" alt=""/></div>
                                        <h4><Link href="mailto:getsupport@flexibank.com">getsupport@flexibank.com</Link></h4>
                                        <p>Send your queries.</p>
                                        <div className="link-box"><Link href="/contact"><i className="flaticon-right-arrow"></i></Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget ml_75">
                                <div className="widget-title">
                                    <h3>Our Bank</h3>
                                </div>
                                <div className="widget-content mb_25">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/about">About Us<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/">Awards & Recognition<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/team">Leadership<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/blog">News & Media<i className="flaticon-next"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="widget-title">
                                    <h3>Support</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/contact">Branches<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/cards">ATM’s<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/contact">Customer Care<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/faq">Faq’s<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/contact">Contact Us<i className="flaticon-next"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget ml_90">
                                <div className="widget-title">
                                    <h3>Products</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/account">Accounts<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/">Fixed Deposits<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/cards">Credit Cards<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/loans-1">Loans<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/">Locker<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/cards">Money Transfer<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/investments-details-6">Investments<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/investments-details-4">Insurance<i className="flaticon-next"></i></Link></li>
                                        <li><Link href="/cards">Payments<i className="flaticon-next"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-top">
                        <ul className="list-item">
                            <li>
                                <div className="icon-box"><img src="assets/images/icons/icon-38.png" alt=""/></div>
                                <h4><Link href="/">Branches & ATMs</Link></h4>
                            </li>
                            <li>
                                <div className="icon-box"><img src="assets/images/icons/icon-39.png" alt=""/></div>
                                <h4><Link href="/">Complaint Registration</Link></h4>
                            </li>
                            <li>
                                <div className="icon-box"><img src="assets/images/icons/icon-40.png" alt=""/></div>
                                <h4><button type="button">Download Forms</button></h4>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-inner">
                        <div className="social-box">
                            <span>Follow Us On</span>
                            <ul className="social-links">
                                <li><Link href="/"><i className="flaticon-facebook"></i></Link></li>
                                <li><Link href="/"><i className="flaticon-twitter"></i></Link></li>
                                <li><Link href="/"><i className="flaticon-instagram-logo"></i></Link></li>
                                <li><Link href="/"><i className="flaticon-youtube"></i></Link></li>
                                <li><Link href="/"><i className="flaticon-vimeo"></i></Link></li>
                            </ul>
                        </div>
                        <div className="footer-logo">
                            <figure className="logo"><Link href="/"><img src="assets/images/new_logo.png" alt=""/></Link></figure>
                            <div className="copyright"><p>copyrights <Link href="/">&copy; {new Date().getFullYear()} Mobrilz.</Link> All Rights Reserved.</p></div>
                        </div>
                        <ul className="footer-nav clearfix">
                            <li><Link href="/">Privacy Policy</Link></li>
                            <li><Link href="/">Terms & Conditions</Link></li>
                            <li><Link href="/">Disclaimer.</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

        </>
    )
}
