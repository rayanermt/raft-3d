import HeroArt from "./heroArt.png";
import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__text-container">
                <h2 className="hero__title">O céu é o limite com nossa <span className="hero__text-emphasis">impressão 3D</span></h2>
                <h3 className="hero__text">Transformamos sua ideia em produtos com tecnologia 3d de ponta.</h3>
                <button className="hero__button">Peça um orçamento</button>
            </div>
            <img src={HeroArt} alt="" className="hero__figure"/>
        </section>
    );
}