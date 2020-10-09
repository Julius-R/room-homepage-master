import React from 'react'
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";

const log = val => console.log(val)
const links = ["home","shop","about","contact"];

export default function Navbar() {
    const mobileMenuToggle = () => {
        let menu = document.querySelector(".mobileMenu");

        
        menu.style.display == "none" ? menu.style.display = "flex" : menu.style.display = "none";
    }
    return (
        <nav className="navigation">
            <div className="container">
                <section className="mobileMenu">
                    <img src={close} alt="Close button icon" className="closeBtn" onClick={mobileMenuToggle}/>
                    <ul className="menu">
                        {links.map(link => {
                            return (
                            <li key={link} className="link"><a href="#">{link}</a></li>
                            )
                        })}
                    </ul>
                </section>
                <img src={hamburger} alt="Icon used to open menu" className="menuBtn" onClick={mobileMenuToggle}/>
                <h1 className="logo">room</h1>
            </div>
        </nav>
    )
}
