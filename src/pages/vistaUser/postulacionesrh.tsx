import { GetPostulacion } from "@/services/web_site_gets";
import { useEffect, useState } from "react";
import './tablasrh.css';

/*Vista Postulaciones tabla y contenido */

const PostulacionesRHPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [filterVacante, setFilterVacante] = useState<string>("");
    const [filterSucursal, setFilterSucursal] = useState<string>("");

    useEffect(() => {
        GetPostulacion()
            .then((info: any) => {
                setData((info.data || []).reverse());
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener datos:", err);
                setError("Error al cargar la información.");
                setLoading(false);
            });
    }, []);

    const handleVacanteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterVacante(e.target.value);
        setCurrentPage(1);
    };

    const handleSucursalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterSucursal(e.target.value);
        setCurrentPage(1);
    };

    const filteredData = data.filter((item: any) => {
        const matchesVacante = filterVacante
            ? item.vacante?.toLowerCase().includes(filterVacante.toLowerCase())
            : true;
        const matchesSucursal = filterSucursal
            ? item.sucursal?.toLowerCase().includes(filterSucursal.toLowerCase())
            : true;
        return matchesVacante && matchesSucursal;
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    if (loading) return <p>Cargando información...</p>;
    if (error) return <p>{error}</p>;
    if (data.length === 0) return <p>No hay datos disponibles.</p>;

    return (
        <div className="table-container form">
            <h2 className="subtitulos" style={{ marginLeft: "1rem" }}>Información postulaciones</h2>

            <div style={{ margin: "0.5rem" }}>
                <label htmlFor="vacanteFilter">Filtrar por Vacante: </label>
                <input
                    id="vacanteFilter"
                    type="text"
                    placeholder=" Vacante"
                    value={filterVacante}
                    onChange={handleVacanteChange}
                    style={{ padding: "0.1rem", marginBottom: "1rem", marginRight: "1rem", borderRadius: "5px", borderBlockColor: "#e5d9f7 " }}
                />
                <label htmlFor="sucursalFilter">Filtrar por Sucursal: </label>
                <input
                    id="sucursalFilter"
                    type="text"
                    placeholder=" Sucursal"
                    value={filterSucursal}
                    onChange={handleSucursalChange}
                    style={{ padding: "0.1rem", marginBottom: "1rem", marginRight: "1rem", borderRadius: "5px", borderColor: "#e5d9f7 " }}
                />
            </div>

            <table className="responsive-table">
                <thead>
                    <tr className="fontSize">
                        <th>Nombre</th>
                        <th>Apellido Paterno</th>
                        <th>Apellido Materno</th>
                        <th>Edad</th>
                        <th>Correo Electrónico</th>
                        <th>Número Teléfono</th>
                        <th>Último Lugar Trabajo</th>
                        <th>Puesto Último Trabajo</th>
                        <th>Motivo Salida</th>
                        <th>Sucursal</th>
                        <th>Vacante</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((info: any, index) => (
                        <tr key={index} className="fontSize">
                            <td>{info.nombre || "N/A"}</td>
                            <td>{info.apellido_paterno || "N/A"}</td>
                            <td>{info.apellido_materno || "N/A"}</td>
                            <td>{info.edad || "N/A"}</td>
                            <td>{info.correo_electronico || "N/A"}</td>
                            <td>{info.numero_telefono || "N/A"}</td>
                            <td>{info.ultimo_lugar_trabajo || "N/A"}</td>
                            <td>{info.puesto_ultimo_trabajo || "N/A"}</td>
                            <td>{info.motivo_salida || "N/A"}</td>
                            <td>{info.sucursal || "N/A"}</td>
                            <td>{info.vacante || "N/A"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Anterior</button>
                <span>Página {currentPage} de {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Siguiente</button>
            </div>
        </div>
    );
};

export default PostulacionesRHPage;
