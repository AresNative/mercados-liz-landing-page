import Page from "@/template/page";
import Styles from "./Offers.module.css";
import { UserCard } from "@/components/displays/card";
import { IonButton, IonLabel } from "@ionic/react";
import { BookOpenCheck } from "lucide-react";


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

            {/* Pueba boton oferta  */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <IonButton shape="round" fill="clear" onClick={AbrirPDF}>
                    <IonLabel style={{ color: "purple", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <h1 style={{ color: "purple", fontFamily: "'Lobster', cursive", fontSize: "3rem", margin: 0 }}>
                            Nuestras Ofertas
                        </h1>
                        <BookOpenCheck color="purple" size={80}  />
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
                    <p style={{ display: "flex", alignItems: "center", gap: "2px" }}>Conoce nuestros combos especiales para ti </p>
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