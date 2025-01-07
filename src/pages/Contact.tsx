import { MainForm } from "@/components/form/main-form";
import { Input } from "@/components/functions/input";
import Page from "@/template/page";
import { Mail, MapPin, Phone } from "lucide-react";
const ContactPage = () => {
    return (
        <Page>
            <section style={{ marginBottom: "3rem" }}>
                <h1 className="titulos" style={{ marginTop: "6rem" }}>Nuestras sucursales</h1>
                <ul className='product'>
                    <li>
                        <MainForm message='Enviar'>
                            <Input label="Nombre(s)" type="text" placheolder="Ingrese sus nombres" />
                            <Input label="Mensaje" type="text" placheolder="Exprese sus dudas..." />
                        </MainForm>
                    </li>
                    <li>
                        <ul>
                            {/* ----------------------------------------------------------- */}
                            <li style={{ padding: "15px" }}>
                                <h2>MAYOREO</h2>
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span>11 6, Francisco Zarco, 22750 Francisco Zarco, B.C.</span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 646 596 9489</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>gerencia01@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span><strong>Horario de Atención:{" "}</strong></span>
                                    <span style={{ paddingLeft: "5px" }}>7:00 AM - 09:00 PM</span>
                                </div>
                            </li>
                            {/* ----------------------------------------------------------- */}
                            <li style={{ background: "#fff", padding: "15px", borderRadius: "5px" }}>
                                <h2>VALLE DE GUADALUPE</h2>
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span>Calle Principal 216, Francisco Zarco, 22750 Francisco Zarco, B.C.</span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 646 155 2022</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>gerencia02@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span><strong>Horario de Atención:{" "}</strong></span>
                                    <span style={{ paddingLeft: "5px" }}>6:00 AM - 11:00 PM</span>
                                </div>
                            </li>
                            {/* ----------------------------------------------------------- */}
                            <li style={{ padding: "15px" }}>
                                <h2>VALLE DE LAS PALMAS</h2>
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span> Kilometro 29 S/N, tecate, Baja California, 21500.</span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 646 123 4567</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>gerencia03@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span><strong>Horario de Atención:{" "}</strong></span>
                                    <span style={{ paddingLeft: "5px" }}>7:00 AM - 10:00 PM</span>
                                </div>
                            </li>
                            {/* ----------------------------------------------------------- */}
                            <li style={{ background: "#fff", padding: "15px", borderRadius: "5px" }}>
                                <h2>TESTERAZO</h2>
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span> Carretera Tecate Ensenada Km 49, Tecate, Baja California, 21570.</span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 646 135 0745</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>gerencia04@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span><strong>Horario de Atención:{" "}</strong></span>
                                    <span style={{ paddingLeft: "5px" }}>7:00 AM - 10:00 PM</span>
                                </div>
                            </li>
                            {/* ----------------------------------------------------------- */}
                        </ul>
                    </li>
                </ul>

            </section>

        </Page>
    )
}
export default ContactPage;