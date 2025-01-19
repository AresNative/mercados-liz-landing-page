import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent } from '@ionic/react';
import { ShoppingBasket, Timer, Percent } from 'lucide-react';
import Styles from "@/pages/ofertas/Offers.module.css";

const combos = [
    {
        id: 1,
        name: 'Combo Asada 3kg',
        price: '$505.84',
        originalPrice: '$120',
        /*  description: 'Essential groceries for a family of 4', */
        items: [
            'Carne preparada para asar 3kg',
            'Carbon El terco 3kg',
            'Plato con Division 20pz',
            'Refresco Crush Mandarina 2lt',
            'Paquete de vasos 10oz con 25pz',
            'Tortillas de maiz Mercado Liz 2kg'
        ],
        savings: '33% OFF',
        validUntil: 'Valid until Sunday',

    },
    {
        id: 2,
        name: 'Combo Asada 5kg',
        price: '$799.00',
        originalPrice: '$50',
        /*  description: 'Complete breakfast essentials', */
        items: [
            'Carne preparada para asar 5kg',
            'Carbon El terco 3kg',
            'Plato con Division 20pz',
            'Queso Monterry 400gr',
            'Refresco Crush Mandarina 2lt',
            'Paquete de vasos 10oz con 25pz',
            'Tortillas de maiz Mercado Liz 2kg'
        ],
        savings: '30% OFF',
        validUntil: 'Valid until Saturday'
    },
    {
        id: 3,
        name: 'Combo Asada 7kg',
        price: '$1,049.81',
        originalPrice: '$120',
        /* description: 'Essential groceries for a family of 4', */
        items: [
            'Carne preparada para asar 7kg',
            'Carbon El terco 3kg',
            'Plato con Division 20pz',
            'Queso Monterry 500gr',
            'Refresco Crush Mandarina 2lt',
            'paquete de 100pz de  servilletas ',
            'Paquete de vasos 10oz con 25pz',
            'Tortillas de maiz Mercado Liz 1kg'
        ],
        savings: '33% OFF',
        validUntil: 'Valid until Sunday',
        /*  imageUrl: 'https://media.istockphoto.com/id/1195743934/es/vector/lindo-dise%C3%B1o-vectorial-de-car%C3%A1cter-panda.jpg?s=612x612&w=0&k=20&c=0CS46nLvvKoLpxo6tv68IxKBR7GEHXV-hq26PnBnNuY=' */
    },
    {
        id: 4,
        name: 'Combo Menudo',
        price: '$433.47',
        originalPrice: '$120',
        /* description: 'Essential groceries for a family of 4', */
        items: [
            'Menudo de res Americano 3kg',
            'Maiz Blanco la costeña 3kg',
            'Patita de res 1.5kg',
            'Plato pozolero 1pq de 25pz',
            'Totopos Naturales Mercado Liz',
        ],
        savings: '33% OFF',
        validUntil: 'Valid until Sunday',
        /*  imageUrl: 'https://media.istockphoto.com/id/1195743934/es/vector/lindo-dise%C3%B1o-vectorial-de-car%C3%A1cter-panda.jpg?s=612x612&w=0&k=20&c=0CS46nLvvKoLpxo6tv68IxKBR7GEHXV-hq26PnBnNuY=' */
    },
    {
        id: 5,
        name: 'Combo Pozole',
        price: '$455.59',
        originalPrice: '$120',
        /* description: 'Essential groceries for a family of 4', */
        items: [
            'Espinazo de puerco 6kg',
            'Maiz Blanco la costeña 3kg',
            'Manita de puerco 3k',
            'Plato pozolero 1pq de 25pz',
            'Totopos Naturales Mercado Liz',
            'Refresco Crush Mandarina 2lt',
        ],
        savings: '33% OFF',
        validUntil: 'Valid until Sunday',
        /*  imageUrl: 'https://media.istockphoto.com/id/1195743934/es/vector/lindo-dise%C3%B1o-vectorial-de-car%C3%A1cter-panda.jpg?s=612x612&w=0&k=20&c=0CS46nLvvKoLpxo6tv68IxKBR7GEHXV-hq26PnBnNuY=' */
    },

];

const ComboSection: React.FC = () => {
    return (
        <div>
            <p className={Styles["p"]}>¿Conoces nuestros combos?</p>
            <div className={Styles["divcom"]}>
                {combos.map((combo) => (
                    <IonCard key={combo.id} className={Styles["cardcom"]}>
                        <IonCardHeader>
                            <div className={Styles["cardheader"]}>
                                <div>
                                    <IonCardTitle className={Styles["divheader"]}>{combo.name}</IonCardTitle>
                                    <div className={Styles["divheader"]}>
                                        <span className={Styles["spanpre"]}>{combo.price}</span>
                                    </div>
                                </div>
                                {/*    <IonBadge color="liz" className={Styles["badge"]}>
                                {combo.savings}
                            </IonBadge> */}
                            </div>
                            {/*  <IonCardSubtitle className={Styles["subtitle"]}>{combo.description}</IonCardSubtitle> */}
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
                                        {/*  <Timer />
                                        <span>{combo.validUntil}</span> */}
                                    </div>
                                    <div className={Styles["divcombo2"]}>
                                        <Percent className={Styles["percent"]} />
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