
import Link from "next/link"

export default function Working() {

  return (
    <>

        <section className="working-section bg-color-2 centred">
            <div className="auto-container">
                <div className="sec-title">
                    <span className="sub-title">How It’s Work</span>
                    <h2>Start Banking With in 5 Mins</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">01</span>
                                <h3>Verify Customer</h3>
                                <p>Nor again is there anyone who loves or pursues desire obtain pain all itself.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-67.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">02</span>
                                <h3>Documentation</h3>
                                <p>One rejects, dislikes avoids pleasure itself because it is who do not know.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-68.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">03</span>
                                <h3>A/c Verification</h3>
                                <p>Ever undertakes laborious physical exercise except in all advantages.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-69.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 working-block">
                        <div className="working-block-one">
                            <div className="inner-box">
                                <span className="count-text">04</span>
                                <h3>Start Banking</h3>
                                <p>Foresee the pain & trouble that are bound ensue equal blame belongs fail.</p>
                                <div className="icon-box"><img src="assets/images/icons/icon-70.png" alt=""/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="more-text centred">
                    <h5><i className="flaticon-sparkle"></i>Your Financial Future Starts Here, <Link href="/index-2">Start Your Account.</Link></h5>
                </div>
            </div>
        </section>

    </>
  )
}
