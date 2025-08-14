import CounterUp from "@/components/elements/CounterUp"
export default function Funfact() {

  return (
    <>
        <section className="funfact-section centred">
            <div className="outer-container clearfix">
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-55.png" alt=""/></div>
                        <div className="count-outer">
                        <span>8.</span><CounterUp end={5} /><span className="symble">k</span>
                        </div>
                        <p>Happy Customers World Wide.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-56.png" alt=""/></div>
                        <div className="count-outer">
                            <span>0.</span><CounterUp end={5} /><span className="symble">m</span>
                        </div>
                        <p>Transactions Processed Daily.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-57.png" alt=""/></div>
                        <div className="count-outer">
                            <CounterUp end={10000} /><span className="symble">+</span>
                        </div>
                        <p>ATMs and Branches Globally.</p>
                    </div>
                </div>
                <div className="funfact-block-one">
                    <div className="inner-box">
                        <div className="icon-box"><img src="assets/images/icons/icon-58.png" alt=""/></div>
                        <div className="count-outer">
                            <CounterUp end={50} /><span className="symble">+</span>
                        </div>
                        <p>Years of Trusted Banking Service.</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
