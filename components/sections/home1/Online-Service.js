import Link from "next/link"


export default function Online_Service() {
    return (
        <> 

        <section className="online-service">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="row d_flex">
                        <div className="col-lg-6 col-md-12 col-sm-12 left-column">
                            <div className="left-content">
                                <div className="info-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                    <h4>Mobile App</h4>
                                    <p>Instant Banking, Instant Peace.</p>
                                </div>
                                <div className="btn-box">
                                    <Link href="/" className="play-store"><i className="flaticon-play-store"></i><span>Google Play</span></Link>
                                    <Link href="/" className="apple-store"><i className="flaticon-apple"></i><span>App Store</span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 right-column">
                            <div className="right-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                        <figure className="image-box"><img src="assets/images/resource/online-1.jpg" alt=""/></figure>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 content-column">
                                        <div className="content-box">
                                            <h4>Online Services</h4>
                                            <ul className="service-list clearfix">
                                                <li><Link href="/service-details">Net Banking<i className="flaticon-right-arrow"></i></Link></li>
                                                <li><Link href="/service-details">Mobile Banking<i className="flaticon-right-arrow"></i></Link></li>
                                                <li><Link href="/service-details">Make Payment<i className="flaticon-right-arrow"></i></Link></li>
                                            </ul>
                                            <div className="link-box">
                                                <Link href="/service"><span>+</span>More Services</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
