import { useEffect, useMemo, useState } from "react";
import { fetchDynamicData } from "../api/get-data";
import { styles } from "../styles";
import { TableComponent } from "../components/table";
import PaginationTable from "../components/pagination";
import MainForm from "../components/form/main-form";

interface Filter {
    key: string;
    value: string;
    operator: string;
}

interface CombosRequest {
    filtros: Filter[];
    page: number;
}

export default function PageTest() {
    const [message, setMessage] = useState('');
    const [data, setData] = useState<Record<string, any>[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);


    const loadData = async (filter: CombosRequest, endpoint: string) => {
        try {
            const { data: resultData, totalPages: pages } = await fetchDynamicData<any>(filter, endpoint);
            setData(resultData);
            setTotalPages(pages);
        } catch (error) {
            console.error('Error loading data:', error);
            setMessage(error instanceof Error ? error.message : 'Error loading data');
        }
    };


    const columns = useMemo(() => data[0] ? Object.keys(data[0]) : [], [data]);

    useEffect(() => {
        loadData({
            filtros: [{ key: "", value: "", operator: "" }],
            page: currentPage,
        }, 'v2/select/combos');
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);
    };

    return (
        <main className="w-full h-full  overflow-auto">
            <section className="w-4/5 m-auto">
                <h1>File Upload and Test Data</h1>
                <MainForm
                    actionType={"registrar-combo"}
                    dataForm={[
                        {
                            name: "name",
                            type: "INPUT",
                            label: "Nombre del combo",
                            placeholder: "Añada un nombre valido...",
                            require: false,
                        },
                        {
                            type: "SELECT",
                            options: [
                                "Dsiponible",
                                "Proximamente",
                                "Agotado",
                            ],
                            enableAutocomplete: "true",
                            name: "state",
                            label: "Estado",
                            placeholder: "estado",
                            require: false,
                            multi: false,
                        },
                        {
                            type: "INPUT",
                            name: "porcentaje",
                            label: "Porcentaje de oferta",
                            placeholder: "Porcentaje del precio en oferta",
                            require: false,
                        },
                        {
                            type: "Flex",
                            name: "flex",
                            label: "Flex",
                            require: false,
                            elements: [{
                                type: "INPUT",
                                name: "price",
                                label: "Precio",
                                placeholder: "Precio base de los productos en conjunto",
                                require: false,
                            },
                            {
                                type: "INPUT",
                                name: "price_ofer",
                                label: "Precio en oferta",
                                placeholder: "Precio del combo",
                                require: false,
                            },],
                        },
                        {
                            type: "FILE",
                            name: "file",
                            label: "archivo",
                            placeholder: "Archivo",
                            require: false,
                        },

                        {
                            type: "TEXT_AREA",
                            name: "description",
                            label: "Descripcion del combo",
                            placeholder: "Describe el combo",
                            require: false,
                        },
                    ]}
                    aditionalData={{
                        date: new Date()
                    }}
                    message_button="registrar"
                />
            </section>

            {message && <p style={styles.message}>{message}</p>}

            <div className="w-4/5  m-auto mt-10 overflow-auto">
                <TableComponent columns={columns} data={data} />
                <PaginationTable totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </main>
    );
}