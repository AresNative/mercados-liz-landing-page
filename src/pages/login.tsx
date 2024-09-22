import { useImperativeHandle, useRef } from 'react';
import {
    IonButton,
    IonModal,
    IonContent,
    IonToolbar,
} from '@ionic/react';
import styles from "@/pages/login.module.css";
import { UserPlus, X } from 'lucide-react';


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
            <div style={{ paddingTop: "2rem" }} >

                <IonModal ref={modalRef} >
                    <IonContent >
                        <IonToolbar >
                            {children}
                            <X color="red" onClick={closeModal} />
                        </IonToolbar>
                    </IonContent>


                </IonModal>
            </div>
        </>
    );
}



