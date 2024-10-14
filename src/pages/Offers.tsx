import Page from "@/template/page";
import Styles from "./Offers.module.css";
import { UserCard } from "@/components/displays/card";
import { IonCardContent } from "@ionic/react";


const Offers = () => {
    return (
        <Page titulo="Ofertas">
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
                    <h1 className="titulos">Nuestros Combos</h1>
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