import Page from "@/template/page";
import styles from "@/pages/ofertas/Offers.module.css";
import { Input } from "@/components/functions/input";
import { Select } from "@/components/functions/select";
import { Button } from "@/components/functions/button";


const PromocionesPage = () => {
    return (
        <>
            <form className={styles["form"]}>
                <h1 style={{ padding: "1px" }}> Subir PDF de promociones.</h1>
                <div className={styles["reclutamiento-columnas2"]}>
                    <input type="file" placeholder="Subir" style={{ padding: "1px" }} />
                </div>
                <Button label={"Publicar Oferta"} color={"default"} />
            </form>

            {/* */}

            <form className={styles["form"]}>
                <h1 style={{ padding: "5px" }}> Publicación de promociones página web supermercados Mejía.</h1>
                <div style={{ padding: "5px" }}>

                    <Select values={[
                        { name: "Mayoreo" },
                        { name: "Liz" },
                        { name: "Palmas" },
                        { name: "Testerazo" },
                    ]} message={"Seleccione sucursal para promoción"}
                        multiple={true} />

                    <Input label={"Promoción"} type='text' placheolder={"Descripción promoción"} />

                    <div className={styles["reclutamiento-columnas"]}>
                        <Input label={"Fecha Inicio"} type={'date'} placheolder={"Inicio Promoción"} />
                        <Input label={"Fecha Fin"} type={'date'} placheolder={"Fin Promoción"} />
                    </div>

                    <div className={styles["reclutamiento-columnas"]}>
                        <Input label={"Precio Original"} type='text' placheolder={"$" + "Precio Original"} />
                        <Input label={"Precio Promoción"} type='text' placheolder={"$" + "Precio Promoción"} />
                    </div>
                </div>
                <Button label={"Publicar Oferta"} color={"default"} />
            </form>

        </>
    );
};

export default PromocionesPage;