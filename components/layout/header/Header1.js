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

  const optionstwo = [
    { value: "1", label: "Login" },
    { value: "2", label: "Logout" },
    { value: "3", label: "Signup" },
  ];


  const optionsthree = [
    { value: "1", label: "Us - En" },
    { value: "2", label: "Uk - En" },
    { value: "3", label: "Canada - En" },
    { value: "4", label: "France - Fr" },
    { value: "5", label: "Italy - It" },
    { value: "6", label: "Turky - Tu" },
  ]


export default function Header1({ scroll, handleMobileMenu, handlePopup }) {

    const handleSelectChange = (selectedOption) => {
        console.log("Select", selectedOption);
      };

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    
    return (
        <>

        {/* main header */}

        <header className={`main-header ${scroll ? "fixed-header" : ""}`}>
            <div className="header-top">
                <div className="outer-container">
                    <div className="top-inner pr_30">
                        <div className="left-column">
                            <ul className="info-list">
                                <li className="looking-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-1.png" alt=""/></div>
                                    <h5>Looking:</h5>
                                    <div className="custom-select select-box">
                                        <CustomSelect options={options} onChange={handleSelectChange} />
                                    </div>
                                </li>
                                <li className="login-box pr_30">
                                    <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt=""/></div>
                                    <div className="custom-select select-box">
                                        <CustomSelect options={optionstwo} onChange={handleSelectChange} />
                                    </div>
                                </li>
                                <li className="mail-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-3.png" alt=""/></div>
                                    <Link href="mailto:getsupport@example.com">getsupport@example.com</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="right-column">
                            <ul className="option-list p_relative pr_30 mr_30">
                                <li><img src="assets/images/icons/icon-4.png" alt=""/><Link href="/careers">Careers</Link></li>
                                <li><Link href="/faq">Faq’s</Link></li>
                                <li><Link href="/">Business</Link></li>
                                <li><Link href="/">Rewards</Link></li>
                            </ul>
                            <div className="language-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-5.png" alt=""/></div>
                                <div className="custom-select select-box">
                                    <CustomSelect options={optionsthree} onChange={handleSelectChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-lower">
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="menu-area">
                            <div className="logo-box mr_110">
                                <figure className="logo
                                "><Link href="/"><img src="assets/images/new_logo.png" alt=""/></Link></figure>
                            </div>
                            
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
                        <div className="menu-right-content">
                            <div className="search-box search-toggler pr_30 mr_30" onClick={handlePopup}><span>Search</span> <img src="assets/images/icons/icon-7.png" alt=""/></div>
                            <div className="support-box mr_50"><img src="assets/images/icons/icon-8.png" alt=""/><Link href="/">Support</Link></div>
                            <div className="btn-box mr_10"><Link href="/" className="theme-btn"><span>New Account</span></Link></div>
                            <div className="nav-toggler">
                                <button type="button" className="side-panel-btn nav-btn"><img src="assets/images/icons/icon-10.png" alt=""/></button>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="menu-area">
                            <div className="logo-box mr_110">
                                <figure className="logo"><Link href="/" ><img src="assets/images/new_logo.png" alt=""/></Link></figure>
                            </div>
                            <nav className="main-menu navbar-expand-md navbar-light">
                                <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                    <Menu />
                                </div>
                            </nav>
                        </div>
                        <div className="menu-right-content">
                            <div className="search-box search-toggler pr_30 mr_30" onClick={handlePopup}><span>Search</span> <img src="assets/images/icons/icon-7.png" alt=""/></div>
                            <div className="support-box mr_50"><img src="assets/images/icons/icon-8.png" alt=""/><Link href="/">Support</Link></div>
                            <div className="btn-box mr_10"><Link href="/" className="theme-btn"><span>New Account</span></Link></div>
                            <div className="nav-toggler">
                                <button type="button" className="side-panel-btn nav-btn"><img src="assets/images/icons/icon-10.png" alt=""/></button>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu handleMobileMenu={handleMobileMenu} />
        </header>


        </>
    )
}
