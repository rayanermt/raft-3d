import "./Services.css"
import { useState } from "react";

import Chevron from "../../assets/chevron-right.svg"
import ServiceImpressao from "../../assets/service-impressao.svg"
import ServiceCurso from "../../assets/service-curso.svg"
import ServiceLocacao from "../../assets/service-locacao.svg"
import ServicePrototipo from "../../assets/service-prototipo.svg"

function ServiceCard({ img, title, description }) {
    return ( 
        <div className="service__card">
            <div className="service__card-header">
                <img src={img}></img>
                <p className="body">{title}</p> 
            </div>
            <div className="service__description">
                <p className="body">{description}</p>
                <button className="service__button">Saiba mais</button>
            </div>
            
        </div>
    );
}

export default function Services() {
    return (
        <section className="services">
            <h2 className="heading_2">Nossos serviços</h2>
            <div className="services__subtitle">
                <p className="body service__body">Lorem Ipsum sit dolor amed Lorem Ipsum sit dolor amed Lorem Ipsum sit dolor amed Lorem Ipsum sit dolor amed.</p>
                <a className="services__link" href="">
                    Confira nossa <span>Política de Entrega, Troca, Devolução e Reembolso</span>
                </a>
            </div>
            <div className="services__grid">
                <ServiceCard 
                    title = "Impressão de Modelos 3D"
                    description= "O uso da tecnologia de impressão 3D é uma excelente forma para testar a viabilidade com bom custo-benefício, agilidade no processo e ótima qualidade."
                    img = {ServiceImpressao}
                />
                <ServiceCard 
                    title = "Cursos de Impressão 3D"
                    description="O uso da tecnologia de impressão 3D é uma excelente forma para testar a viabilidade com bom custo-benefício, agilidade no processo e ótima qualidade."
                    img = {ServiceCurso}
                />
                <ServiceCard 
                    title = "Locação de Impressoras 3D"
                    description="O uso da tecnologia de impressão 3D é uma excelente forma para testar a viabilidade com bom custo-benefício, agilidade no processo e ótima qualidade."
                    img = {ServiceLocacao}
                />
                <ServiceCard 
                    title = "Desenvolvimento de Protótipos"
                    description="O uso da tecnologia de impressão 3D é uma excelente forma para testar a viabilidade com bom custo-benefício, agilidade no processo e ótima qualidade."
                    img = {ServicePrototipo}
                />
            </div>
        </section>
    );
}