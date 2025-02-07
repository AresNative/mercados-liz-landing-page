import { useEffect, useMemo, useState } from "react";
import { fetchDynamicData } from "../api/get-data";
import { TableComponent } from "../components/table";
import { CombosField } from "../constants/combos";
import PaginationTable from "../components/pagination";
import MainForm from "../components/form/main-form";
import Background from "../template/background";
import { IonPage } from "@ionic/react";

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
        <Background>
            <IonPage className="overflow-y-auto overflow-x-hidden pb-2 w-full min-h-screen lg:px-14 m-auto">

                <section className="w-4/5 m-auto" >
                    <h1>Formato de subida para combos</h1>
                    <MainForm
                        actionType={'v2/insert/combos'}
                        dataForm={CombosField()}
                        aditionalData={{
                            date: new Date()
                        }}
                        message_button="registrar"
                    />
                </section>


                <div className="w-4/5 m-auto mt-10s">
                    <TableComponent columns={columns} data={data} />
                    <PaginationTable totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </IonPage>
        </Background>
    );
}