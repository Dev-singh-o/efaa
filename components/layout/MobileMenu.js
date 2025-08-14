'use client'
import Link from "next/link"
import { useState } from "react"
export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }) {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
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
        <>
            <div className="mobile-menu">
                <div className="menu-backdrop" onClick={handleMobileMenu} />
                <div className="close-btn" onClick={handleMobileMenu}><span className="fas fa-times" /></div>
                <nav className="menu-box">
                    <div className="nav-logo"><Link href="/"><img src="/assets/images/mobile_logo.png" alt="" /></Link></div>
                    <div className="menu-outer">
                        <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                            <ul className="navigation clearfix">
                                <li ><Link href="/">Home</Link>
                                    {/* <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                        <li><Link href="/">Home Page 01</Link></li>
                                        <li><Link href="/index-2">Home Page 02</Link></li>
                                        <li><Link href="/index-3">Home Page 03</Link></li>
                                        <li><Link href="/index-4">Home Page 04</Link></li>
                                    </ul> */}
                                    {/* <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div> */}
                                </li>
                                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/account">All Accounts</Link></li>
                                        <li><Link href="/account-details">Savings Account</Link></li>
                                        <li><Link href="/account-details-2">Current Account</Link></li>
                                        <li><Link href="/account-details-3">Family 360º</Link></li>
                                        <li><Link href="/account-details-4">Senior Citizen</Link></li>
                                        <li><Link href="/account-details-5">Demat Account</Link></li>
                                        <li><Link href="/account-details-6">Business Account</Link></li>
                                        <li><Link href="/investments-details">Trade FX</Link></li>
                                        <li><Link href="/investments-details-2">Multi Currency a/c</Link></li>
                                        <li><Link href="/investments-details-3">Mutual Funds</Link></li>
                                        <li><Link href="/investments-details-4">Insurance</Link></li>
                                        <li><Link href="/investments-details-5">Tax-Deferred Investment</Link></li>
                                        <li><Link href="/investments-details-6">Investment Advisory</Link></li>
                                        <li><Link href="/cards">All Cards</Link></li>
                                        <li><Link href="/card-details">Platinum Card</Link></li>
                                        <li><Link href="/card-details-2">Millinnia Card</Link></li>
                                        <li><Link href="/card-details-3">Money Back Card</Link></li>
                                        <li><Link href="/card-details-4">Easy EMI Card</Link></li>
                                        <li><Link href="/card-details-5">Dinners Club Privilege</Link></li>
                                        <li><Link href="/card-details-6">Titanium Times</Link></li>
                                    </ul>
                                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">About</Link>
                                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/team">Leadership</Link></li>
                                        <li><Link href="/team-details">Leadership Details</Link></li>
                                        <li><Link href="/careers">Careers</Link></li>
                                        <li><Link href="/career-details">Career Details</Link></li>
                                        <li><Link href="/faq">Faq’s</Link></li>
                                        <li><Link href="/testimonial">Testimonials</Link></li>
                                        {/* <li><Link href="/error">404</Link></li> */}
                                    </ul>
                                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li ><Link href="/blog">Blog</Link>
                                    {/* <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                        <li><Link href="/blog">Grid View 01</Link></li>
                                        <li><Link href="/blog-2">Grid View 02</Link></li>
                                        <li><Link href="/blog-3">List View 01</Link></li>
                                        <li><Link href="/blog-4">List View 02</Link></li>
                                        <li><Link href="/blog-details">Single Post</Link></li>
                                    </ul>
                                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div> */}
                                </li>
                                <li className={isActive.key == 5 ? "dropdown current" : "dropdown"}><Link href="/#">Apply Now</Link>
                                    <ul style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                        <li><Link href="/loans-1">Home Loan</Link></li>
                                        <li><Link href="/loans-2">Personal Loan</Link></li>
                                        <li><Link href="/loans-3">Vehicle Loan</Link></li>
                                        <li><Link href="/loans-4">Education Loan</Link></li>
                                        <li><Link href="/loans-5">Gold Loan</Link></li>
                                        <li><Link href="/cards-2">Credit Card</Link></li>
                                        <li><Link href="/cards-3">Debit Card</Link></li>
                                    </ul>
                                    <div className={isActive.key == 5 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(5)}><span className="fa fa-angle-right" /></div>
                                </li>
                                <li><Link href="/contact">Get In Touch</Link></li>
                            </ul>
                        </div>

                    </div>
                    
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Chicago 12, Melborne City, USA</li>
                            <li><Link href="tel:+8801682648101">+88 01682648101</Link></li>
                            <li><Link href="mailto:info@example.com">info@example.com</Link></li>
                        </ul>
                    </div>

                    <div className="social-links">
                        <ul className="clearfix">
                            <li><Link href="/#"><span className="fab fa-twitter" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-facebook-square" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-pinterest-p" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-instagram" /></Link></li>
                            <li><Link href="/#"><span className="fab fa-youtube" /></Link></li>
                        </ul>
                    </div>
                </nav>
            </div>{/* End Mobile Menu */}
            <div className="nav-overlay" style={{ display: `${isSidebar ? "block" : "none"}` }} onClick={handleSidebar} />

          

        </>
    )
}
