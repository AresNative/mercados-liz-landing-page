import { useImperativeHandle, useRef } from 'react';
import {IonModal} from '@ionic/react';
import styles from "@/pages/login.module.css";
import { X } from 'lucide-react';


interface LogInProps {
    children?: any;
    modalRef: React.RefObject<HTMLIonModalElement>;
    closeModal: () => void;
}

export function ModalBase({ children, modalRef, closeModal }: LogInProps) {

    /* const modal = useRef<HTMLIonModalElement>(null);

    useImperativeHandle(ref, () => ({
        present: () => modal.current?.present(),
        dismiss: () => modal.current?.dismiss(),
    }));
 
    function dismiss() {
        modal.current?.dismiss();
    }*/
    return (
        <>
            <div style={{ paddingTop: "0rem" }}  >
                <IonModal ref={modalRef} className={styles["modal"]}>
                    <div className={styles["modal2"]}>
                        {children}
                        <X color="red" onClick={closeModal} style={{
                            position:"absolute",
                            top:"10px",
                            right:"10px",
                            cursor: 'pointer'
                        }}
             />
                    </div>


                </IonModal>
            </div>
        </>
    );
}
