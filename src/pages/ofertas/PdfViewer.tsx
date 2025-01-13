import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { pricetagsOutline } from 'ionicons/icons';
import Styles from "@/pages/ofertas/Offers.module.css";


interface PdfViewerProps {
    pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl }) => {
    const handleViewPdf = () => {
        window.open(pdfUrl, '_blank');
    };

    return (
        <div className={Styles["pdfdiv"]}>
            <div className={Styles["div2"]}>

                <h3 className={Styles["h3"]}>
                    Conoce todas nuestras ofertas para ti
                </h3>


                <div className={Styles["divbo"]}>
                    <IonButton
                        color={"liz"}
                        onClick={handleViewPdf}
                        className={Styles["botton"]}
                    >
                        <IonIcon icon={pricetagsOutline} slot="start" />
                        {/*  <ion-icon name="pricetagsoutline"></ion-icon> */}
                        Ofertas
                    </IonButton>

                    <IonButton
                        fill="outline"
                        color={"liz"}
                        onClick={handleViewPdf}
                        className={Styles["botton"]}
                    >
                        <IonIcon icon={pricetagsOutline} slot="start" />
                        Descargar Ofertas
                    </IonButton>
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;