
'use client'
import Link from "next/link"
import CustomSelect from '../../elements/CustomSelect'

const options = [
    { value: "1", label: "Us - En" },
    { value: "2", label: "Uk - En" },
    { value: "3", label: "Canada - En" },
    { value: "4", label: "France - Fr" },
    { value: "5", label: "Italy - It" },
    { value: "6", label: "Turky - Tu" },
  ]


export default function Footer3({ handleSelectChange }) {
    return (
        <>           
            
        <footer className="footer-style-three">
            <div className="footer-top">
                <div className="auto-container">
                    <div className="top-inner">
                        <div className="left-column">
                            <figure className="footer-logo p_relative pr_40 mr_40"><a href="/index-3"><img src="assets/images/logo-5.png" alt=""/></a></figure>
                            <ul className="social-links">
                                <li><Link href="/index-3"><i className="flaticon-facebook"></i><span>Facebook</span></Link></li>
                                <li><Link href="/index-3"><i className="flaticon-instagram-logo"></i><span>Instagram</span></Link></li>
                                <li><Link href="/index-3"><i className="flaticon-youtube"></i><span>Youtube</span></Link></li>
                                <li><Link href="/index-3"><i className="flaticon-vimeo"></i><span>Vimeo</span></Link></li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <div className="language-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-122.png" alt=""/></div>
                                <div className="custom-select select-box">
                                    <CustomSelect options={options} onChange={handleSelectChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget-section p_relative">
                <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget support-widget">
                                <div className="widget-content">
                                    <div className="icon-box"><img src="assets/images/icons/icon-123.png" alt=""/></div>
                                    <h3>Looking for <br />More Information?</h3>
                                    <p>Here’s Your Solution.</p>
                                    <Link href="/index-3"><i className="flaticon-right-arrow"></i><span>Send Queries</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget support-widget">
                                <div className="widget-content">
                                    <div className="icon-box"><img src="assets/images/icons/icon-124.png" alt=""/></div>
                                    <h3>File Your <br />Complaint Here</h3>
                                    <p>Get Quick Resolution.</p>
                                    <Link href="/index-3"><i className="flaticon-right-arrow"></i><span>Submit Here</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget links-widget">
                                <div className="widget-title">
                                    <h3>Our Services</h3>
                                </div>
                                <div className="widget-content">
                                    <ul className="links-list clearfix">
                                        <li><Link href="/index-3"><i className="flaticon-next"></i>Account</Link></li>
                                        <li><Link href="/index-3"><i className="flaticon-next"></i>Lending</Link></li>
                                        <li><Link href="/index-3"><i className="flaticon-next"></i>Digital Banking</Link></li>
                                        <li><Link href="/index-3"><i className="flaticon-next"></i>Investment</Link></li>
                                        <li><Link href="/index-3"><i className="flaticon-next"></i>Business</Link></li>
                                        <li><Link href="/index-3"><i className="flaticon-next"></i>Specialized</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                            <div className="footer-widget post-widget">
                                <div className="widget-title">
                                    <h3>Recent Posts</h3>
                                </div>
                                <div className="widget-content">
                                    <div className="post">
                                        <h4><Link href="/blog-details">How to Improve Your Credit Score Tips & Tricks.</Link></h4>
                                        <h5><img src="assets/images/icons/icon-125.png" alt=""/>5 Mins Read</h5>
                                    </div>
                                    <div className="post">
                                        <h4><Link href="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h4>
                                        <h5><img src="assets/images/icons/icon-125.png" alt=""/>6 Mins Read</h5>
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
                        <div className="copyright"><p>Copyrights <a href="/index-3">&copy; {new Date().getFullYear()} Flexibank</a>. All Rights Reserved.</p></div>
                        <ul className="footer-nav">
                            <li><Link href="/index-3">Privacy Policy</Link></li>
                            <li><Link href="/index-3">Terms & Conditions</Link></li>
                            <li><Link href="/index-3">Disclaimer.</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>


        </>
    )
}
