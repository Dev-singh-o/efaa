'use client'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Team_Details() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Leadership Details">

            <section className="team-details">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image-box mr_30">
                                <figure className="image"><img src="assets/images/team/team-9.jpg" alt=""/></figure>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content-box">
                                <h3>Hi, I am</h3>
                                <h2>Bret Ke Danielle</h2>
                                <span className="designation">CEO & Founder</span>
                                <p>Indignation and dislike men who are so beguiled & demoralized by charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound.</p>
                                <h3>10 Years of Experience</h3>
                                <ul className="list-item mt_15 mb_30 clearfix">
                                    <li>Demoralized by charms of pleasure of the moment</li>
                                    <li>Again is there anyone who loves or pursues</li>
                                </ul>
                                <h3>Contact Me</h3>
                                <h5><img src="assets/images/icons/icon-3.png" alt=""/><Link href="mailto:bretkedanielle@example.com">bretkedanielle@example.com</Link></h5>
                                <ul className="social-links">
                                    <li><Link href="/team-details"><i className="flaticon-facebook"></i></Link></li>
                                    <li><Link href="/team-details"><i className="flaticon-twitter"></i></Link></li>
                                    <li><Link href="/team-details"><i className="flaticon-instagram-logo"></i></Link></li>
                                    <li><Link href="/team-details"><i className="flaticon-youtube"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}