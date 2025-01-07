import { GetProvInfo } from "@/services/web_site_gets";
import Page from "@/template/page";
import { useEffect, useState } from "react";
import './tablasrh.css';

/*Vista Postulaciones tabla y contenido */

const InfprovPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);

    const [filterDepartment, setFilterDepartment] = useState<string>("");

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

    const handleDepartmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterDepartment(e.target.value);
        setCurrentPage(1); // Reset to first page when filtering
    };

    const filteredData = data.filter((item: any) => {
        return filterDepartment
            ? item.department?.toLowerCase().includes(filterDepartment.toLowerCase())
            : true;
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
        <Page>
            <div style={{ marginTop: "6rem" }}>
                <div className="provtablecontainer">
                    <h2 className="subtitulos" style={{ padding: "20px" }}>
                        Información nuevos proveedores
                    </h2>

                    {/* Campo de entrada para el filtro por Departamento */}
                    <div style={{ margin: "0.5rem" }}>
                        <label htmlFor="departmentFilter" style={{
                            fontSize: "1rem",
                        }}>Filtrar por Departamento: </label>
                        <input
                            id="departmentFilter"
                            type="text"
                            placeholder="Departamento"
                            value={filterDepartment}
                            onChange={handleDepartmentChange}
                            className="input-field"
                            style={{
                                fontSize: "0.9rem",
                                padding: "0.1rem",
                                marginBottom: "1rem",
                                marginRight: "1rem",
                                borderRadius: "5px",
                                borderColor: "#e5d9f7",
                               
                            }}
                        />
                    </div>

                    <table className="provresponsivetable">
                        <thead>
                            <tr className="provfontSize">
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Compañía</th>
                                <th>Tipo de producto</th>
                                <th>Departamento al que va dirigido</th>
                            </tr>
                        </thead>
                        <tbody className="provfontSize">
                            {currentData.map((info: any, index) => (
                                <tr key={index}>
                                    <td>{info.name || "N/A"}</td>
                                    <td>{info.email || "N/A"}</td>
                                    <td>{info.company || "N/A"}</td>
                                    <td>{info.type_prod || "N/A"}</td>
                                    <td>{info.department || "N/A"}</td>
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
        </Page>
    );
};

export default InfprovPage;
