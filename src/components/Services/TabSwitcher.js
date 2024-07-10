import { useState } from "react";
import TabContent from "./TabContent";

const tabs=[
    { 
      id:"impressao",
      header: "Impressão de Modelos 3D",
      subheader: "",
      text: "Unleash incredible print speed (up to 500mm/s) without sacrificing print  quality. Enjoy the flexibility of multiple build volumes for your  projects.",
      buttonLabel: "Nossa galeria",
      img: ""
    },
    { 
      id: "curso",
      header:"Cursos de Impressão 3D",
      subheader: "Enjoy the flexibility of multiple build volumes for your  projects.",
      text: "Unleash incredible print speed (up to 500mm/s) without sacrificing print  quality. Enjoy the flexibility of multiple build volumes for your  projects.",
      buttonLabel: "Saiba Mais",
      img: ""
    },
    { 
      id: "prototipagem",
      header:"Prototipagem de Modelos 3D",
      subheader: "Enjoy the flexibility of multiple build volumes for your  projects.",
      text: "Unleash incredible print speed (up to 500mm/s) without sacrificing print  quality. Enjoy the flexibility of multiple build volumes for your  projects.",
      buttonLabel: "Faça um Orçamento",
      img: ""
    },
    { 
      id: "locacao",
      header:"Locação de Impressoras 3D",
      subheader: "Enjoy the flexibility of multiple build volumes for your  projects.",
      text: "Unleash incredible print speed (up to 500mm/s) without sacrificing print  quality. Enjoy the flexibility of multiple build volumes for your  projects.",
      buttonLabel: "Nossas máquinas",
      img: ""
    },

  ]

// Parâmetro: Array com todas as categorias de serviços
export default function TabSwitcher( ){
    const [activeId, setActiveId] = useState(tabs[0].id);
    const selectedTab = tabs.find(tab => tab.id === activeId);

    return (
        <section className="services">
            <nav className="services-list-wrapper">
                {tabs.map((tab) => (
                    <li>
                        <button onClick={ () => setActiveId(tab.id) }>
                            {tab.header}
                        </button>
                    </li>
                ))}
            </nav>
            <div className="tab-content">
                {selectedTab.content = <TabContent tab={selectedTab} />}
            </div>
        </section>
    );
};