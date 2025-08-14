import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
import CustomSelect from '../../elements/CustomSelect'

const options = [
    { value: "1", label: "New York" },
    { value: "2", label: "California" },
    { value: "3", label: "Canada" },
    { value: "4", label: "France" },
  ];

  const optionstwo = [
    { value: "1", label: "Login" },
    { value: "2", label: "Logout" },
    { value: "3", label: "Signup" },
  ];

export default function Header4({ scroll, handleMobileMenu, isSidebar, handleSidebar, handlePopup }) {

    const handleSelectChange = (selectedOption) => {
        console.log("Select", selectedOption);
      };

    return (
        <>
        {/* <header className="main-header header-style-four"> */}

        <header className={`main-header header-style-four ${scroll ? "fixed-header" : ""}`}>
            <div className="header-lower">
                <div className="outer-box">
                    <div className="left-column">
                        <ul className="category-list mr_30">
                            <li>
                                <div className="check-box">
                                    <input className="check" type="radio" id="checkbox1" name="same" defaultChecked/>
                                    <label for="checkbox1">Personal</label>
                                </div>
                            </li>
                            <li>
                                <div className="check-box">
                                    <input className="check" type="radio" id="checkbox2" name="same"/>
                                    <label for="checkbox2">Business</label>
                                </div>
                            </li>
                        </ul>
                        <div className="sidebar-menu nav-content pr_25 mr_25">
                            <button type="button" className="side-menu-btn nav-btn mobile-nav-toggler" onClick={handleMobileMenu}><img src="assets/images/icons/icon-126.png" alt=""/><span>Menu</span></button>
                            <div className="menu-content">
                                <div className="close-icon"><i className="fas fa-times"></i></div>
                                
                                <div className="menu-lower-content">
                                    <div className="icon-box"><img src="assets/images/icons/icon-128.png" alt=""/></div>
                                    <h3>File Your <br />Complaint Here</h3>
                                    <p>Get Quick solution from experts.</p>
                                    <a href="/index-4" className="theme-btn"><span>Submit Here</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="search-box search-toggler" onClick={handlePopup}><img src="assets/images/icons/icon-127.png" alt=""/><span>Search</span></div>
                    </div>
                    <figure className="logo-box"><a href="index.html"><img src="assets/images/logo-7.png" alt=""/></a></figure>
                    <div className="right-column">
                        <div className="location-box pr_25 mr_25">
                            <div className="icon-box"><img src="assets/images/icons/icon-129.png" alt=""/></div>
                            <div className="custom-select select-box">
                                <CustomSelect options={options} onChange={handleSelectChange} />
                            </div>
                        </div>
                        <ul className="social-links pr_25 mr_25">
                            <li><a href="home-4.html"><i className="flaticon-twitter"></i></a></li>
                            <li><a href="home-4.html"><i className="flaticon-youtube"></i></a></li>
                        </ul>
                        <div className="login-box">
                            <div className="icon-box"><img src="assets/images/icons/icon-130.png" alt=""/></div>
                            <div className="custom-select select-box">
                                <CustomSelect options={optionstwo} onChange={handleSelectChange} />
                            </div>
                        </div>
                    </div>
                </div>
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
            </div>

            
            <div className="sticky-header">
                <div className="outer-container">
                    <div className="outer-box">
                        <div className="left-column">
                            <ul className="category-list mr_30">
                                <li>
                                    <div className="check-box">
                                        <input className="check" type="radio" id="checkbox3" name="same2" defaultChecked/>
                                        <label for="checkbox3">Personal</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="check-box">
                                        <input className="check" type="radio" id="checkbox4" name="same2"/>
                                        <label for="checkbox4">Business</label>
                                    </div>
                                </li>
                            </ul>
                            <div className="sidebar-menu nav-content-2 pr_25 mr_25">
                                <button type="button" className="side-menu-btn nav-btn-2  mobile-nav-toggler" onClick={handleMobileMenu}><img src="assets/images/icons/icon-126.png" alt=""/><span>Menu</span></button>
                                <div className="menu-content">
                                    <div className="close-icon"><i className="fas fa-times"></i></div>
                                    
                                    <div className="menu-lower-content">
                                        <div className="icon-box"><img src="assets/images/icons/icon-128.png" alt=""/></div>
                                        <h3>File Your <br />Complaint Here</h3>
                                        <p>Get Quick solution from experts.</p>
                                        <a href="/index-4" className="theme-btn"><span>Submit Here</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="search-box search-toggler" onClick={handlePopup}><img src="assets/images/icons/icon-127.png" alt=""/><span>Search</span></div>
                        </div>
                        <figure className="logo-box"><a href="index.html"><img src="assets/images/logo-7.png" alt=""/></a></figure>
                        <div className="right-column">
                            <div className="location-box pr_25 mr_25">
                                <div className="icon-box"><img src="assets/images/icons/icon-129.png" alt=""/></div>
                                    <div className="custom-select select-box">
                                    <CustomSelect options={options} onChange={handleSelectChange} />
                                </div>
                            </div>
                            <ul className="social-links pr_25 mr_25">
                                <li><a href="home-4.html"><i className="flaticon-twitter"></i></a></li>
                                <li><a href="home-4.html"><i className="flaticon-youtube"></i></a></li>
                            </ul>
                            <div className="login-box">
                                <div className="icon-box"><img src="assets/images/icons/icon-130.png" alt=""/></div>
                                <div className="custom-select select-box">
                                    <CustomSelect options={optionstwo} onChange={handleSelectChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <MobileMenu handleMobileMenu={handleMobileMenu} isSidebar={isSidebar} handleSidebar={handleSidebar} />
            

            
        </>
    )
}
