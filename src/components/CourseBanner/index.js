import "./CourseBanner.css"

export default function() {
    return (
        <section className="course-banner">
            <div className="content__container">
                <img src="https://imagens.3dlab.com.br/wp-content/uploads/2023/05/Ender-3-Neo-3-1.png"></img>
                <div className="course-banner__text">
                    <ul>
                        <li className="course-banner__li">
                            Monte sua <span>própria impressora 3D</span>
                        </li>
                        <li className="course-banner__li">
                            Aprenda <span>parâmetros</span>de impressão
                        </li>
                        <li className="course-banner__li">
                            Entenda o software de <span>fatiamento</span>
                        </li>
                        <li className="course-banner__li">
                            Saiba como dar <span>acabamento</span> nas suas impressões
                        </li>
                        <li className="course-banner__li">
                            Aprenda a <span>precificar</span> suas impressões
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}