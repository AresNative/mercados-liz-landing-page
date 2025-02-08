import { GetProvInfo } from "@/services/web_site_gets";
import { useEffect, useState } from "react";
import './tablasrh.css';

/*Vista Postulaciones tabla y contenido */

const ValoracionPersonalTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [filterProductivity, setFilterProductivity] = useState<string>("");
    const [filterWorkQuality, setFilterWorkQuality] = useState<string>("");

    useEffect(() => {
        GetProvInfo()
            .then((info: any) => {
                setData(info.data || []);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error al obtener datos:", err);
                setError("Error al cargar la información.");
                setLoading(false);
            });
    }, []);

    const handleProductivityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterProductivity(e.target.value);
        setCurrentPage(1); // Reset to first page when filtering
    };

    const handleWorkQualityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterWorkQuality(e.target.value);
        setCurrentPage(1); // Reset to first page when filtering
    };

    const filteredData = data.filter((item: any) => {
        return (
            (filterProductivity
                ? item.productivity?.toLowerCase().includes(filterProductivity.toLowerCase())
                : true) &&
            (filterWorkQuality
                ? item.work_quality?.toLowerCase().includes(filterWorkQuality.toLowerCase())
                : true)
        );
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
        <div style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            <div className="provtablecontainer">
                <h2 className="subtitulos" style={{ padding: "20px" }}>
                    Información nuevos proveedores
                </h2>
                <div className={"reclutamiento-columnas2"}>
                    {/* Campos de entrada para el filtro por Productividad y Calidad de trabajo */}
                    <div style={{ margin: "0.5rem" }}>
                        <label htmlFor="productivityFilter" style={{ fontSize: "1rem" }}>
                            Filtrar por Productividad:{" "}
                        </label>
                        <input
                            id="productivityFilter"
                            type="text"
                            placeholder="Productividad"
                            value={filterProductivity}
                            onChange={handleProductivityChange}
                            className="input-field"
                            style={{
                                fontSize: "0.9rem",
                                padding: "0.1rem",
                                marginBottom: ".5rem",
                                borderRadius: "5px",
                                borderColor: "#e5d9f7",
                            }}
                        />
                    </div>
                    <div style={{ margin: "0.5rem" }}>
                        <label htmlFor="workQualityFilter" style={{ fontSize: "1rem" }}>
                            Filtrar por Calidad de trabajo:{" "}
                        </label>
                        <input
                            id="workQualityFilter"
                            type="text"
                            placeholder="Calidad de trabajo"
                            value={filterWorkQuality}
                            onChange={handleWorkQualityChange}
                            className="input-field"
                            style={{
                                fontSize: "0.9rem",
                                padding: "0.1rem",
                                marginBottom: ".5rem",
                                borderRadius: "5px",
                                borderColor: "#e5d9f7",
                            }}
                        />
                    </div>
                </div>

                <table className="provresponsivetable">
                    <thead>
                        <tr className="provfontSize">
                            <th>Nombre Empleado</th>
                            <th>Departamento</th>
                            <th>Fecha</th>
                            <th>Productividad</th>
                            <th>Calidad de trabajo</th>
                        </tr>
                    </thead>
                    <tbody className="provfontSize">
                        {currentData.map((info: any, index) => (
                            <tr key={index}>
                                <td>{info.name || "N/A"}</td>
                                <td>{info.department || "N/A"}</td>
                                <td>{info.date || "N/A"}</td>
                                <td>{info.productivity || "N/A"}</td>
                                <td>{info.work_quality || "N/A"}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="pagination">
                    <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                        Anterior
                    </button>
                    <span>
                        Página {currentPage} de {totalPages}
                    </span>
                    <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Siguiente
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ValoracionPersonalTable;

