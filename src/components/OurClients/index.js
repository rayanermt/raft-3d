import "./OurClients.css"

export default function OurClients () {
    return(
        <section className="ourClients">
            <h2 className="heading_2">Nossos Clientes</h2>
            <p className="heading_4">Nossos serviços de prototipagem atendem empresas de todos os setores</p>
            <div className="ourClients__logos-container">
                <a href="https://mti.work/">
                    <img 
                        src="https://static.wixstatic.com/media/c0cf03_f6d03a4b1e0747f2a07c362aa155ceb5~mv2.png/v1/fill/w_114,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mti%20logo.png"
                        className="ourClients__logo" alt="Minas Tecnologia e Inovação" 
                    />
                </a>
                <a href="https://www.zeusagro.com/">
                    <img 
                        src="https://www.zeusagro.com/logos/logo-zeus-gradient-light.svg"
                        className="ourClients__logo" alt="Zeus Agro" 
                    />
                </a>
                <a href="https://www.landix.com.br/">
                    <img 
                        src="https://static.wixstatic.com/media/f6f58d_41b5f1fe586740bc915a4b341c0a5b90~mv2.png/v1/fill/w_201,h_43,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/landixloo.png"
                        className="ourClients__logo" alt="Landix" 
                    />
                </a>
                <a href="https://snackin.co/">
                    <img
                        src="https://static.wixstatic.com/media/f6f58d_c0d718af86014a7eb683c8c390e6fa1f~mv2.jpg/v1/crop/x_10,y_0,w_557,h_204/fill/w_117,h_43,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/snackinlogo.jpg"
                        className="ourClients__logo" alt="Snackin" 
                    />
                </a>
                <a href="https://snackin.co/">
                    <img
                        src="https://static.wixstatic.com/media/f6f58d_c3ec95d95c7947449cf13079e52572ed~mv2.jpeg/v1/fill/w_100,h_34,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ivare.jpeg"
                        className="ourClients__logo" alt="Ivore" 
                    />
                </a>
            </div>
        </section>
    );
}