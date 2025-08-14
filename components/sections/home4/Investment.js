
import Link from "next/link"

export default function Investment() {

  return (
    <>

        <section className="investment-section">
            <div className="bg-color bg-color-5"></div>
            <div className="outer-container p_relative pl_40 pr_40">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 investment-block">
                        <div className="investment-block-one">
                            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                            <figure className="image-box"><img src="assets/images/resource/investment-1.png" alt=""/></figure>
                            <div className="inner-box">
                                <div className="sec-title light">
                                    <span className="sub-title">Investment</span>
                                    <h2>Zero in on investments that fit you</h2>
                                </div>
                                <p>Personalized investment options tailored to your financial goals.</p>
                                <Link href="/index-4" className="theme-btn"><span>Expert Guidance</span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 investment-block">
                        <div className="investment-block-two">
                            <div className="inner-box">
                                <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-27.png)" }}></div>
                                <figure className="image-box"><img src="assets/images/resource/investment-2.png" alt=""/></figure>
                                <span className="big-text">Flexibank</span>
                                <h4>Watch Video <br />for Protecting Your Identity.</h4>
                                <div className="video-btn centred">
                                    <Link href="https://www.youtube.com/watch?v=nfP5N9Yc72A&amp;t=28s" className="lightbox-image video-btn" data-caption=""><img src="assets/images/icons/icon-131.png" alt=""/></Link> 
                                </div>
                                <div className="download-box">
                                    <button type="button"><img src="assets/images/icons/icon-132.png" alt=""/></button>
                                    <h5>Download <br />for Easy Access</h5>
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
