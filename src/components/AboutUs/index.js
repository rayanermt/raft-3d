import "./AboutUs.css";

import LocationIcon from "../../assets/location.svg";
import InstagramIcon from "../../assets/instagram.svg";
import EmailIcon from "../../assets/email.svg";
import PhonenIcon from "../../assets/phone.svg";

export default function AboutUs() {
    return (
        <section className="about">
            <img 
                class="about__figure" alt=""
                src="https://lh3.googleusercontent.com/p/AF1QipN-cHgN_XKUsUF4K5iT_lc_ek5PGKnrDyTw6Do=s680-w680-h510"
            />
            <div class="about__text">
                <h2 className="heading_2">Sobre a <span>Raft 3D</span></h2>
                <p className="body about__body">A React 3D é uma empresa especializada em impressão 3D sediada em Uberlândia, Minas Gerais.</p>
                <p className="body about__body">Utilizamos tecnologias de manufatura aditiva e sinterização de materiais para oferecer soluções incríveis em diversos segmentos.</p>
                <hr className="about__hr"></hr>
                <div class="about__contact-info">
                    <img className="about-icon" src={PhonenIcon} alt="Telefones"></img>
                    <div>
                        <a href="https://wa.me/<number>" className="body">(34) 1234-5678 | Fábio</a>
                        <a href="https://wa.me/<number>" className="body">(34) 1234-5678 | Fábio</a>

                    </div>
                </div>

                <div class="about__contact-info">
                    <img className="about-icon" src={InstagramIcon} alt="Instagram"></img>
                    <a href="#" className="body">@react3d</a>
                </div>

                <div class="about__contact-info">
                    <img className="about-icon" src={EmailIcon} alt="Email"></img>
                    <a href="#" className="body">react3d@react.com.br</a>
                </div>

                <div class="about__contact-info">
                    <img className="about-icon" src={LocationIcon} alt="Endereço"></img>
                    <a href="#" className="body">Av. Anselmo Alves dos Santos, 1111, sala 104 - Tibery, Uberlândia</a>
                </div>


            </div>
        </section>
    );
}