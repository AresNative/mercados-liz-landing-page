import Page from "@/template/page";
import Styles from "./Offers.module.css";
import { UserCard } from "@/components/displays/card";
import { IonButton, IonLabel } from "@ionic/react";
import { BookOpenCheck } from "lucide-react";
import PdfViewer from "./PdfViewer";
import OffersCarousel from "./OffersCarousel";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import ComboSection from "./CombosSection";



const AbrirPDF = () => {
    const urlPDF = ''; // Ruta al archivo pdf
    window.open(urlPDF, '_blank'); // Abre el pdf en una nueva pestaña
};

const Offers = () => {
    function rutas(link: string) {
        return (
            <UserCard avatarUrl={link} />)
    }
    //Ofertas parte1
    const ruta: any = [
        { link: "https://www.cocacolaep.com/assets/Uploads/resources/Coca-Cola-1210.jpg" },
        { link: "https://cdn.shopify.com/s/files/1/1547/6619/files/logo.png?v=1698644298" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgEuX0hSXHfBeGvSHwOyoXcd-sJOh96GvQQ&s" },

    ]
    //Ofertas parte 2
    const ruta2: any = [
        { link: "https://www.cocacolaep.com/assets/Uploads/resources/Coca-Cola-1210.jpg" },
        { link: "https://cdn.shopify.com/s/files/1/1547/6619/files/logo.png?v=1698644298" },
        { link: "https://cdn.shopify.com/s/files/1/1547/6619/files/logo.png?v=1698644298" },

    ]
    return (
        <Page /* titulo="Ofertas" */>
            <section>
                <OffersCarousel />
            </section>

            {/* Pueba boton oferta  */}

            {/* PDF Catalog Section */}
            <section className="mb-8">
                <PdfViewer pdfUrl="https://example.com/market-catalog.pdf" />
            </section>

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

            <section className="mb-8">
                <ComboSection  />
            </section>
        </Page>
    )
}
export default Offers;



{/* PDF Catalog Section */ }
{/* <section className="mb-8">
    <PdfViewer pdfUrl="https://example.com/market-catalog.pdf" />
</section> */}