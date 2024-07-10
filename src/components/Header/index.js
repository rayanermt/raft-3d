import GearIcon from "../../assets/gear.svg";
import Logo from "../../assets/logo.png";
import MenuIcon from "../../assets/menu-burger.svg"

import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <figure className="logo">
                <img className="logoImage" src={Logo}/>
                <span className="logoName">Raft 3D</span>
            </figure>
            {/*  
            <label for="burguer-menu">
                <img className="icon" src={MenuIcon}/>
            </label>
            <input className="burguer-menu" type="checkbox" id="burguer-menu"></input>
            <nav className="nav hidden">
                <ul className="nav-list">
                    <li className="nav-list__item">Sobre Nós</li>
                    <li className="nav-list__item">Serviços</li>
                    <li className="nav-list__item">Contato</li>
                </ul>
            </nav>*/}
        </header>
    );
}