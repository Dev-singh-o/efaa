'use client'
import { useState } from "react"
import Link from "next/link"

export default function Faq() {

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

  return (
    <>

        <section className="faq-section sec-pad bg-color-1">
            <div className="auto-container">
                <div className="sec-title centred">
                    <span className="sub-title">Faq’s</span>
                    <h2>Read Questions & Answers</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 category-column">
                        <div className="category-box">
                            <h3>Categories</h3>
                            <p>Wide range of topics to address common queries.</p>
                            <ul className="category-list clearfix">
                                <li><Link href="/">Account</Link></li>
                                <li><Link href="/">Online Banking</Link></li>
                                <li><Link href="/">Mobile Banking</Link></li>
                                <li><Link href="/">Deposits</Link></li>
                                <li><Link href="/">Withdrawals</Link></li>
                                <li><Link href="/">Loans</Link></li>
                                <li><Link href="/">Business</Link></li>
                            </ul>
                            <div className="lower-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-35.png" alt=""/></div>
                                <h5>Can't Find What You Need?</h5>
                                <Link href="/"><i className="flaticon-right-arrow"></i>Submit Queries</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 accordion-column">
                        <ul className="accordion-box">
                            <li className="accordion block">
                                <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>01</span>How do I open a new account?</h4>
                                </div>
                                <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>02</span>How can I check my account balance?</h4>
                                </div>
                                <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>03</span>Is online banking secure?</h4>
                                </div>
                                <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>04</span>What is the daily ATM withdrawal limit?</h4>
                                </div>
                                <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion block">
                                <div className={isActive.key == 5 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(5)}>
                                    <div className="icon-box"><i className="flaticon-chevron"></i></div>
                                    <h4><span>05</span>How do I apply for a loan?</h4>
                                </div>
                                <div className={isActive.key == 5 ? "acc-content current" : "acc-content"}>
                                    <div className="content">
                                        <p>Repudiated and annoyances accepted the wise man therefore always holds in these matters to this principle selection he rejects pleasures to secures.</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}
