import { IconCard } from "@/components/displays/card-icon";
import Page from "@/template/page";
import { ShoppingCart } from "lucide-react";
import Styles from "./Offers.module.css";
const Offers = () => {
    return (
        <Page titulo="Ofertas">

            <nav className={Styles["nav"]}>
                <ul className={Styles["ul"]}>
                    <li>
                        <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >
                            <ShoppingCart color='var(--primary)' size={40} />
                        </IconCard>
                    </li>
                    <li>
                        <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >
                            <ShoppingCart color='var(--primary)' size={40} />
                        </IconCard>
                    </li>
                    <li>
                        <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >
                            <ShoppingCart color='var(--primary)' size={40} />
                        </IconCard>
                    </li>
                    <li>
                        <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >
                            <ShoppingCart color='var(--primary)' size={40} />
                        </IconCard>
                    </li>
                </ul>

                <ul className={Styles["ul"]}>
                    <li>
                        <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >
                            <ShoppingCart color='var(--primary)' size={40} />
                        </IconCard>
                    </li>
                    <li>
                        <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >
                            <ShoppingCart color='var(--primary)' size={40} />
                        </IconCard>
                    </li>
                    <li>
                        <IconCard title='Selección Local' text='Productos auténticos del Valle de Guadalupe' >
                            <ShoppingCart color='var(--primary)' size={40} />
                        </IconCard>
                    </li>
                </ul>
            </nav>

        </Page>
    )
}
export default Offers;