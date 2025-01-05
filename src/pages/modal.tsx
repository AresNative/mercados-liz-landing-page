import { IonModal } from '@ionic/react';
import styles from "@/pages/modal.module.css";

interface ModalProps {
    children?: any;
    modalRef: React.RefObject<HTMLIonModalElement>;
    closeModal: () => void;
}
export function ModalBase({ children, modalRef, closeModal }: ModalProps) {
    return (
        <>
            <div style={{ paddingTop: "0rem" }}  >
                <IonModal ref={modalRef} className={styles["modal"]} >
                    <div className={styles["modal2"]}>
                        {children}
                    </div>
                </IonModal>
            </div>
        </>
    );
}