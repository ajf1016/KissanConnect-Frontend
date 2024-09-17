import React from "react";
import logo from "../assets/images/kissan-logo.jpeg";

function Header() {
    return (
        <header style={headerStyle}>
            {/* Left: Logo */}
            <div style={logoStyle}>
                {/* <img
                    src={logo}
                    alt="Kissan Connect Logo"
                    // style={logoImageStyle}
                    className="img-class"
                /> */}
                <h1>Kisan Connect</h1>
            </div>

            {/* Middle: Search Bar */}
            <div style={searchContainerStyle}>
                <input
                    type="text"
                    placeholder="Search for crops, services..."
                    style={searchBarStyle}
                />
            </div>

            {/* Right: Navigation Links */}
            <nav style={navStyle}>
                <a href="/" style={navLinkStyle}>
                    Home
                </a>
                <a href="/market" style={navLinkStyle}>
                    Market
                </a>
                <a href="/profile" style={navLinkStyle}>
                    Profile
                </a>
            </nav>
        </header>
    );
}

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 100px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    height: "80px",
};

const logoStyle = {
    width: "20% !important",
    // height: "50px",
};

const searchContainerStyle = {
    flex: 1, // Makes the search bar container take available space
    display: "flex",
    justifyContent: "center",
};

const searchBarStyle = {
    width: "300px",
    padding: "10px",
    border: "2px solid #000000",
    borderRadius: "50px",
};

const navStyle = {
    display: "flex",
    gap: "20px",
};

const navLinkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
};

export default Header;
