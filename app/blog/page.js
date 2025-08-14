'use client'
import Layout from "@/components/layout/Layout"
import "app/favicon.ico"
import Link from "next/link"

export default function Blog() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Grid View 01">

            <section className="news-section pt_120 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-13.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-13.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-13.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Financial Planning</h6>
                                                <h5><span>By </span><Link href="/blog-details">D.Beckham</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>21</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>5 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-14.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-14.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-14.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Credit Card</h6>
                                                <h5><span>By </span><Link href="/blog-details">Vk.Christopher</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>06</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>4 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-6.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-6.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-6.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Business Banking</h6>
                                                <h5><span>By </span><Link href="/blog-details">Z.Benjamin</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>15</h3>
                                                <h6>Jun, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">Growth Strategies for Your Small Business.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>6 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-7.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-7.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-7.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Technology</h6>
                                                <h5><span>By </span><Link href="/blog-details">L.Nathaniel</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>31</h3>
                                                <h6>May, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">Digital Payment Systems: The Future of Transactions.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>5 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-8.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-8.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-8.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Financial Planning</h6>
                                                <h5><span>By </span><Link href="/blog-details">L.D.Beckham</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>21</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>5 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-9.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-9.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-9.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Credit Card</h6>
                                                <h5><span>By </span><Link href="/blog-details">Vk.Christopher</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>06</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">Boost Gains: Best Practices for Credit Card Use.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>4 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-10.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-10.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-10.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Business Banking</h6>
                                                <h5><span>By </span><Link href="/blog-details">Z.Benjamin</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>15</h3>
                                                <h6>Jun, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">Growth Strategies for Your Small Business.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>6 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-11.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-11.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-11.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Technology</h6>
                                                <h5><span>By </span><Link href="/blog-details">L.Nathaniel</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>31</h3>
                                                <h6>May, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">Digital Payment Systems: The Future of Transactions.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>4 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                            <div className="news-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/blog-details"><img src="assets/images/news/news-12.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/blog-details"><img src="assets/images/news/news-12.jpg" alt=""/></Link></figure>
                                        <div className="view-btn"><Link href="assets/images/news/news-12.jpg" className="lightbox-image" data-fancybox="gallery"><img src="assets/images/icons/icon-87.png" alt=""/></Link></div>
                                    </div>
                                    <div className="content-box">
                                        <div className="upper-box">
                                            <div className="title-box">
                                                <h6><img src="assets/images/icons/icon-36.png" alt=""/>Financial Planning</h6>
                                                <h5><span>By </span><Link href="/blog-details">D.Beckham</Link></h5>
                                            </div>
                                            <div className="post-date align-3">
                                                <h3>21</h3>
                                                <h6>Jul, 2025</h6>
                                            </div>
                                        </div>
                                        <div className="lower-box">
                                            <h3><Link href="/blog-details">How to Improve Your Credit Score Tips and Tricks.</Link></h3>
                                            <div className="link-box">
                                                <h5><img src="assets/images/icons/icon-37.png" alt=""/>5 Mins Read</h5>
                                                <div className="link"><Link href="/blog-details"><i className="flaticon-right-arrow"></i></Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pagination-wrapper centred pt_30">
                        <ul className="pagination clearfix">
                            <li><Link href="/blog"><i className="flaticon-next"></i></Link></li>
                            <li><Link href="/blog" className="current">01</Link></li>
                            <li><Link href="/blog">02</Link></li>
                            <li><Link href="/blog">03</Link></li>
                            <li><Link href="/blog"><i className="flaticon-next"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </section>

            </Layout>
        </div>
    )
}