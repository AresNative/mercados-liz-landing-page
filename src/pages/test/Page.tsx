import { EnvConfig } from "@/utils/env.config";
import { useEffect, useMemo, useState } from "react";


const { api } = EnvConfig();
export default function PageTest() {
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const [data, setdata] = useState([])

    const handleFileChange = (e: any) => {
        setFile(e.target.files[0]);
    };
    /*
    ! funcionalidad  -> carga de datos
    */
    async function loadData(filter: any, endpoint: string) {
        console.log(filter.filtros);

        const response = await fetch(api + endpoint + `?page=${filter.page}`, {
            method: 'POST',
            body: filter.filtros, // No necesitas agregar headers para FormData
        });
        return await response.json();
    }
    const columns = useMemo(() => {
        return data.length > 0 ? Object.keys(data[0]).filter(Boolean) : [];
    }, [data]);
    useEffect(() => {
        const filterData: any = {
            filtros: [{
                key: "",
                value: "",
                operator: ""
            }],
            page: 1,
        }
        loadData(filterData, 'v2/select/combos')
    }, [])
    /* 
    ! funcionalidad  -> envio de informacion
    */
    async function insertMedia(data: any, endpoint: string) {
        const response = await fetch(api + endpoint, {
            method: 'POST',
            body: data, // No necesitas agregar headers para FormData
        });
        return await response.json();
    }

    async function handleSubmit(e: any) {// ? esta funcion es para mandar multimedia - todo tipo de archivos
        e.preventDefault();
        const formData = new FormData();
        if (!file) {
            setMessage('Por favor, selecciona un archivo.');
            return;
        }
        // Agregar el archivo
        formData.append('File', file);

        const postulacionData: any = {
            name: "Combo Familiar",
            price: "299.9",
            price_ofer: "249.9",
            description: "test",
            date: "2025-02-01",
            state: "Disponible",
            porcentaje: "16"
        }
        formData.append('CombosData', JSON.stringify(postulacionData));

        try {

            const result = await insertMedia(formData, 'v2/insert/combos')
            if (result) {
                setMessage('Postulación enviada correctamente.');
            } else {
                setMessage('Error al enviar la postulación.');
            }
        } catch (error) {
            setMessage('Error al conectar con el servidor.');
            console.error(error);
        }
    }

    return (
        <main className="bg-red-600 min-h-[100vh] min-w-[100vh]">
            <h1>Subir Archivo y Enviar Datos de Prueba</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '10px' }}>
                        Selecciona un archivo:
                    </label>
                    <input type="file" onChange={handleFileChange} />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#0070f3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}
                >
                    Enviar Datos de Prueba
                </button>
            </form>
            {message && <p style={{ marginTop: '20px', color: '#0070f3' }}>{message}</p>}



            <table style={{ marginTop: "15px" }}>
                <thead>
                    <tr>
                        {columns && columns.map((key, row) => (
                            <th key={key}>
                                <span>{row}</span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {data && data.map((key, row) => (
                            <td key={key}>
                                <span>{row}</span>
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </main>
    )
}