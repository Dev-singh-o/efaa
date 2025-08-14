
import Link from "next/link"

export default function Banner() {

  return (
    <>

        <section className="banner-style-four centred">
            <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="upper-content mb_90">
                        <h4>Welcome to Flexibank</h4>
                        <h2>Every Solution, One <br />Trusted Bank</h2>
                        <p>Every pleasure is to be welcomed and every pain avoided <br />duty or the obligations of business.</p>
                        <Link href="/index-4" className="theme-btn"><span>Open Your Account</span></Link>
                    </div>
                    <div className="lower-content">
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h4>Download Our Mobile App</h4>
                                    <ul className="download-list">
                                        <li><Link href="/index-4"><i className="flaticon-play-store"></i></Link></li>
                                        <li><Link href="/index-4"><i className="flaticon-apple"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h4>Join With 20k+ Account Holder</h4>
                                    <ul className="clients-list">
                                        <li><img src="assets/images/resource/clients-1.png" alt=""/></li>
                                        <li><img src="assets/images/resource/clients-2.png" alt=""/></li>
                                        <li><img src="assets/images/resource/clients-3.png" alt=""/></li>
                                        <li><span>+</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <h4>Top Discounts with Our Cards</h4>
                                    <ul className="icon-list">
                                        <li><img src="assets/images/icons/icon-74.png" alt=""/></li>
                                        <li><img src="assets/images/icons/icon-75.png" alt=""/></li>
                                        <li><img src="assets/images/icons/icon-76.png" alt=""/></li>
                                        <li><span>+</span></li>
                                    </ul>
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
