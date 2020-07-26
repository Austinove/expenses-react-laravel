import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    UncontrolledTooltip
} from "reactstrap";

const NavHeader = ({ navtype }) => {
    const [navbarColor, setnavbarColor] = useState((navtype === "dashboard")?"bg-primary":"navbar-transparent");
    const [collapseOpen, setcollapseOpen] = useState(false);
    useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 399 ||
                document.body.scrollTop > 399
            ) {
                setnavbarColor("");
            } else if (
                document.documentElement.scrollTop > 399 || 
                document.body.scrollTop >399
            ) {
                setnavbarColor("navbar-transparent")
            };
            window.addEventListener("scroll", updateNavbarColor);
        }
        return () => {
            window.removeEventListener("scroll", updateNavbarColor);
        }
    });
    
    return (
        <>
            {collapseOpen ? (
                <div
                    id="bodyClick"
                    onClick={() => {
                        document.documentElement.classList.toggle("nav-open");
                        setcollapseOpen(false);
                    }}
                />
            ) : null}
            <Navbar
                className={"fixed-top " + navbarColor}
                color="info"
                expand="lg"
            >
                <Container>
                    <div className="navbar-translate">
                        <NavbarBrand
                            href="#"
                            target="_blank"
                            id="navbar-brand"
                        >
                            Friends With a Purpose
                        </NavbarBrand>
                        <button
                            className="navbar-toggler navbar-toggler"
                            onClick={() => {
                                document.documentElement.classList.toggle(
                                    "nav-open"
                                );
                                setcollapseOpen(!collapseOpen);
                            }}
                            aria-expanded={collapseOpen}
                            type="button"
                        >
                            <span className="navbar-toggler-bar top-bar"></span>
                            <span className="navbar-toggler-bar middle-bar"></span>
                            <span className="navbar-toggler-bar bottom-bar"></span>
                        </button>
                    </div>
                    <Collapse
                        className="justify-content-end"
                        isOpen={collapseOpen}
                        navbar
                    >
                        <Nav navbar>
                            {/* <NavItem>
                                <NavLink to="/index" tag={Link}>
                                    Back to Kit
                                </NavLink>
                            </NavItem> */}
                            <NavItem>
                                <NavLink href="#">
                                    Have an issue?
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    target="_blank"
                                    id="twitter-tooltip"
                                >
                                    <i className="fab fa-twitter"></i>
                                    <p className="d-lg-none d-xl-none">
                                        Twitter
                                    </p>
                                </NavLink>
                                <UncontrolledTooltip target="#twitter-tooltip">
                                    Follow us on Twitter
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    target="_blank"
                                    id="facebook-tooltip"
                                >
                                    <i className="fab fa-facebook-square"></i>
                                    <p className="d-lg-none d-xl-none">
                                        Facebook
                                    </p>
                                </NavLink>
                                <UncontrolledTooltip target="#facebook-tooltip">
                                    Like us on Facebook
                                </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    href="#"
                                    target="_blank"
                                    id="instagram-tooltip"
                                >
                                    <i className="fab fa-instagram"></i>
                                    <p className="d-lg-none d-xl-none">
                                        Instagram
                                    </p>
                                </NavLink>
                                <UncontrolledTooltip target="#instagram-tooltip">
                                    Follow us on Instagram
                                </UncontrolledTooltip>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </>
    );
}
export default NavHeader;
