
import Link from "next/link"

export default function Deals() {

  return (
    <>

        <section className="deals-section sec-pad-2 bg-color-2">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Exclusive Offers</span>
                    <h2>Special Deals Just for You</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-74.png" alt=""/></div>
                                    <span className="category">Medical</span>
                                    <p>Expire On: 25th Oct’24</p>
                                </div>
                                <h3>Get 10% cashback on trust care medical.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><a href="/index-2"><i className="flaticon-right-arrow"></i>Read More</a></div>
                                    <div className="share-box">
                                        <div className="share-text"><img src="assets/images/icons/icon-79.png" alt=""/><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link href="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-75.png" alt=""/></div>
                                    <span className="category">Restaurant</span>
                                    <p>Expire On: 31st Oct’24</p>
                                </div>
                                <h3>Get 15% discount on classic cuisine restaurant.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><a href="/index-2"><i className="flaticon-right-arrow"></i>Read More</a></div>
                                    <div className="share-box">
                                        <div className="share-text"><img src="assets/images/icons/icon-79.png" alt=""/><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link href="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-76.png" alt=""/></div>
                                    <span className="category">Electronics</span>
                                    <p>Expire On: 31st Oct’24</p>
                                </div>
                                <h3>Tech zone electronics offers 20% discount.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link href="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img src="assets/images/icons/icon-79.png" alt=""/><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link href="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 deals-block">
                        <div className="deals-block-one">
                            <div className="inner-box">
                                <div className="title-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-77.png" alt=""/></div>
                                    <span className="category">Movies</span>
                                    <p>Expire On: 10th Nov’24</p>
                                </div>
                                <h3>Book Your ticket in starlight cinema & get 5% off.</h3>
                                <div className="lower-box">
                                    <div className="link-box"><Link href="/index-2"><i className="flaticon-right-arrow"></i>Read More</Link></div>
                                    <div className="share-box">
                                        <div className="share-text"><img src="assets/images/icons/icon-79.png" alt=""/><span>Share</span></div>
                                        <ul className="social-links">
                                            <li><Link href="/index-2"><i className="flaticon-facebook"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-instagram-logo"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-youtube"></i></Link></li>
                                            <li><Link href="/index-2"><i className="flaticon-vimeo"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 newsletter-block">
                        <div className="newsletter-inner">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                            <div className="icon-box"><img src="assets/images/icons/icon-78.png" alt=""/></div>
                            <div className="newsletter-content">
                                <h3>Newsletter</h3>
                                <p>Subscribe to get news, offers & other updates.</p>
                                <form method="post" action="contact.html">
                                    <div className="form-group">
                                        <div className="icon"><img src="assets/images/icons/icon-80.png" alt=""/></div>
                                        <input type="email" name="email" placeholder="Email address..." required/>
                                        <button type="submit"><i className="flaticon-right-arrow"></i><span>Subscribe</span></button>
                                    </div>
                                </form>
                                <div className="lower-text"><img src="assets/images/icons/icon-81.png" alt=""/>Relevant Updates, No Spam.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
