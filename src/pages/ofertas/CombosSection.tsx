import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, } from '@ionic/react';
import { ShoppingBasket, Timer } from 'lucide-react';
import Styles from "@/pages/ofertas/Offers.module.css";

const combos = [
    {
        id: 1,
        name: 'Combo Asada 3kg',
        price: '$505.84',
        originalPrice: '$556.42',
        items: [
            'Carne preparada para asar 3kg',
            'Carbón El Terco 3kg',
            'Plato con división 20pz',
            'Refresco Crush Mandarina 2lt',
            'Paquete de vasos 10oz con 25pz',
            'Tortillas de maíz Mercado Liz 2kg'
        ],
        savings: '10% Desc',
        validUntil: 'Válido solo sábado y domingo',
    },
    {
        id: 2,
        name: 'Combo Asada 5kg',
        price: '$799.00',
        originalPrice: '$878.90',
        items: [
            'Carne preparada para asar 5kg',
            'Carbón El Terco 3kg',
            'Plato con división 20pz',
            'Queso Monterry 400gr',
            'Refresco Crush Mandarina 2lt',
            'Paquete de vasos 10oz con 25pz',
            'Tortillas de maíz Mercado Liz 2kg'
        ],
        savings: '10% Desc',
        validUntil: 'Válido solo sábado y domingo'
    },
    {
        id: 3,
        name: 'Combo Asada 7kg',
        price: '$1,049.81',
        originalPrice: '$1,154.79',
        items: [
            'Carne preparada para asar 7kg',
            'Carbón El Terco 3kg',
            'Plato con división 20pz',
            'Queso Monterry 500gr',
            'Refresco Crush Mandarina 2lt',
            'Paquete de 100pz de  servilletas ',
            'Paquete de vasos 10oz con 25pz',
            'Tortillas de maíz Mercado Liz 1kg'
        ],
        savings: '10% Desc',
        validUntil: 'Válido solo sábado y domingo',
        /*  imageUrl:'https://media.istockphoto.com/id/1195743934/es/vector/lindo-dise%C3%B1o-vectorial-de-car%C3%A1cter-panda.jpg?s=612x612&w=0&k=20&c=0CS46nLvvKoLpxo6tv68IxKBR7GEHXV-hq26PnBnNuY=' */
    },
    {
        id: 4,
        name: 'Combo Menudo',
        price: '$433.47',
        originalPrice: '$476.81',
        items: [
            'Menudo de res Americano 3kg',
            'Maíz blanco La Costeña 3kg',
            'Patita de res 1.5kg',
            'Plato pozolero 1pq de 25pz',
            'Totopos naturales Mercado Liz',
        ],
        savings: '10% Desc',
        validUntil: 'Válido solo sábado y domingo',
        /*  imageUrl:'https://media.istockphoto.com/id/1195743934/es/vector/lindo-dise%C3%B1o-vectorial-de-car%C3%A1cter-panda.jpg?s=612x612&w=0&k=20&c=0CS46nLvvKoLpxo6tv68IxKBR7GEHXV-hq26PnBnNuY=' */
    },
    {
        id: 5,
        name: 'Combo Pozole',
        price: '$455.59',
        originalPrice: '$501.14',
        items: [
            'Espinazo de puerco 6kg',
            'Maíz blanco La Costeña 3kg',
            'Manita de puerco 3k',
            'Plato pozolero 1pq de 25pz',
            'Totopos naturales Mercado Liz',
            'Refresco Crush Mandarina 2lt',
        ],
        savings: '10% Desc',
        validUntil: 'Válido solo sábado y domingo',
        /*  imageUrl:'https://media.istockphoto.com/id/1195743934/es/vector/lindo-dise%C3%B1o-vectorial-de-car%C3%A1cter-panda.jpg?s=612x612&w=0&k=20&c=0CS46nLvvKoLpxo6tv68IxKBR7GEHXV-hq26PnBnNuY=' */
    },
];

const ComboSection: React.FC = () => {
    return (
        <div>
            <p className={Styles["p"]}>¿Conoces nuestros combos?</p>
            <p className={Styles["p2"]}>Ahorra tiempo, dinero y esfuerzo.</p>
            <div className={Styles["divcom"]}>
                {combos.map((combo) => (
                    <IonCard key={combo.id} className={Styles["cardcom"]}>
                        <IonCardHeader>
                            <div className={Styles["cardheader"]}>
                                <div>
                                    <IonCardTitle className={Styles["divheader"]}>{combo.name}</IonCardTitle>
                                    <div className={Styles["divheader"]}>
                                        <span className={Styles["spanpre"]}>{combo.price}</span>
                                        <span className={Styles["spanpreOri"]}>{combo.originalPrice}</span>
                                    </div>
                                </div>
                                {/*   <IonBadge color="liz" className={Styles["badge"]}>{combo.suc}</IonBadge> */}
                            </div>
                        </IonCardHeader>
                        <IonCardContent>
                            <div className={Styles["divcard"]}>
                                <div className={Styles["divcardcont"]}>
                                    <h4 className={Styles["h4"]}>
                                        <ShoppingBasket className={Styles["iconofers"]} />
                                        Que contiene
                                    </h4>
                                    <ul className={Styles["ulcomb"]}>
                                        {combo.items.map((item, index) => (
                                            <li key={index} className={Styles["licombo"]}>
                                                <span className={Styles["spancombo"]} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={Styles["divcomb2"]}>
                                    <div className={Styles["divcombo2"]}>
                                        <Timer />
                                        <span>{combo.validUntil}</span>
                                    </div>
                                    <div className={Styles["divcombo2"]}>
                                        <span className={Styles["spancomb"]}>{combo.savings}</span>
                                    </div>
                                </div>
                            </div>
                        </IonCardContent>
                    </IonCard>
                ))}
            </div>
        </div>
    );
};

export default ComboSection;