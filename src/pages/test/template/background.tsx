import { Menu } from "@/pages/menu";
import { IonPage } from "@ionic/react";

import "@/pages/test/utils/assets/init-assets.css";
import "@/pages/test/utils/assets/animations.css";
export default function Background({ children }: { children: React.ReactNode }) {

    return (
        <>
            <Menu />
            <IonPage id="main-content" className="relative isolate overflow-hidden h-full bg-white">

                <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
                <div className="absolute inset-y-0 right-1/2 -z-10 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

                <main>{children}</main>

            </IonPage>
        </>
    );
}