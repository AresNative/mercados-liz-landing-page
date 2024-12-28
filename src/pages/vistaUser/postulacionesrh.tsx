import { GetPostulacion } from "@/services/web_site_gets";
import Page from "@/template/page";
import { useEffect, useState } from "react";
import './tablas.css';
/* import '@/components/displays/Table.css'; */

const PostulacionesRH = () => {

    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState<string | null>(null); // Estado de error ajustado

    useEffect(() => {
        GetPostulacion()
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
                            <th>Nombre</th>
                            <th>Calificación</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((info: any, index) => (
                            <tr key={index}>
                                <td className="limrenglones" >
                                    {/*Informacion Personal */}
                                    {info.nombre || "N/A"}</td>
                                <td>{info.apellido_paterno || "N/A"}</td>
                                <td>{info.apellido_materno || "N/A"}</td>
                                <td>{info.edad || "N/A"}</td>
                                <td>{info.correo_electronico || "N/A"}</td>
                                <td>{info.numero_telefono || "N/A"}</td>
                                <td>{info.direccion_actual || "N/A"}</td>

                                {/*Informacion Transporte */}
                                <td>{info.fecha_radica_ciudad || "N/A"}</td>
                                <td>{info.medio_transporte || "N/A"}</td>
                                <td>{info.tiempo_traslado || "N/A"}</td>

                                {/*Informacion Sentimental */}
                                <td>{info.estado_civil || "N/A"}</td>
                                <td>{info.tiempo_casado || "N/A"}</td>
                                <td>{info.bienes_mancomunados || "N/A"}</td>
                                <td>{info.tienes_hijos || "N/A"}</td>
                                <td>{info.planeas_mas_hijos || "N/A"}</td>
                               
                                {/*Informacion Escolar */}
                                <td>{info.disponibilidad_horario || "N/A"}</td>
                                <td>{info.ultimo_grado_estudios || "N/A"}</td>
                                <td>{info.tienes_certificado || "N/A"}</td>
                                <td>{info.estudias_actualmente || "N/A"}</td>
                                <td>{info.dias_horario_estudio || "N/A"}</td>

                                {/*Informacion Ultimo Lugar de trabajo */}
                                <td>{info.ultimo_lugar_trabajo || "N/A"}</td>
                                <td>{info.puesto_ultimo_trabajo || "N/A"}</td>
                                <td>{info.tiempo_trabajo || "N/A"}</td>
                                <td>{info.salario_semanal || "N/A"}</td>
                                <td>{info.horario_trabajo || "N/A"}</td>
                                <td>{info.dia_descanso || "N/A"}</td>
                                <td>{info.motivo_salida || "N/A"}</td>

                                {/*Informacion Penultimo lugar de trabajo */}
                                <td>{info.penultimo_lugar_trabajo || "N/A"}</td>
                                <td>{info.puesto_penultimo_trabajo || "N/A"}</td>
                                <td>{info.tiempo_penultimo_trabajo || "N/A"}</td>
                                <td>{info.salario_semanal_penultimo || "N/A"}</td>
                                <td>{info.horario_penultimo_trabajo || "N/A"}</td>
                                <td>{info.dia_descanso_penultimo || "N/A"}</td>
                                <td>{info.motivo_salida_penultimo || "N/A"}</td>

                                {/*Informacion Escolar */}
                                <td>{info.como_se_entero_vacante || "N/A"}</td>
                                <td>{info.conoce_trabajador || "N/A"}</td>
                                <td>{info.a_quien_conoce || "N/A"}</td>
                                <td>{info.tipo_relacion || "N/A"}</td>
                                <td>{info.dias_horario_estudio || "N/A"}</td>

                                {/*Informacion Vacante */}
                                <td>{info.como_se_entero_vacante || "N/A"}</td>
                                <td>{info.conoce_trabajador || "N/A"}</td>
                                <td>{info.a_quien_conoce || "N/A"}</td>
                                <td>{info.tipo_relacion || "N/A"}</td>
                                <td>{info.sucursal || "N/A"}</td>
                                <td>{info.vacante || "N/A"}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Page>
    );
};

export default PostulacionesRH;