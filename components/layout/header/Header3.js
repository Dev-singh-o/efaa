import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header3({ scroll, handleMobileMenu, isSidebar, handlePopup, handleSidebar }) {
    return (
        <>
            {/* <header className="main-header header-style-three"> */}

            <header className={`main-header header-style-three ${scroll ? "fixed-header" : ""}`}>
                <div className="header-lower">
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="menu-area">
                                <figure className="logo-box p_relative pr_40 mr_40"><Link href="/index-3"><img src="assets/images/logo-5.png" alt=""/></Link></figure>
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
                                <li className="search-box search-toggler pr_30 mr_30" onClick={handlePopup}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-94.png" alt=""/></div>
                                </li>
                                <li className="notification-box mr_40"><button type="button"><img src="assets/images/icons/icon-95.png" alt=""/></button></li>
                                <li className="btn-box">
                                    <a href="contact.html"><img src="assets/images/icons/icon-96.png" alt=""/><span>Talk to Us</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}>
                    <div className="outer-container">
                        <div className="outer-box">
                            <div className="menu-area">
                                <figure className="logo-box p_relative pr_40 mr_40"><Link href="/index-3"><img src="assets/images/logo-5.png" alt=""/></Link></figure>
                                <nav className="main-menu navbar-expand-md navbar-light">
                                    <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                                        <Menu />
                                    </div>
                                </nav>
                            </div>
                            <ul className="menu-right-content">
                                <li className="search-box search-toggler pr_30 mr_30" onClick={handlePopup}>
                                    <div className="icon-box"><img src="assets/images/icons/icon-94.png" alt=""/></div>
                                </li>
                                <li className="notification-box mr_40"><button type="button"><img src="assets/images/icons/icon-95.png" alt=""/></button></li>
                                <li className="btn-box">
                                    <a href="contact.html"><img src="assets/images/icons/icon-96.png" alt=""/><span>Talk to Us</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
