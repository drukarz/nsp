import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

class Navbar extends Component
{
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        console.log('Navbar')
        return (
            <nav id="navbar">
                <div >
                    <ul>
                        <li className="nav-item">
                            <Link className="nav-item-common nav-item-back-about-us"
                                  activeClass="active"
                                  to="section1"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                            >
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item-common nav-item-back-courses"
                                  activeClass="active"
                                  to="section2"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                            >
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item-common nav-item-back-gallery"
                                  activeClass="active"
                                  to="section3"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                            >
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-item-common nav-item-back-contact"
                                  activeClass="active"
                                  to="section4"
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                            >
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;