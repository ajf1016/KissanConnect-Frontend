import React from "react";
import GoogleTranslate from "./GoogleTranslate";
import logo from "../assets/images/kissan-logo.jpeg";

function Header() {
    return (
        <header style={headerStyle}>
            {/* Left: Logo */}
            <div style={logoStyle}>
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

            {/* Right: Navigation Links and Language Selector */}
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

                {/* Google Translate Component */}
                {/* <GoogleTranslate /> */}
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
};

const searchContainerStyle = {
    flex: 1,
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
    alignItems: "center",
};

const navLinkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
};

export default Header;
