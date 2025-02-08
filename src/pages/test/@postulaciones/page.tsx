import { useEffect, useMemo, useState } from "react";
import { fetchDynamicData } from "../api/get-data";
import { TableComponent } from "../components/table";
import { PostulacionesField } from "../constants/postulaciones";
import PaginationTable from "../components/pagination";
import MainForm from "../components/form/main-form";
import Body from "../template/body";

interface formatFilter {
    key: string;
    value: string;
    operator: "like" | "=" | ">=" | "<=" | ">" | "<" | "<>" | ""; // Incluí "" como opción para el operador.
}

interface formatSuma {
    key: string;
}
interface formatLoadDate {
    filters: {
        filtros: formatFilter[];
        sumas: formatSuma[];
    };
    page: number;
    sum: boolean;
}

export default function PagePostulaciones() {
    const [data, setData] = useState<Record<string, any>[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const loadData = async (filter: formatLoadDate, endpoint: string) => {
        try {
            const { data: resultData, totalPages: pages } = await fetchDynamicData<any>(filter, endpoint);
            setData(resultData);
            setTotalPages(pages);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    const columns = useMemo(() => data[0] ? Object.keys(data[0]) : [], [data]);

    useEffect(() => {
        console.log(currentPage);

        loadData({
            filters: {
                filtros: [{ key: "", value: "", operator: "" }],
                sumas: [{ key: "Categoria" }],
            },
            page: currentPage,
            sum: false
        }, 'v2/select/postulaciones');
    }, [currentPage]);

    const handlePageChange = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        setCurrentPage(newPage);
    };

    return (
        <Body>
            <section className="w-4/5 m-auto" >
                <h1>Formato de subida para postulaciones</h1>
                <MainForm
                    formatForm="PostulacionForm"
                    actionType={'v2/insert/postulaciones'}
                    dataForm={PostulacionesField()}
                    aditionalData={{
                        date: new Date()
                    }}
                    message_button="registrar"
                />
            </section>


            <div className="w-4/5 m-auto mt-10">
                <TableComponent columns={columns} data={data} />
                <PaginationTable totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </Body>
    );
}