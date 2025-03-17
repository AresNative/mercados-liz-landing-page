import styles from "@/pages/ofertas/Offers.module.css";
import { Input } from "@/components/functions/input";
/* import { Select } from "@/components/functions/select"; */
import { Button } from "@/components/functions/button";
import { SetStateAction, useState } from "react";
import { Select } from "@/components/functions/select";

const PromocionesPage = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleRemoveFile = () => {
        setFile(null);
        const input = document.getElementById("fileInput") as HTMLInputElement;
        if (input) {
            input.value = "";
        }
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        if (event.dataTransfer.files.length > 0) {
            setFile(event.dataTransfer.files[0]);
        }
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <><form className={styles["form"]}>
                <h1>Subir PDF de promociones</h1>

                <div
                    className={"drop-zone"}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                >
                    {file && (
                        <button type="button" onClick={handleRemoveFile} className={"remove-button"}>
                            ❌
                        </button>)}
                    <input
                        type="file"
                        accept="application/pdf"
                        id="fileInput"
                        onChange={handleFileChange}
                        style={{ display: "none" }} />
                    <label htmlFor="fileInput" className={"file-label"}>
                        {file ? file.name : "Haz clic o arrastra un archivo aquí"}
                    </label>
                </div>

                <Button label="Publicar Oferta" color="default" type="button" onClick={() => { }} />

            </form>
                <form className={styles["form"]}>
                    <h1 style={{ padding: "5px" }}> Publicación de promociones página web supermercados Mejía. </h1>
                    <div style={{ padding: "5px" }}>

                        <Select values={[
                            { name: "Mayoreo" },
                            { name: "Liz" },
                            { name: "Palmas" },
                            { name: "Testerazo" },
                        ]} message={"Oferta Valida solo para sucursal "}
                            multiple={true} />
                        <Input label={"Promoción"} type='text' placheolder={"Descripción promoción"} />
                        <div className={styles["reclutamiento-columnas"]}>
                            <Input label={"Precio Original"} type='text' placheolder={"$" + "Precio Original"} />
                            <Input label={"Precio Promoción"} type='text' placheolder={"$" + "Precio Promoción"} />
                        </div>
                    </div>
                    <Button label={"Publicar Oferta"} color={"default"} type="button" onClick={{}} />
                </form>
            </>

            <form className={styles["form"]}>
                <h1 style={{ padding: "1px" }}> Publicacion de combos. </h1>
                <div style={{ padding: "1px" }}>

                    <Input label={"Nombre"} type='text' placheolder={"Nombre Combo"} />
                    <div className={styles["reclutamiento-columnas"]}>
                        <Input label={"Precio Original"} type='text' placheolder={"$" + " Precio Original Individual"} />
                        <Input label={"Precio Promoción"} type='text' placheolder={"$" + " Precio Combo"} />
                    </div>
                    <div className={styles["reclutamiento-columnas"]}>
                        <Input label={"Articulos"} type='text' placheolder={"Articulos Combo"} />
                    </div>
                    <div className={styles["reclutamiento-columnas"]}>
                        <Input label={"Descuento"} type='text' placheolder={"%" + " Descuento"} />
                        <Select values={[
                            { name: "Lunes" },
                            { name: "Martes" },
                            { name: "Miercoles" },
                            { name: "Jueves" },
                            { name: "Viernes" },
                            { name: "Sabado" },
                            { name: "Domingo" },
                        ]} message={"Seleccione Dias validos"}
                            multiple={true} />

                        {/*  <Input label={"Valido"} type='text' placheolder={"Dias Validos "} /> */}
                    </div>

                </div>
                <Button label={"Publicar Oferta"} color={"default"} type="button" onClick={{}} />
            </form></>

    );
};

export default PromocionesPage;