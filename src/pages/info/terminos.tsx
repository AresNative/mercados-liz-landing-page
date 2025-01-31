import Page from "@/template/page";

const TerminosPage = () => {
    return (
        <Page>
            <h1 style={{ marginTop: "6rem", textAlign: "center", padding: "0.2rem" }}>
                SUPERMERCADOS MEJIA S. DE R.L. DE C.V.
            </h1>
            <h1 style={{ marginTop: "2rem", padding: ".4rem" }}>Términos y Condiciones</h1>

            <p style={{ padding: ".4rem", fontSize: "1.3rem", color: "#380164" }}>
                <b>Introducción</b>
            </p>
            <p style={{ marginTop: "0rem", padding: "1rem", textAlign: "justify" }}>
                Bienvenido a <b>SUPERMERCADOS MEJIA S. DE R.L. DE C.V.</b> (en adelante, “la empresa”).
                Al acceder, navegar y utilizar nuestro sitio web, aplicación móvil, o realizar compras
                en cualquiera de nuestras tiendas, usted acepta cumplir y estar sujeto a los siguientes
                términos y condiciones de uso, junto con nuestras políticas de privacidad y cualquier
                normativa adicional aplicable. Si no está de acuerdo con estos términos, le recomendamos
                no utilizar nuestros servicios.
            </p>

            <p style={{ padding: ".5rem", fontSize: "1.3rem", color: "#380164" }}>
                <b>Uso del sitio web y servicios</b>
            </p>
            <p style={{ marginTop: "0rem", padding: "1rem", textAlign: "justify" }}>
                <b>SUPERMERCADOS MEJIA S. DE R.L. DE C.V.</b> proporciona información sobre productos,
                servicios, ofertas y promociones, que están sujetos a disponibilidad y pueden cambiar
                sin previo aviso. El uso de nuestro sitio web y servicios está condicionado a los siguientes términos:
            </p>
            <ul style={{ marginTop: "0rem", paddingLeft: "2rem", listStyleType: "disc" }}>
                <li>
                    Usted se compromete a utilizar este sitio exclusivamente para fines legales y dentro
                    del marco de las leyes aplicables.
                </li>
                <li>
                    Está prohibido copiar, reproducir, distribuir o modificar el contenido del sitio web
                    sin autorización expresa por escrito de nuestra parte.
                </li>
                <li>
                    Toda la información personal proporcionada deberá ser precisa, completa y actualizada.
                </li>
            </ul>

            <p style={{ padding: ".5rem", fontSize: "1.3rem", color: "#380164" }}>
                <b>Productos y promociones</b>
            </p>
            <p style={{ marginTop: "0rem", padding: "1rem", textAlign: "justify" }}>
                Los precios, disponibilidad y promociones de productos están sujetos a cambios sin
                previo aviso. Nos esforzamos por mantener la información actualizada, pero no
                garantizamos la exactitud de los datos publicados. Las promociones pueden tener
                términos y condiciones específicos que deberán consultarse de manera individual.
            </p>
            <ul style={{ marginTop: "0rem", paddingLeft: "2rem", listStyleType: "disc" }}>
                <li>
                    Las promociones aplican exclusivamente a las sucursales y fechas indicadas.
                </li>
                <li>
                    Las compras están sujetas a disponibilidad de inventario.
                </li>
                <li>
                    Nos reservamos el derecho de limitar las cantidades adquiridas por cliente o
                    cancelar transacciones sospechosas.
                </li>
            </ul>

            <p style={{ padding: ".5rem", fontSize: "1.3rem", color: "#380164" }}>
                <b>Devoluciones y reembolsos</b>
            </p>
            <p style={{ marginTop: "0rem", padding: "1rem", textAlign: "justify" }}>
                Las devoluciones están sujetas a nuestras políticas de reembolso. Para cualquier
                devolución, el producto debe estar en su empaque original, en perfecto estado, y
                contar con el comprobante de compra. No se aceptan devoluciones de productos
                perecederos o aquellos que hayan sido abiertos, salvo en caso de defectos de fabricación.
            </p>

            <p style={{ padding: ".5rem", fontSize: "1.3rem", color: "#380164" }}>
                <b>Propiedad intelectual</b>
            </p>
            <p style={{ marginTop: "0rem", padding: "1rem", textAlign: "justify" }}>
                Todo el contenido del sitio web, incluyendo imágenes, logotipos, gráficos, textos y códigos
                fuente, son propiedad de <b>SUPERMERCADOS MEJIA S. DE R.L. DE C.V.</b> y están protegidos
                por las leyes de derechos de autor y propiedad intelectual. Queda prohibido el uso no
                autorizado de dicho contenido.
            </p>

            <p style={{ padding: ".5rem", fontSize: "1.3rem", color: "#380164" }}>
                <b>Limitación de responsabilidad</b>
            </p>
            <p style={{ marginTop: "0rem", padding: "1rem", textAlign: "justify" }}>
                <b>SUPERMERCADOS MEJIA S. DE R.L. DE C.V.</b> <b> <i>NO</i> </b>se hace responsable de:
            </p>
            <ul style={{ marginTop: "0rem", paddingLeft: "2rem", listStyleType: "disc" }}>
                <li>Errores tipográficos o cambios en precios y disponibilidad.</li>
                <li>Daños o perjuicios derivados del uso del sitio web o la imposibilidad de acceder al mismo.</li>
                <li>Acciones de terceros que puedan comprometer la seguridad del usuario o la plataforma.</li>
            </ul>

            <p style={{ padding: ".5rem", fontSize: "1.3rem", color: "#380164" }}>
                <b>Modificaciones de los términos</b>
            </p>
            <p style={{ marginTop: "0rem", padding: "1rem", textAlign: "justify" }}>
                Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento.
                Los cambios serán publicados en nuestro sitio web, y el uso continuo de los servicios después
                de dichas modificaciones constituirá su aceptación de los mismos.
            </p>
            <p style={{ padding: ".5rem", fontSize: "1.3rem", color: "#380164" }}>
                <b>Contacto</b>
            </p>
            <p style={{ marginTop: "0rem", padding: "1rem", textAlign: "justify" }}>
                Si tiene alguna pregunta sobre estos Términos y Condiciones, puede contactarnos en nuestro domicilio:
                <b> Calle principal #1005 Francisco Zarco, Ensenada Baja California, C.P. 22750
                    México</b>, o al teléfono: <b>+52 646 596 9489</b>.
            </p>


        </Page>


    )


}
export default TerminosPage;