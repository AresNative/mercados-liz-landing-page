import { arrowForward, cardOutline, chevronDown, logoFacebook, logoWhatsapp, rocketOutline, starOutline } from "ionicons/icons";
import { IonButton, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import { OffertCard } from "@/components/displays/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactoField } from "../constants/contacto";
import Sucursales from "../components/sections/Sucursales";
import MainForm from "../components/form/main-form";
import Body from "../template/body";

const PageUser: React.FC = () => {
    const ruta = [
        { link: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png", alt: "Logo Coca-Cola", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgEuX0hSXHfBeGvSHwOyoXcd-sJOh96GvQQ&s", alt: "Logo Carnes JC", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ub0t4Q4nI1ec4QiDNyMYDTIhYDkKfpgEdg&s", alt: "Logo Bachoco", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNLrjPjBNdUknJi15FZm4Hn6V8v8KSIxmxw&s", alt: "Logo Jumex", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW-dbiFtg2py_AmoUAo0rW4XsHJLBD8NqdWA&s", alt: "Logo el Pato", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr80DB83MHyE8_vSgXMYPNP4JwBX-haUY9gA&s", alt: "Logo Lala", loading: "lazy" },
        { link: "https://storage.googleapis.com/www-paredro-com/uploads/2018/11/%C2%BFPor-que%CC%81-el-logo-de-Sabritas-tiene-una-carita-feliz.jpg", alt: "Logo Sabritas", loading: "lazy" },
        { link: "https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg", alt: "Logo Pepsi", loading: "lazy" },
        { link: "https://impulsoregio.wordpress.com/wp-content/uploads/2015/01/barcel-1.png", alt: "Logo Barce;", loading: "lazy" },
        { link: "https://grupopenafiel.com.mx/wp-content/uploads/2023/01/penafiel2.jpg", alt: "Logo Logo Peñafiel", loading: "lazy" },
        { link: "https://i.pinimg.com/474x/6e/0c/16/6e0c16bacd5f4d0ec47578bede80529b.jpg", alt: "Logo Snappe", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPBhUzaJmH8cw30ZIK5CPj-65dkB6fP3J8kA&s", alt: "Logo Purina", loading: "lazy" },
        { link: "https://logoeps.com/wp-content/uploads/2013/04/nestle-chocolate-vector-logo.png", alt: "Logo Nescle", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCvC_ZkhQZ9Sa9WFZ1oMcOI0nguyc1mCAlBQ&s", alt: "Logo Grand chunk", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt2FD9gES91gxVxTSlb_ajTepOmAI6pCZD-g&s", alt: "Logo Logo diamcers", loading: "lazy" },
        { link: "https://laikapp.s3.amazonaws.com/dev_images_categories/whiskas_logo_circulo3.png", alt: "Logo whiskas", loading: "lazy" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqT8qaJuNDmCdKqNbOrwbmFztSkOKZQCJsA&s", alt: "Logo StarMilk ", loading: "lazy" },
        { link: "https://cdn.worldvectorlogo.com/logos/yoplait.svg", alt: "Logo Youplayt", loading: "lazy" },
        { link: "https://images.seeklogo.com/logo-png/50/2/la-costena-logo-png_seeklogo-507641.png", alt: "Logo La costeña", loading: "lazy" },
    ];
    // Duplicamos los elementos para crear el efecto infinito
    const duplicatedItems = [...ruta, ...ruta];

    const servicios = [
        { icon: starOutline, title: "Calidad Premium", desc: "Los mejores productos" },
        { icon: cardOutline, title: "Pago Seguro", desc: "Múltiples métodos" },
        { icon: rocketOutline, title: "Entrega a domicilio", desc: "Rápida en todo el Valle y alrededores." },
    ]

    return (
        <Body>
            <section className="section w-full lg:min-h-[68vh] min-h-[55vh]">
                <div className="overlay m-auto ">
                    <h2 className="text-center text-lg font-semibold text-lime-300">Tu Supermercado de Confianza </h2>
                    <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold font-[Lobster] tracking-tight text-balance text-purple-700 sm:text-5xl">
                        Siempre Fresco Siempre Bien
                    </p>
                </div>
            </section>

            <nav className='section-2 bg-white'>
                <IonFab
                    style={{ bottom: '-4rem', left: '50%', transform: 'translate(-50%, -50%)' }}
                >
                    <IonFabButton aria-hidden="false" color="liz">
                        <IonIcon icon={chevronDown} />
                    </IonFabButton>
                </IonFab>

                <ul>
                    <li>
                        <a href="https://www.facebook.com/share/1WZv93NVER/" target="_blank" >
                            <IonButton shape='round' fill="clear" >
                                <IonIcon size='large' icon={logoFacebook} />
                            </IonButton>
                        </a>
                    </li>
                    {/*Preguntar que link iria si compras servicio a domicilio o quejas*/}
                    <li>
                        <a href="https://wa.me/52NUMERO" target="_blank"  >
                            <IonButton color="success" shape='round' fill="clear" >
                                <IonIcon size='large' icon={logoWhatsapp} />
                            </IonButton>
                        </a>
                    </li>
                    <li>
                        <a href="https://mail.google.com/mail/?view=cm&to=atncliente@mercadosliz.com&su=Consulta%20sobre%20servicio%20y%20más%20información&body=Hola,%20quisiera%20saber%20más%20sobre%20sus%20productos%20y%20servicios%20que%20ofrecen.%0AGracias" target="_blank" >
                            <IonButton color="liz" shape='round' fill="clear" >
                                <Mail color="var(--primary)" size={24} />
                            </IonButton>
                        </a>
                    </li>
                </ul>
            </nav>

            <section className="py-2 sm:py-8">
                <div className="mx-auto max-w-2xl lg:px-6 lg:max-w-7xl">
                    <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                        <section className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                            <ul className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                                <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Nuestra historia
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Conoce como empezo nuestra historia y como hemos crecido a lo largo del tiempo...
                                    </p>
                                    <button className="text-purple-600 rounded-lg text-base font-medium hover:underline hover:bg-transparent transition-colors duration-300 flex items-center">
                                        Ver mas
                                        <IonIcon icon={arrowForward} className="ml-2" />
                                    </button>
                                </div>
                                <div className="relative h-[25rem] w-full grow">
                                    <div className="absolute top-32 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-[#f2f2f7] shadow-2xl">
                                        <img src="/historia.png" className="absolute my-auto h-full object-cover -right-16 top-10" />
                                    </div>
                                </div>
                            </ul>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-tl-[2rem]"></div>
                        </section>

                        <section className="relative max-lg:row-start-1">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                            <ul className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                                <div className="px-8 sm:px-10 sm:pt-8">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Servicios</p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        En nuestro supermercado, nos esforzamos por ofrecerte la mejor experiencia de compra con una amplia variedad de productos y servicios diseñados para tu comodidad.
                                    </p>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 px-8 my-auto overflow-y-auto max-h-64 p-10">
                                    {servicios.map((servicio, index) => (
                                        <div key={index} className="flex gap-3 sm:gap-4 items-center p-3 cursor sm:p-4 bg-white border rounded-lg hover:shadow-md shadow-xl transition-shadow duration-300">
                                            <IonIcon icon={servicio.icon} className="text-xl sm:text-2xl text-purple-600 p-2" />
                                            <div>
                                                <h3 className="font-medium text-base sm:text-lg text-black">{servicio.title}</h3>
                                                <p className="text-gray-600 text-sm sm:text-base">{servicio.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </ul>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
                        </section>

                        <section className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <ul className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                                <li className="px-8 pt-8 sm:px-10 sm:pt-10">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Promociones</p>
                                    <p className="my-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Ofertas Especiales en Menudeo y Mayoreo 📢.
                                    </p>
                                </li>
                                <li className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                                    <div className="relative w-full max-w-[16rem] m-auto min-h-full border  rounded-xl flex flex-col items-center hover:shadow-md hover:cursor-pointer transition-shadow duration-300">
                                        <img src="/merc1.jpg" alt="Oferta" className="w-full h-32 sm:h-40 object-cover rounded-lg mb-2 sm:mb-4" />
                                        <h3 className="text-base sm:text-lg font-medium text-purple-800 mb-1 sm:mb-2">Oferta </h3>
                                        <p className="text-gray-500 line-through text-sm">Antes: $99.99</p>
                                        <section className="felx flex-row w-full">
                                            <p className="text-purple-600 font-bold text-lg sm:text-xl mt-1 text-center">Ahora: $69.99</p>
                                            <div className="bg-purple-600 w-28 m-auto text-white text-center px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-2 sm:mb-4">-30%</div>
                                            <button className="absolute text-purple-600 lg:bottom-2 lg:right-2 right-0 bottom-0 rounded-lg text-base font-medium hover:underline hover:bg-transparent transition-colors duration-300 flex items-center">
                                                Ver
                                                <IonIcon icon={arrowForward} className="ml-2" />
                                            </button>
                                        </section>
                                    </div>
                                </li>
                            </ul>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
                        </section>

                        <section className="relative lg:row-span-2">
                            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                            <ul className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                                <li className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Sucursales
                                    </p>
                                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        Encuentra Todo lo que Necesitas en un Solo Lugar 🏪.
                                    </p>
                                </li>
                                <li className="relative min-h-[20rem] w-full grow">
                                    <Sucursales />
                                </li>
                            </ul>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-tr-[2rem] "></div>
                        </section>

                        <section className="relative lg:col-span-2">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <ul className="relative flex h-full flex-col overflow-hidden rounded-lg">
                                <div className="px-8 py-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <p className="my-2 text-lg text-center font-medium tracking-tight text-gray-950 max-lg:text-center">
                                        Mantente informado con nuestra sección de noticias
                                    </p>
                                    <li className="mb-5 mx-auto max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                        <p className="text-gray-600 text-base text-center">
                                            Descubre las últimas novedades, ofertas especiales, recetas y mucho más en nuestra Sección de Noticias.
                                        </p>
                                        <div className="flex flex-row m-auto gap-2 w-5/6 max-w-md">
                                            <input
                                                type="email"
                                                placeholder="Tu email"
                                                className="flex-1 bg-gray-100 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                                            />
                                            <button className="text-purple-600 rounded-lg text-base font-medium hover:underline hover:bg-transparent transition-colors duration-300 flex items-center">
                                                Suscribir
                                                <IonIcon icon={arrowForward} className="ml-2" />
                                            </button>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-bl-[2rem]"></div>
                        </section>

                        <section className="relative lg:col-span-1">
                            <div className="absolute inset-px rounded-lg bg-white"></div>
                            <ul className="relative flex h-full flex-col overflow-hidden rounded-lg">
                                <li className="px-8 py-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                                    <h2 className="my-2 text-lg font-medium tracking-tight text-gray-950 text-center">
                                        ¡Únete a nuestra familia!
                                    </h2>

                                </li>
                                <li className="mx-auto sm:mb-5 text-gray-600 ">
                                    <p className="text-gray-600 text-base">
                                        Crece con nosotros, postula ahora:
                                    </p>
                                    <button className="text-purple-600 rounded-lg text-base font-medium hover:underline hover:bg-transparent transition-colors duration-300 flex items-center">
                                        Ver vacantes activas
                                        <IonIcon icon={arrowForward} className="ml-2" />
                                    </button>
                                    <button className="text-purple-600 rounded-lg text-base font-medium hover:underline hover:bg-transparent transition-colors duration-300 flex items-center">
                                        Ir al formulario
                                        <IonIcon icon={arrowForward} className="ml-2" />
                                    </button>
                                </li>
                            </ul>
                            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-br-[2rem] important:rounded-b-[2rem]"></div>
                        </section>
                    </div>
                </div>
            </section>

            <h2 className="text-center">Marcas que nos acompañan</h2>
            <div className="flex animate-infinite-scroll">

                {duplicatedItems.map((data, key) => (
                    <OffertCard key={key} avatarUrl={data.link} />
                ))}
            </div>

            <section className="w-[90%] lg:w-3/5 m-auto my-10 relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-white"></div>
                <ul className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                    <li className="px-8 pt-8 sm:px-10 sm:pt-10">
                        <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Contacto directo</p>
                        <p className="my-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                            Haznos llegar tus dudas o sugerencias...
                        </p>
                    </li>
                    <li className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                        <ul className="m-auto flex flex-col relative items-center justify-center gap-4 sm:flex-row">
                            <li className="w-2/3">
                                <MainForm
                                    formatForm=""
                                    actionType={'v2/insert/combos'}
                                    dataForm={ContactoField()}
                                    aditionalData={{
                                        date: new Date()
                                    }}
                                    message_button="registrar"
                                />
                            </li>
                            <li className=" w-2/3 m-auto flex flex-col gap-4">
                                <div className="contact-item">
                                    <MapPin color="var(--primary)" size={24} />
                                    <span>Calle Principal 216, 22750 Francisco Zarco, B.C.</span>
                                </div>

                                <div className="contact-item">
                                    <Phone color="var(--primary)" size={24} />
                                    <span>+52 646 155 2022</span>
                                </div>

                                <div className="contact-item">
                                    <Mail color="var(--primary)" size={24} />
                                    <span>atncliente@mercadosliz.com</span>
                                </div>

                                <div className="contact-item">
                                    <span ><strong >Horario de Atención:</strong></span>
                                    <span style={{ paddingLeft: "5px" }}> 08:00 AM - 09:00 PM</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className="pointer-events-none absolute inset-px ring-1 shadow-sm ring-black/5 rounded-[2rem]"></div>
            </section>
        </Body>
    )
}

export default PageUser

