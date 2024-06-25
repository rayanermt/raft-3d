import HeroArt from "./heroArt.png";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-text-container">
                <h2>O céu é o limite com nossa <span className="hero-text-emphasis">impressão 3D</span></h2>
                <h3>Transformamos sua ideia em produtos com tecnologia 3d de ponta.</h3>
                <button>Peça um orçamento</button>
            </div>
            <img src={HeroArt} alt=""/>
        </section>
    );
}