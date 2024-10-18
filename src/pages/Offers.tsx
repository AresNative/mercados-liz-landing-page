import Page from "@/template/page";
import Styles from "./Offers.module.css";
import { UserCard } from "@/components/displays/card";
import { IonButton, IonLabel } from "@ionic/react";
import { BookOpenCheck, ShoppingBasket, } from "lucide-react";


const AbrirPDF = () => {
    const urlPDF = ''; // Ruta al archivo pdf
    window.open(urlPDF, '_blank'); // Abre el pdf en una nueva pestaña
};

const Offers = () => {
    return (
        <Page /* titulo="Ofertas" */>

            <nav className={Styles["nav"]}>
                <ul className={Styles["ul"]}>
                    <li>
                        <UserCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB4JLjNoNbV3cFRQ7OYalFLZPb6-rPcsXKA&s" email="" name="" />
                    </li>
                    <li>
                        <UserCard avatarUrl="" email="" name="" />
                    </li>
                    <li>
                        <UserCard avatarUrl="" email="" name="" />
                    </li>
                </ul>
                <ul className={Styles["ul"]}>
                    <li>
                        <UserCard avatarUrl="" email="" name="" />
                    </li>
                    <li>
                        <UserCard avatarUrl="" email="" name="" />
                    </li>
                    <li>
                        <UserCard avatarUrl="" email="" name="" />
                    </li>
                    <li>
                        <UserCard avatarUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB4JLjNoNbV3cFRQ7OYalFLZPb6-rPcsXKA&s" email="" name="" />
                    </li>
                </ul>
            </nav>

            <div className={Styles["icon"]}>
                <IonButton shape="round" fill="clear" onClick={AbrirPDF}>
                    <IonLabel style={{ display: "flex", alignItems: "center", gap: "2px" }} >
                        <div className={Styles["div"]}>
                            <h2 className="titulos2" style={{ display: "flex", alignItems: "center", gap: "2px" }}>Conoce todas las ofertas <BookOpenCheck color="purple" size={80} className="icons" /> </h2>
                        </div>
                    </IonLabel>
                </IonButton>
            </div>

            <section className={Styles["content"]}>
                <div className={Styles["marca"]}>
                    <h2>marca</h2>
                    <p></p>
                </div>
                <ul className={Styles["productos"]}>
                    <li></li>
                    <li></li>
                    <li></li>

                </ul>
            </section>

            <section className={Styles["contentcom"]}>
                <div className={Styles["marcacom"]}>
                    <h2 className="titulos">Nuestros Combos</h2>
                    <h3 className="sub-titulos2">Conoce nuestros combos especiales para ti </h3>
                </div>
                <ul className={Styles["productoscom"]}>
                    <li>Combo1</li>

                    <li> combo2 </li>

                    <li>combo 3</li>

                </ul>
            </section>
        </Page>

    )
}
export default Offers;