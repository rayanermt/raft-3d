import "./Services.css"

export default function Services() {
    return (
        <section className="services">
            <h2 className="heading_2 services__header">Nossos serviços</h2>

            <div className="services__cards-container">
                <div className="service__card">
                    <img className="service__card-figure" src="" alt=""/>
                    <div className="service__card-text-container">
                        <h3 className="heading_3 service__card-title">Impressão de modelos 3D</h3>
                        <button className="service__button">Saiba Mais ><i class="ui-icon ui-chevron-right"></i></button>
                    </div>
                </div>

                <div className="service__card">
                    <img className="service__card-figure" src="" alt=""/>
                    <h3 className="heading_3 service__card-title">Cursos de impressão 3D</h3>
                    <button className="service__button">Saiba Mais ><i class="ui-icon ui-chevron-right"></i></button>
                </div>

                <div className="service__card">
                    <img className="service__card-figure" src="" alt=""/>
                    <h3 className="heading_3 service__card-title">Locação de Máquinas</h3>
                    <button className="service__button">Saiba Mais ><i class="ui-icon ui-chevron-right"></i></button>
                </div>

                <div className="service__card">
                    <img className="service__card-figure" src="" alt=""/>
                    <h3 className="heading_3 service__card-title">Desenvolvimento de protótipos</h3>
                    <button className="service__button">Saiba Mais ><i class="ui-icon ui-chevron-right"></i></button>
                </div>
            </div>
        </section>
    );
}