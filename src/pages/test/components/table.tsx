import { Check, X, Download } from 'lucide-react';
import { styles } from '../styles';

interface TableComponentProps {
    columns: string[];
    data: Record<string, any>[];
}

const formatValue = (key: string, value: any) => {
    if (value === null || value === undefined) return '-';

    // Formato de fechas
    const normalizedKey = key.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Formato de fechas (considera cualquier campo que contenga "fecha")
    if (normalizedKey.includes('fecha') && typeof value === 'string') {
        try {
            const date = new Date(value);

            // Verificar si la fecha es válida
            if (isNaN(date.getTime())) {
                throw new Error('Fecha inválida');
            }

            return date.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false // Formato 24 horas
            });
        } catch (error) {
            console.warn(`Error formateando fecha para el campo ${key}:`, error);
            return value; // Devuelve el valor original si no se puede formatear
        }
    }

    // Formato de porcentajes
    if (key.toLowerCase().includes('porcentaje') && typeof value === 'string') {
        return `${value}%`;
    }

    // Formato de precios
    if (key.toLowerCase().includes('price') && typeof value === 'number') {
        return `$${value.toFixed(2)}`;
    }

    // Formato booleano
    if (typeof value === 'boolean') {
        return value ? <Check color="purple" size={18} /> : <X color="red" size={18} />;
    }

    // Formato de archivos
    if (key.toLowerCase() === 'file') {
        return value?.content ? (
            <Download
                size={18}
                className="text-blue-500 hover:text-blue-700 cursor-pointer"
                onClick={() => {
                    const link = document.createElement('a');
                    link.href = `data:${value.contentType};base64,${value.content}`;
                    link.download = value.fileName || 'file';
                    link.click();
                }}
            />
        ) : (
            <X color="gray" size={18} />
        );
    }

    return value.toString();
};

export const TableComponent = ({ columns, data }: TableComponentProps) => (
    <table style={styles.table}>
        <thead>
            <tr>
                {columns.map((column) => (
                    <th key={column} style={styles.tableHeader}>
                        {column}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} style={{
                    backgroundColor: rowIndex % 2 === 0 ? "#f9f9f9" : "#ffffff",
                    borderBottom: "1px solid #dddddd"
                }}>
                    {columns.map((column) => (
                        <td key={column} style={styles.tableCell}>
                            {formatValue(column, row[column])}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);