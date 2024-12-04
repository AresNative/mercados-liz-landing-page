import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonBadge } from '@ionic/react';
import { ShoppingBasket, Timer, Percent } from 'lucide-react';
import Styles from "./Offers.module.css";

const combos = [
    {
        id: 1,
        name: 'Weekly Essentials Pack',
        price: '$79.99',
        originalPrice: '$120',
        /*  description: 'Essential groceries for a family of 4', */
        items: [
            '2kg Rice',
            '1kg Pasta',
            'Fresh Vegetables Pack',
            '2L Milk',
            'Dozen Eggs',
            'Bread (2 loaves)'
        ],
        savings: '33% OFF',
        validUntil: 'Valid until Sunday',
        
    },
    {
        id: 2,
        name: 'Breakfast Bundle',
        price: '$34.99',
        originalPrice: '$50',
       /*  description: 'Complete breakfast essentials', */
        items: [
            'Cereal Box',
            '2L Milk',
            'Fresh Orange Juice',
            'Coffee Pack',
            'Bread',
            'Jam Jar'
        ],
        savings: '30% OFF',
        validUntil: 'Valid until Saturday'
    },
    {
        id: 3,
        name: 'Weekly Essentials Pack',
        price: '$79.99',
        originalPrice: '$120',
        /* description: 'Essential groceries for a family of 4', */
        items: [
            '2kg Rice',
            '1kg Pasta',
            'Fresh Vegetables Pack',
            '2L Milk',
            'Dozen Eggs',
            'Bread (2 loaves)'
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
                                   {/*  <span className={Styles["spanofer"]}>{combo.originalPrice}</span> */}
                                </div>
                            </div>
                         {/*    <IonBadge color="liz" className={Styles["badge"]}>
                                {combo.savings}
                            </IonBadge> */}
                        </div>
                       {/*  <IonCardSubtitle className={Styles["subtitle"]}>{combo.description}</IonCardSubtitle> */}
                    </IonCardHeader>

                    <IonCardContent>
                        {/* <div className={Styles["divimage"]}>
                            <img
                                src={combo.imageUrl}
                                alt={combo.name}
                                className={Styles["comboImage"]}
                            />
                        </div> */}
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
                                    <Timer /* className="w-4 h-4" */ />
                                    <span>{combo.validUntil}</span>
                                </div>
                                <div className={Styles["divcombo2"]}>
                                    <Percent className={Styles["percent"]} />
                                    <span className={Styles["spancomb"]}>{combo.savings}</span>
                                </div>
                            </div>

                           {/*  <IonButton expand="block" className={Styles["bottoncomb"]}>
                                Add to Cart
                            </IonButton> */}
                        </div>
                    </IonCardContent>
                </IonCard>
            ))}
            </div>
            
        </div>
    );
};

export default ComboSection;