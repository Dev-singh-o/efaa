'use client'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Team() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Leadership">

            <section className="team-section sec-pad-2">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="sub-title">Team Members</span>
                        <h2>Leadership & Executive Team</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                        <ul className="social-links">
                                            <li><Link href="/team"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details.html">Bret Ke Danielle</Link></h3>
                                        <span className="designation">Ceo & Founder</span>
                                        <form method="post" action="/team">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email me" required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                        <ul className="social-links">
                                            <li><Link href="/team"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details.html">Ian Hudson</Link></h3>
                                        <span className="designation">Cheif Operating Officer</span>
                                        <form method="post" action="/team">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email me" required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                        <ul className="social-links">
                                            <li><Link href="/team"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details.html">Lillian Stella</Link></h3>
                                        <span className="designation">Cheif Financial Officer</span>
                                        <form method="post" action="/team">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email me" required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                        <ul className="social-links">
                                            <li><Link href="/team"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details.html">Crise Jordan</Link></h3>
                                        <span className="designation">Corporate Marketing</span>
                                        <form method="post" action="/team">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email me" required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-5.jpg" alt=""/></figure>
                                        <ul className="social-links">
                                            <li><Link href="/team"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details.html">Rose Taylor</Link></h3>
                                        <span className="designation">Head of Corporate</span>
                                        <form method="post" action="/team">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email me" required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-6.jpg" alt=""/></figure>
                                        <ul className="social-links">
                                            <li><Link href="/team"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details.html">Sara Rosi</Link></h3>
                                        <span className="designation">Chief Investment Officer</span>
                                        <form method="post" action="/team">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email me" required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-7.jpg" alt=""/></figure>
                                        <ul className="social-links">
                                            <li><Link href="/team"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details.html">Rafeel Nidal</Link></h3>
                                        <span className="designation">Head of Retail Banking</span>
                                        <form method="post" action="/team">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email me" required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                            <div className="team-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/team/team-8.jpg" alt=""/></figure>
                                        <ul className="social-links">
                                            <li><Link href="/team"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-twitter"></i></Link></li>
                                            <li><Link href="/team"><i className="flaticon-instagram-logo"></i></Link></li>
                                        </ul>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="team-details.html">Vanis Williams</Link></h3>
                                        <span className="designation">Chief Technology Officer</span>
                                        <form method="post" action="/team">
                                            <div className="form-group">
                                                <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                                <input type="email" name="email" placeholder="Email me" required/>
                                                <button type="submit"><i className="flaticon-right-arrow"></i></button>
                                            </div>
                                        </form>
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