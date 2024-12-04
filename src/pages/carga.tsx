import { IonModal, IonSpinner } from "@ionic/react";
import styles from "@/pages/carga.module.css";

interface CargaProps {
    isOpen: boolean;
    onClose?: () => void;
}

const Carga: React.FC<CargaProps> = ({ isOpen, onClose }) => {
    return (
        <IonModal isOpen={isOpen} onDidDismiss={onClose}>
            <div className={styles["carga"]}>
                <IonSpinner name="crescent" />
                <p>Procesando tu solicitud...</p>
            </div>
        </IonModal>
    );
};

export default Carga;