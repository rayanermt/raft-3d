import "./Process.css"

import IdeaIcon from "../../assets/lightbulb.svg";
import CheckIcon from "../../assets/check.svg";
import PrototypeIcon from "../../assets/model-cube.svg";
import GearIcon from "../../assets/gear.svg";


export default function Process() {
    return (
        <section className="process">
            <h2 className="heading_2">Como funciona a prototipagem?</h2>
            <p className="body">Conheça o jeito Raft de prototipar</p>

            <div className="process__cards-container">
                <div className="process__card">
                    <div className="process__card-header">
                        <img className="process__card-figure" alt="" src={IdeaIcon}/>
                        <h3 className="heading_3">Concepção</h3>
                    </div>
                    <p className="body process__body">O que você quer inventar já foi inventado? Há algo que necessita mudar? A sua ideia não precisa morrer com você!</p>
                </div>
                <div className="vl"></div>
                <div className="process__card">
                    <div className="process__card-header">
                        <img className="process__card-figure" alt="" src={CheckIcon}/>
                        <h3 className="heading_3">Requisitos</h3>
                    </div>
                        <p className="body process__body">Para atender os objetivos do seu projeto é necessário determinar, documentar e gerenciar suas necessidades.</p>
                </div>
                <div className="vl"></div>
                <div className="process__card">
                    <div className="process__card-header">
                        <img className="process__card-figure" alt="" src={PrototypeIcon}/>
                        <h3 className="heading_3">Protótipo</h3>
                    </div>
                        <p className="body process__body">É o produto de trabalho da fase de planejamento do seu projeto. O protótipo pode ser um produto, um serviço ou um sistema.</p>
                </div>
                <div className="vl"></div>
                <div className="process__card">
                    <div className="process__card-header">
                        <img className="process__card-figure" alt="" src={GearIcon}/>
                        <h3 className="heading_3">Resultado</h3>
                    </div>
                        <p className="body process__body">Com o protótipo em mãos você pode validar sua ideia, testar funcionalidades e entender possíveis falhas.</p>
                </div>

            </div> 
        </section>
    );
}