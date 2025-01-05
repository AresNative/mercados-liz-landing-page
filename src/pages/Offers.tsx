import Page from "@/template/page";
import Styles from "./Offers.module.css";
import PdfViewer from "./PdfViewer";
import OffersCarousel from "./OffersCarousel";

import ComboSection from "./CombosSection";

const Offers = () => {
    return (
        <Page /* */>
            <section>
                <OffersCarousel />
            </section>
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
                <ComboSection />
            </section>
        </Page>
    )
}
export default Offers;



