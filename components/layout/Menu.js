import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul className="navigation clearfix">
                <li><Link href="/">Home</Link>
                    {/* <ul>
                        <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                        <li><Link href="/index-4">Home Page 04</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"><Link href="#">Services</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Accounts</Link>
                            <ul>
                                <li><Link href="/account">All Accounts</Link></li>
                                <li><Link href="/account-details">Savings Account</Link></li>
                                <li><Link href="/account-details-2">Current Account</Link></li>
                                <li><Link href="/account-details-3">Family 360º</Link></li>
                                <li><Link href="/account-details-4">Senior Citizen</Link></li>
                                <li><Link href="/account-details-5">Demat Account</Link></li>
                                <li><Link href="/account-details-6">Business Account</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Investments</Link>
                            <ul>
                                <li><Link href="/investments-details">Trade FX</Link></li>
                                <li><Link href="/investments-details-2">Multi Currency a/c</Link></li>
                                <li><Link href="/investments-details-3">Mutual Funds</Link></li>
                                <li><Link href="/investments-details-4">Insurance</Link></li>
                                <li><Link href="/investments-details-5">Tax-Deferred Investment</Link></li>
                                <li><Link href="/investments-details-6">Investment Advisory</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Cards</Link>
                            <ul>
                                <li><Link href="/cards">All Cards</Link></li>
                                <li><Link href="/card-details">Platinum Card</Link></li>
                                <li><Link href="/card-details-2">Millinnia Card</Link></li>
                                <li><Link href="/card-details-3">Money Back Card</Link></li>
                                <li><Link href="/card-details-4">Easy EMI Card</Link></li>
                                <li><Link href="/card-details-5">Dinners Club Privilege</Link></li>
                                <li><Link href="/card-details-6">Titanium Times</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown"><Link href="#">About</Link>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li className="dropdown"><Link href="#">Leadership</Link>
                            <ul>
                                <li><Link href="/team">Leadership</Link></li>
                                <li><Link href="/team-details">Leadership Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown"><Link href="#">Careers</Link>
                            <ul>
                                <li><Link href="/careers">Careers</Link></li>
                                <li><Link href="/career-details">Career Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/faq">Faq’s</Link></li>
                        <li><Link href="/testimonial">Testimonials</Link></li>
                        {/* <li><Link href="/error">404</Link></li> */}
                    </ul>
                </li>
                <li ><Link href="/blog">Blog</Link>
                    {/* <ul>
                        <li><Link href="/blog">Grid View 01</Link></li>
                        <li><Link href="/blog-2">Grid View 02</Link></li>
                        <li><Link href="/blog-3">List View 01</Link></li>
                        <li><Link href="/blog-4">List View 02</Link></li>
                        <li><Link href="/blog-details">Single Post</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"><Link href="#">Apply Now</Link>
                    <ul>
                        <li className="dropdown"><Link href="#">Loans</Link>
                            <ul>
                                <li><Link href="/loans-1">Home Loan</Link></li>
                                <li><Link href="/loans-2">Personal Loan</Link></li>
                                <li><Link href="/loans-3">Vehicle Loan</Link></li>
                                <li><Link href="/loans-4">Education Loan</Link></li>
                                <li><Link href="/loans-5">Gold Loan</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/cards-2">Credit Card</Link></li>
                        <li><Link href="/cards-3">Debit Card</Link></li>
                    </ul>
                </li> 
                <li><Link href="/contact">Get In Touch</Link></li>
            </ul>
        </>
    )
}
