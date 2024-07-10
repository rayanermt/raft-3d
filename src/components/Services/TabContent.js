import chevronRight from "../../assets/chevron-right.svg"

export default function TabContent({ tab }) {
    return(
        <div className="tab-content">
            <img src={tab.img} alt={tab.header} className="service__image"></img>
            <div>
                <h3 className="heading_3">{tab.header}</h3>
                <h4 className="heading_4">{tab.subheader}</h4>
                <p className="body">{tab.text}</p>
                <button className="service__button">
                    {tab.buttonLabel}
                    <img src={chevronRight}></img>
                </button>
            </div>
        </div>
    );
};