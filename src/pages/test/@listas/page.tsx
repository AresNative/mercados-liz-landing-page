import { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonItem,
    IonLabel,
    IonIcon,
} from '@ionic/react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { barcodeOutline } from 'ionicons/icons';
export default function ListasPage() {
    const [scanResult, setScanResult] = useState<any>(null);

    const scanBarcode = async () => {
        try {
            const result = await BarcodeScanner.scan();
            if (!result.cancelled) {
                setScanResult(result);
            }
        } catch (error) {
            console.error('Error al escanear:', error);
            setScanResult({ content: 'Error en el escaneo', format: 'Error' });
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Lector de Códigos</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    justifyContent: 'center'
                }}>
                    <IonButton
                        onClick={scanBarcode}
                        color="primary"
                        size="large"
                    >
                        <IonIcon icon={barcodeOutline} slot="start" />
                        Escanear Código
                    </IonButton>

                    {scanResult && (
                        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                            <IonItem>
                                <IonLabel>Contenido: {scanResult.text}</IonLabel>
                            </IonItem>
                            <IonItem>
                                <IonLabel>Formato: {scanResult.format}</IonLabel>
                            </IonItem>
                        </div>
                    )}
                </div>
            </IonContent>
        </IonPage>
    );
}