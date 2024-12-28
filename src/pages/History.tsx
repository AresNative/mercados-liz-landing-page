import Page from "@/template/page";
import './HistoriaPage.css';
import { HousePlus, Loader, Pickaxe, ShoppingBasket, ShoppingCart, Store, Truck, Users } from "lucide-react";

import ValoresSection from "./Valores";

const HistoriaPage = () => {
    return (
        <Page/*  titulo="Historia" */>
            <section style={{ marginTop: "5rem", marginBottom: "1rem" }}>
                <ValoresSection></ValoresSection>
            </section>
            <section style={{ marginTop: "1rem", borderTop: "1px solid rgba(180, 180, 180, 0.43)" }}> </section>

            {/* Icono de página en construcción */}
            <h2 className="titulos" z-index="100%" style={{ marginTop: "2rem" }}>Nuestra historia. </h2>
            {/* Línea de tiempo */}
            <div className="timeline ">

                <div className="timeline-event ">
                    <div className="timeline-icon" style={{ backgroundColor: '#FF5656' }}>
                        <div className="container">
                            <img src="/merc3.jpg" />
                        </div><ShoppingBasket size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>1982 - Nuestros Inicios. </h3>
                        <p>
                            Todo inicio en un local con productos de segunda mano en el
                            poblado Francisco Zarco (valle de Guadalupe) con el <b>Sr. José Guardado
                                Puentes (Kaliman)</b>,
                            el cual dedico su vida en lograr crecer el negocio.
                        </p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#FFA500' }}>
                        <div className=" container">
                            <img src="/uvas.png" />
                        </div><Store size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>1994 - Abarrotes Liz. </h3>
                        <p> Años despues <b>Sr. Jose</b> inauguró su primera sucursal como un
                            <i> abarrotes</i>, marcando el inicio de esta gran empresa.
                        </p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#32CD32' }}>
                        <Users size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>Familia. </h3>
                        <p> Dejando el legado a uno de sus hijos menores a <b>José Luis Mejía</b> que,
                            con su  <i>constancia, esfuerzo, amor </i>al autoservicio y
                            apoyo de sus hermanos <b>Elizabeth</b> y <b>Felipe</b> han aportado
                            <i> pasión y compromiso</i>.
                        </p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#1E90FF' }}>
                        <Pickaxe size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>Remodelaciones y sorpresas. </h3>
                        <p>Con el paso de los años en su primera sucursal se realizaron
                            más de 3 remodelaciones y con esto <u>ideas que cambiarian todo</u>.
                        </p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#6A5ACD' }}>
                        <HousePlus size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2012- Nueva inauguración. </h3>
                        <p>Con esfuerzo y dedicacion a lo largo de los años "Liz" consiguio
                            abrir una <u>segunda sucursal </u> en en el ejido héroes
                            del desierto <i>(Testerazo)</i>.</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#8A2BE2' }}>
                        <div className="container">
                            <img src="/merc3.jpg" />
                        </div><ShoppingCart size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2015 - Mercados Liz.</h3>
                        <p>Despues de muchos años la familia <b>Mejia</b> decidió dar
                            el siguiente paso de tiendas de abarrotes al crear
                            su primer supermercado sustituyendo a su primera sucursal
                            y pasando a <i><b>Mercados Liz</b></i>.
                        </p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#FFA500' }}>
                        <HousePlus size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2018 - Nueva sucursal.</h3>
                        <p>Mas motivados que nunca y con el esfuerzo y dedicación dio apertura a
                            su <u>tercera sucursal</u> en  <i>Valle de las Palmas</i>.</p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#FF5656' }}>
                        <div className="container">
                            <img src="/merc3.jpg" />
                        </div> <Truck size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3>2023 - Liz Mayoreo.</h3>
                        <p>
                            Se continúo innovando y con la finalidad de satisfacer las necesidades
                            de restaurantes, hoteles y viñedos en Valle de Guadalupe apertura su
                            <u> cuarta sucursal</u>  está dedicada a la  <u>distribución
                                y venta</u> a negocios por  <i>mayoreo</i>.
                        </p>
                    </div>
                </div>

                <div className="timeline-event">
                    <div className="timeline-icon" style={{ backgroundColor: '#32CD32' }}>
                        <div className="container">
                            <img src="/merc3.jpg" />
                        </div><Loader size={40} />
                    </div>
                    <div className="timeline-content">
                        <h3></h3>
                        <p>
                            Nuestro crecimiento no solo se mide en la cantidad de nuevas tiendas,
                            si no en el impacto positivo que estamos generando en las vidas
                            de nuestros clientes, empleados y proveedores, construyendo un futuro
                            próspero y sostenible para todos.
                        </p>
                    </div>
                </div>

            </div>

        </Page>
    );
}

export default HistoriaPage;
