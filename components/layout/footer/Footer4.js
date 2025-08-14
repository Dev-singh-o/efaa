import Link from "next/link"

export default function Footer4() {
    return (
        <>           
            
        <footer className="footer-style-four">
            <div className="widget-section">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 footer-column">
                            <div className="footer-widget contact-widget p_relative">
                                <div className="light-icon"><img src="assets/images/icons/icon-160.png" alt=""/></div>
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="info-list clearfix">
                                        <li>
                                            <div className="icon-box"><img src="assets/images/icons/icon-155.png" alt=""/></div>
                                            <Link href="tel:08008961234">0800 896 1234</Link>
                                        </li>
                                        <li>
                                            <div className="icon-box"><img src="assets/images/icons/icon-156.png" alt=""/></div>
                                            <Link href="mailto:getsupport@example.com">getsupport@example.com</Link>
                                        </li>
                                        <li>
                                            <div className="icon-box"><img src="assets/images/icons/icon-157.png" alt=""/></div>
                                            14 Hackescher Markt, Mitte 10115, <br />Berlin, German.
                                        </li>
                                        <li className="link"><Link href="https://www.google.com/maps.html" target="_blank"><i className="flaticon-right-arrow"></i>View On Map</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 footer-column">
                            <div className="footer-widget subscribe-widget">
                                <div className="widget-content p_relative">
                                    <figure className="image-box"><img src="assets/images/resource/carton-1.png" alt=""/></figure>
                                    <span className="big-text">Subscribe</span>
                                    <div className="form-inner">
                                        <form method="post" action="content.html">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-158.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email address..." required/>
                                                <button type="submit" className="theme-btn"><span>Subscribe</span></button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="lower-text">
                                        <div className="icon-box"><img src="assets/images/icons/icon-159.png" alt=""/></div>
                                        <p>Relevant Updates, No Spam.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="auto-container">
                    <div className="bottom-inner">
                        <div className="footer-logo">
                            <figure className="logo p_relative pr_25 mr_25"><a href="index-4.html"><img src="assets/images/logo-8.png" alt=""/></a></figure>
                            <p>&copy; {new Date().getFullYear()}</p>
                        </div>
                        <ul className="footer-menu">
                            <li><Link href="/index">About Us</Link></li>
                            <li><Link href="/index">Awards</Link></li>
                            <li><Link href="/index">Support</Link></li>
                            <li><Link href="/index">Products</Link></li>
                            <li><Link href="/index">News</Link></li>
                            <li><Link href="/index">Career</Link></li>
                            <li><Link href="/index">Investors</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


        </>
    )
}
