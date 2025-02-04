import { useEffect, useMemo, useState } from "react";
import { fetchDynamicData } from "../api/get-data";
import { sendFormData } from "../api/post-data";
import { styles } from "../styles";
import { TableComponent } from "../components/table";
import PaginationTable from "../components/pagination";
import MainForm from "../components/form/main-form";

interface Filter {
    key: string;
    value: string;
    operator: string;
}

interface CombosData {
    name: string;
    price: number;
    price_ofer: number;
    description: string;
    date: string;
    state: "Disponible" | "Agotado";
    porcentaje: number;
}

interface CombosRequest {
    filtros: Filter[];
    page: number;
}

export default function PageTest() {
    const [file, setFile] = useState<File | null>(null);
    const [message, setMessage] = useState('');
    const [data, setData] = useState<Record<string, any>[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage('');
        setFile(e.target.files?.[0] || null);
    };

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');

        if (!file) {
            setMessage('Please select a file');
            return;
        }

        const formData = new FormData();
        formData.append('File', file);

        const getRandomPrice = (base: number): number => parseFloat((base + Math.random() * 50 - 25).toFixed(2));
        const getRandomPercentage = (): number => Math.floor(Math.random() * 21);
        const getRandomDate = (): string => {
            const start = new Date(2025, 0, 1).getTime();
            const end = new Date(2025, 11, 31).getTime();
            const randomTime = start + Math.random() * (end - start);
            return new Date(randomTime).toISOString().split("T")[0];
        };

        const comboData: CombosData = {
            name: "Combo Pareja",
            price: getRandomPrice(199.9),
            price_ofer: getRandomPrice(149.9),
            description: "Incluye 1 pizza mediana y 2 refrescos de 500ml.",
            date: getRandomDate(),
            state: Math.random() > 0.5 ? "Disponible" : "Agotado",
            porcentaje: getRandomPercentage()
        };

        formData.append('CombosData', JSON.stringify(comboData));

        try {
            setIsSubmitting(true);
            await sendFormData('v2/insert/combos', formData);
            setMessage('Data submitted successfully!');
            setFile(null);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Server connection error';
            setMessage(`Error: ${errorMessage}`);
        } finally {
            setIsSubmitting(false);
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
        <main className="w-full min-h-full overflow-auto">
            <h1>File Upload and Test Data</h1>

            <MainForm
                actionType="Buscar"
                dataForm={[
                    {
                        name: "search",
                        type: "INPUT",
                        label: "Busca algun dato de interes",
                        placeholder: "Buscar productos...",
                        require: false,
                    },

                ]}

                message_button="Buscar"
            />
            {/* <form onSubmit={handleSubmit}>
                <div style={styles.formContainer}>
                    <label style={styles.fileLabel}>
                        Select a file:
                        <input
                            type="file"
                            onChange={handleFileChange}
                            disabled={isSubmitting}
                        />
                    </label>
                </div>
                <button
                    type="submit"
                    style={styles.submitButton}
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Submitting...' : 'Submit Test Data'}
                </button>
            </form> */}

            {message && <p style={styles.message}>{message}</p>}

            <div style={styles.tableContainer}>
                <TableComponent columns={columns} data={data} />
                <PaginationTable totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            </div>
        </main>
    );
}