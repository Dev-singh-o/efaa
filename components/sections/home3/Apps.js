
import Link from "next/link"

export default function Apps() {

  return (
    <>

        <section className="apps-section sec-pad">
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
                <div className="pattern-2" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
            </div>
            <figure className="image-layer"><img src="assets/images/resource/apps-2.png" alt=""/></figure>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                        <div className="content-box p_relative pl_200">
                            <span className="big-text">anytime <br />bank</span>
                            <div className="inner-box">
                                <div className="sec-title light">
                                    <span className="sub-title">Mobile App</span>
                                    <h2>Download Our Mobile App</h2>
                                    <p>Our mobile app for secure, convenient banking anytime, anywhere.</p>
                                </div>
                                <div className="download-btn">
                                    <Link href="/index-2"><i className="flaticon-play-store"></i><span>Google Play</span></Link>
                                    <Link href="/index-2"><i className="flaticon-apple"></i><span>App Store</span></Link>
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
