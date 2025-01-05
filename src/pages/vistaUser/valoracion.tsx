import { GetValoracion } from "@/services/web_site_gets";
import Page from "@/template/page";
import { useEffect, useState } from "react";
import './tablasrh.css';

const InfValoracionPage = () => {

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState<string | null>(null); // Estado de error ajustado

    useEffect(() => {
        GetValoracion()
            .then((info: any) => {
                console.log("Datos recibidos:", info); // Verifica la estructura de los datos
                setdata(info.data || []); // Asegúrate de manejar datos vacíos
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener datos:", err);
                setError("Error al cargar la información."); // Mensaje de error
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Cargando información...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (data.length === 0) {
        return <p>No hay datos disponibles.</p>;
    }

    return (
        <Page>
            <h2 className="titulos" style={{ marginBottom: "3rem", marginTop: "6rem", marginRight: "1rem", }}>Información nuevos proveedores</h2>
            <div className="table-container">
                <table className="responsive-table">
                    <thead>
                        <tr>
                            <th>Comentirio</th>
                            <th>Calificacion del 1 al 5</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((info: any, index) => (
                            <tr key={index}>
                                <td className="limrenglones" >
                                    {info.comment || "N/A"}</td>
                                <td>{info.valor || "N/A"}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Page>
    );
};

export default InfValoracionPage;