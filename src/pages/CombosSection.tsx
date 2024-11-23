import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonButton, IonBadge } from '@ionic/react';
import { ShoppingBasket, Timer, Percent } from 'lucide-react';

const combos = [
    {
        id: 1,
        name: 'Weekly Essentials Pack',
        price: '$79.99',
        originalPrice: '$120',
        description: 'Essential groceries for a family of 4',
        items: [
            '2kg Rice',
            '1kg Pasta',
            'Fresh Vegetables Pack',
            '2L Milk',
            'Dozen Eggs',
            'Bread (2 loaves)'
        ],
        savings: '33% OFF',
        validUntil: 'Valid until Sunday'
    },
    {
        id: 2,
        name: 'Breakfast Bundle',
        price: '$34.99',
        originalPrice: '$50',
        description: 'Complete breakfast essentials',
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
        name: 'Fresh Produce Box',
        price: '$45.99',
        originalPrice: '$65',
        description: 'Farm-fresh vegetables and fruits',
        items: [
            'Seasonal Fruits',
            'Mixed Vegetables',
            'Fresh Herbs',
            'Organic Greens',
            'Root Vegetables',
            'Citrus Pack'
        ],
        savings: '29% OFF',
        validUntil: 'Valid this week'
    }
];

const ComboSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {combos.map((combo) => (
                <IonCard key={combo.id} className="overflow-hidden">
                    <IonCardHeader>
                        <div className="flex justify-between items-start mb-3">
                            <div>
                                <IonCardTitle className="text-xl font-bold mb-1">{combo.name}</IonCardTitle>
                                <div className="flex items-center gap-2">
                                    <span className="text-2xl font-bold text-green-600">{combo.price}</span>
                                    <span className="text-sm line-through text-gray-400">{combo.originalPrice}</span>
                                </div>
                            </div>
                            <IonBadge color="success" className="text-sm">
                                {combo.savings}
                            </IonBadge>
                        </div>
                        <IonCardSubtitle className="text-sm text-gray-600">{combo.description}</IonCardSubtitle>
                    </IonCardHeader>

                    <IonCardContent>
                        <div className="space-y-4">
                            <div className="bg-gray-50 p-3 rounded-lg">
                                <h4 className="font-semibold mb-2 flex items-center gap-2">
                                    <ShoppingBasket className="w-4 h-4 text-green-600" />
                                    Included Items:
                                </h4>
                                <ul className="text-sm text-gray-600 grid grid-cols-2 gap-2">
                                    {combo.items.map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-500">
                                <div className="flex items-center gap-1">
                                    <Timer className="w-4 h-4" />
                                    <span>{combo.validUntil}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Percent className="w-4 h-4 text-green-600" />
                                    <span className="text-green-600 font-semibold">{combo.savings}</span>
                                </div>
                            </div>

                            <IonButton expand="block" className="mt-4">
                                Add to Cart
                            </IonButton>
                        </div>
                    </IonCardContent>
                </IonCard>
            ))}
        </div>
    );
};

export default ComboSection;