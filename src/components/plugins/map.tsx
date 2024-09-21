import { Map, Marker } from "pigeon-maps";
import styles from "./map.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";

// Mapeo de sucursales a coordenadas
const sucursalCoordenadas: { [key: string]: [number, number] } = {
    "Matriz": [32.0998035, -116.5654255],
    "Valle de guadalupe": [32.0945219, -116.576508],
    "Valle de las palmas": [32.3622361, -116.6245621],
    "Testerazo": [32.2943975, -116.5420665],
};

export function MyMap() {
    const selector = useSelector((state: RootState) => state.filters.filters);
    const [sucursalVista, setSucursalVista] = useState<[number, number] | null>(null);

    useEffect(() => {
        selector.map((data: any) => {
            const sucursal = data.sucursal;
            // Si la sucursal existe en el mapeo, actualizar la vista
            if (sucursal && sucursalCoordenadas[sucursal]) {
                setSucursalVista(sucursalCoordenadas[sucursal]);
            }
        });
    }, [selector]);

    return (
        <div className={styles['map']}>
            <Map
                height={300}
                defaultCenter={[32.0947939, -116.5735554]} // Coordenadas por defecto
                center={sucursalVista || [32.0947939, -116.5735554]}
                // Mostrar la sucursal o la vista por defecto
                defaultZoom={15}
            >
                {/* Marcador en la ubicación de la sucursal seleccionada */}
                <Marker width={50} anchor={sucursalVista || [32.0947939, -116.5735554]} />
            </Map>
        </div>
    );
}
