'use client'
import { useState } from "react"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import CustomSelect from '../../elements/CustomSelect'

const options = [
    { value: "1", label: "Personal 1" },
    { value: "2", label: "Personal 2" },
    { value: "3", label: "Personal 3" },
    { value: "4", label: "Personal 4" },
    { value: "5", label: "Personal 5" },
  ];

export default function Header2({ scroll, handleMobileMenu, isSidebar, handleSidebar, handlePopup }) {

    const handleSelectChange = (selectedOption) => {
        console.log("Se:", selectedOption);
      };

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <>
            {/* <header className="main-header header-style-two"> */}

            <header className={`main-header header-style-two ${scroll ? "fixed-header" : ""}`}>
            <div className="header-top-two">
                <div className="bar-box">
                    <span className="bar bar-1"></span>
                    <span className="bar bar-2"></span>
                    <span className="bar bar-3"></span>
                    <span className="bar bar-4"></span>
                </div>
                <div className="outer-container">
                    <div className="top-inner">
                        <ul className="service-list">
                            <li>
                                <div className="icon-box"><img src="assets/images/icons/icon-41.png" alt=""/></div>
                                <Link href="/index-2">Branches & ATM’s</Link>
                            </li>
                            <li>
                                <div className="icon-box"><img src="assets/images/icons/icon-42.png" alt=""/></div>
                                <Link href="/index-2">Online Banking</Link>
                            </li>
                            <li>
                                <div className="icon-box"><img src="assets/images/icons/icon-43.png" alt=""/></div>
                                <Link href="/index-2">Loan Calculator</Link>
                            </li>
                            <li>
                                <div className="icon-box"><img src="assets/images/icons/icon-44.png" alt=""/></div>
                                <Link href="/cards">Credit Card</Link>
                            </li>
                            <li>
                                <div className="icon-box"><img src="assets/images/icons/icon-45.png" alt=""/></div>
                                <Link href="/index-2">Help & Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className="header-upper">
                <div className="outer-container">
                    <div className="upper-inner">
                        <div className="left-column">
                            <figure className="logo-box"><Link href="/index-2"><img src="assets/images/logo-3.png" alt=""/></Link></figure>
                            <div className="notification-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-46.png" alt=""/></div>
                                <h5>Notifications:</h5>
                                <p>Our new rewards credit card with 5% cashback...</p>
                                <Link href="/index-2"><i className="flaticon-right-arrow"></i>More Details</Link>
                            </div>
                        </div>
                        <div className="right-column">
                            <div className="search-box search-toggler mr_40" onClick={handlePopup}><span>Search</span> <img src="assets/images/icons/icon-7.png" alt=""/></div>
                            <ul className="info-list">
                                <li>
                                    <Link href="/index-2">
                                        <img src="assets/images/icons/icon-47.png" alt=""/>
                                        Login
                                        <span>Existing Customer</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/index-2">
                                        <img src="assets/images/icons/icon-47.png" alt=""/>
                                        Register 
                                        <span>New Customer</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-lower">
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="menu-area">
                            <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <ul className="menu-right-content">
                            <li className="looking-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-49.png" alt=""/></div>
                                <h5>Looking:</h5>
                                <div className="custom-select select-box">
                                    <CustomSelect options={options} onChange={handleSelectChange} />
                                </div>
                            </li>
                            <li className="phone-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-50.png" alt=""/></div>
                                <Link href="tel:496912345678">+49 69 1234 5678</Link>
                            </li>
                            <li className="nav-toggler">
                                <button type="button" className="side-panel-btn nav-btn"><img src="assets/images/icons/icon-51.png" alt=""/></button>
                                <div className="side-panel nav-content">
                                    <div className="tabs-box">
                                        <ul className="tab-btns tab-buttons mb_25">
                                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}><h5>Branches</h5></li>
                                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}><h5>ATM’s</h5></li>
                                        </ul>
                                        <div className="tabs-content">
                                            <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"} id="branches">
                                                <div className="inner-box">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                                        <input type="text" name="location" placeholder="Current Location"/>
                                                    </div>
                                                    <div className="text">[or]</div>
                                                    <div className="form-group">
                                                        <input type="text" name="city" placeholder="City name: Hamburg"/>
                                                    </div>
                                                    <div className="link-box"><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</Link></div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="atm-btn">
                                                <div className="inner-box">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                                        <input type="text" name="location" placeholder="Current Location"/>
                                                    </div>
                                                    <div className="text">[or]</div>
                                                    <div className="form-group">
                                                        <input type="text" name="city" placeholder="City name: Australia"/>
                                                    </div>
                                                    <div className="link-box"><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="menu-area">
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <ul className="menu-right-content">
                            <li className="looking-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-49.png" alt=""/></div>
                                <h5>Looking:</h5>
                                <div className="custom-select select-box">
                                    <CustomSelect options={options} onChange={handleSelectChange} />
                                </div>
                            </li>
                            <li className="phone-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-50.png" alt=""/></div>
                                <Link href="tel:496912345678">+49 69 1234 5678</Link>
                            </li>
                            <li className="nav-toggler">
                                <button type="button" className="side-panel-btn nav-btn"><img src="assets/images/icons/icon-51.png" alt=""/></button>
                                <div className="side-panel nav-content">
                                    <div className="tabs-box">
                                        <ul className="tab-btns tab-buttons mb_25">
                                            <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "p-tab-btn active-btn" : "tab-btn"}><h5>Branches</h5></li>
                                            <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "p-tab-btn active-btn" : "tab-btn"}><h5>ATM’s</h5></li>
                                        </ul>
                                        <div className="tabs-content">
                                            <div className={activeIndex === 1 ? "tab p-tab active-tab" : "tab"} id="branches">
                                                <div className="inner-box">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                                        <input type="text" name="location" placeholder="Current Location"/>
                                                    </div>
                                                    <div className="text">[or]</div>
                                                    <div className="form-group">
                                                        <input type="text" name="city" placeholder="City name: Hamburg"/>
                                                    </div>
                                                    <div className="link-box"><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</Link></div>
                                                </div>
                                            </div>
                                            <div className={activeIndex === 2 ? "tab p-tab active-tab" : "tab"} id="atm-btn">
                                                <div className="inner-box">
                                                    <div className="form-group">
                                                        <div className="icon-box"><img src="assets/images/icons/icon-86.png" alt=""/></div>
                                                        <input type="text" name="location" placeholder="Current Location"/>
                                                    </div>
                                                    <div className="text">[or]</div>
                                                    <div className="form-group">
                                                        <input type="text" name="city" placeholder="City name: Australia"/>
                                                    </div>
                                                    <div className="link-box"><Link href="https://www.google.com/maps" target="_blank"><i className="flaticon-right-arrow"></i>Find On Map</Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} handleSidebar={handleSidebar} isSidebar={isSidebar} />


        </>
    )
}
