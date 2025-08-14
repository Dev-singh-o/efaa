'use client'
import Layout from "@/components/layout/Layout"
import Testimonial from "@/components/sections/home3/Testimonial"
import Clients from "@/components/sections/home3/Clients"
import "app/favicon.ico"
import Link from "next/link"

export default function Investments_Details_Four() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Insurance">

            <section className="secure-growth bg-color-1 sec-pad-3">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Trade FX</Link></h3>
                                    <p>Perfectly simple easy distinguish to the claims of duty...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-1.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Multi Currency a/c</Link></h3>
                                    <p>Duty through weaknes will which is same as saying through...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-2.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-19.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Mutual Funds</Link></h3>
                                    <p>Choice is when nothing prevents our being able to do...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-3.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-20.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Insurance</Link></h3>
                                    <p>Choice is when nothing prevents our being able to do...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-4.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-188.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Tax-Deferred Investment</Link></h3>
                                    <p>Perfectly simple easy distinguish to the claims of duty...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-5.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-189.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 growth-block">
                            <div className="growth-block-one">
                                <div className="inner-box">
                                    <h3><Link href="/">Investment Advisory</Link></h3>
                                    <p>Duty through weaknes will which is same as saying through...</p>
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/resource/growth-6.jpg" alt=""/></figure>
                                        <div className="icon-box"><img src="assets/images/icons/icon-190.png" alt=""/></div>
                                    </div>
                                    <div className="link-box"><Link href="/"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clients/>
            <Testimonial/>

            </Layout>
        </div>
    )
}