import Page from "@/template/page";
import './HistoriaPage.css';
import { Cake, Construction, HousePlus, PartyPopper, ShoppingBasket, ShoppingCart, Store } from "lucide-react";

const HistoriaPage = () => {
    return (
        <Page/*  titulo="Historia" */>
            {/* Icono de página en construcción */}
            <h2 className="titulos" z-index="100%" style={{ marginTop: "6rem" }}>Conoce nuestra historia </h2>
            {/* Línea de tiempo */}
            <div className="timeline ">

                <div className="timeline-event ">
                    <div className="timeline-icon" style={{ backgroundColor: '#FF5656' }}>
                        <div className="container">
                            <img src="/merc3.jpg" />
                        </div>
                        <ShoppingBasket size={40} />

                    </div>

                    <div className="timeline-content">
                        <h3>1990 - Inicio tienda </h3>
                        <p> Lorem ipsum dolaaaaaaor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#FFA500' }}>
                        <div className=" container">

                            <img src="/uvas.png" />
                        </div>
                        <Store size={40} />
                    </div>

                    <div className="timeline-content">
                        <h3>2000 - Creacion de mercado</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam perferendis, dolor molestias suscipit cum adipisci, a officiis iure alias eveniet, deserunt sed placeat veniam optio esse libero rem! Repellat, in!</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#32CD32' }}>
                        <ShoppingCart size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2005 - Segunda sucursal</h3>
                        <p></p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#1E90FF' }}>
                        <Cake size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2010 - Aniversario  </h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt
                        </p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#6A5ACD' }}>
                        <HousePlus size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2020 - Inaguracion mayoreo</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt volup tates ex voluptas ab doloremque .</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#8A2BE2' }}>
                        <PartyPopper size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2022 - Aniversario #8</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque .</p>
                    </div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#1E90FF' }}>
                        <Construction size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2025 - Proxima sucursal</h3>
                        <p>Lorem ipsum sit, amet consectetur adipisicing elit.
                            quasi in nesciunt voluptates ex voluptas ab doloremque .</p>
                    </div>
                </div>
                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#1E90FF' }}>
                        <Construction size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2026 - Proxima sucursal</h3>
                        <p></p>
                    </div>
                </div>

            </div>
            <div>
                <section>
                    <h1> </h1>
                </section>
            </div>

        </Page>
    );
}

export default HistoriaPage;
