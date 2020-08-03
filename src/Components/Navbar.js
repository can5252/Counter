import React from "react";

function Navbar() {
    return (
        <div className={"navbar"} style={NavbarStyle}>
            {"Counter"}
        </div>
    );
}

const NavbarStyle = {
    textAlign: "center",
    letterSpacing: "0.7rem",
    backgroundColor: "#CAE3F9",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: '#2D97F4',
    fontSize:'1.5rem',
    marginBottom : '1rem'
};

export default Navbar;
