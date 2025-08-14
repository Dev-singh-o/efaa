
import Link from "next/link"

export default function Locker() {

  return (
    <>

        <section className="locker-facility home-4 pt_120 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content-box">
                            <div className="sec-title">
                                <span className="sub-title">Locker Facility</span>
                                <h2>Ultimate Locker Solution for Valuables</h2>
                            </div>
                            <div className="text-box">
                                <p>Frequently occur that pleasures have to repudiated and annoyances accepte the wise man always holds.</p>
                                <h5><i className="flaticon-sparkle"></i>Affordable Security,Check our Locker <Link href="/pricing">Pricing.</Link></h5>
                            </div>
                            <div className="inner-box mb_50">
                                <h6>Key Features</h6>
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-153.png" alt=""/></div>
                                            <p>Available in Different Sizes.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 single-column">
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-153.png" alt=""/></div>
                                            <p>Affordable Rental Plans.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-box">
                                <Link href="/" className="theme-btn"><span>Locker Request</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image-box">
                            <figure className="image"><img src="assets/images/resource/locker-1.jpg" alt=""/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
