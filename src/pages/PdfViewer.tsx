import React from 'react';
import { IonButton, IonIcon } from '@ionic/react';
import { bagHandleOutline, documentOutline, downloadOutline, pricetagsOutline } from 'ionicons/icons';
import Styles from "./Offers.module.css";


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

                <p className={Styles["parfo"]}>
                    {/*  Dale un vistazo a nuestras ofertas */}
                </p>

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
                        Download PDF
                    </IonButton>
                </div>
            </div>
        </div>
    );
};

export default PdfViewer;