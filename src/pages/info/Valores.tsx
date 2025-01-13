import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle } from '@ionic/react';
import Styles from "@/pages/ofertas/Offers.module.css";

const valores = [
    {
        id: 1,
        name: 'Misión.',
        description: 'Lograr que nuestros clientes experimenten en cada visita un modo de compra fácil y practico, basándolo en su total satisfacción en el buen trato, servicio y atención personalizada, poniéndolo como nuestra razón de ser. ',
        items: [

        ],
    },
    {
        id: 2,
        name: 'Visión.',
        description: 'Ser líder en la rama del Autoservicio en cada región, teniendo en cuenta la importancia del cliente, logrando crecimiento con cimientos firmes e innovando día a día.',
        items: [

        ],
    },
    {
        id: 3,
        name: 'Valores.',
        description: "",
        items: [
            'Trabajar como un solo equipo.',
            'Actuar con integridad.',
            'Etica.',
            'Compromiso.',
            'Calidad en el servicio.',

        ],

    },
];

const ValoresSection: React.FC = () => {
    return (
        <div>
            <h2 className="titulos" z-index="100%" style={{ marginTop: "6rem" }}>Nosotros y nuestros Valores</h2>
            <div className={Styles["divcom"]}>
                {valores.map((val) => (
                    <IonCard key={val.id} className={Styles["cardcom"]}>
                        <IonCardHeader>
                            <div className={Styles["cardheader"]}>
                                <div>
                                    <IonCardTitle className={Styles["divheaderval"]}>{val.name}</IonCardTitle>
                                    <div className={Styles["divheader"]}>
                                    </div>
                                </div>
                            </div>
                        </IonCardHeader>
                        {<IonCardSubtitle className={Styles["subtitleval"]}>{val.description}</IonCardSubtitle>}
                        <ul className={Styles["ulcomboval"]}>
                            {val.items.map((item, index) => (
                                <li key={index} className={Styles["licomboval"]}>
                                    <div style={{
                                        marginLeft: "-1rem"
                                    }} className={Styles["spancombo"]}>
                                        <span className={Styles["subtitleval"]}></span>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </IonCard>
                ))}
            </div>

        </div>
    );
};

export default ValoresSection;