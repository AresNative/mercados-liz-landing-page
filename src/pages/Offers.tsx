import Page from "@/template/page";
import Styles from "./Offers.module.css";
import { UserCard } from "@/components/displays/card";
const Offers = () => {
    return (
        <Page titulo="Ofertas">
            <nav className={Styles["nav"]}>
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
        </Page>

    )
}
export default Offers;