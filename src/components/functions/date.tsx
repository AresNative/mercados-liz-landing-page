import { IonDatetime } from '@ionic/react';
import { useState } from 'react';

export function DatePicker(): JSX.Element {
    const [selectedDate, setSelectedDate] = useState<string>("");

    return (
        <IonDatetime
            className='ion-date'
            presentation="date"
            onIonChange={(e: any) => setSelectedDate(e.detail.value!)}
            value={selectedDate}
            color={"rose"}
        />
    );
}