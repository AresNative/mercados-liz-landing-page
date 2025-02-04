import { Map, Marker } from "pigeon-maps";
import styles from "./map.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "@/store/store";

// Mapeo de sucursales a coordenadas
const sucursalCoordenadas: { [key: string]: [number, number] } = {
    "Matriz": [32.099733119103604, -116.5656031728404],
    "Valle de guadalupe": [32.0947939, -116.5735554],
    "Valle de las palmas": [32.36670812592066, -116.61484440041006],
    "Testerazo": [32.295697914465485, -116.53331677806355],
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
                defaultCenter={[32.0947939, -116.5735554]} // Coordenadas por defecto
                center={sucursalVista || [32.0947939, -116.5735554]}
                // Mostrar la sucursal o la vista por defecto
                defaultZoom={16}
            >
                {/* Marcador en la ubicación de la sucursal seleccionada */}
                <Marker width={50} anchor={sucursalVista || [32.0947939, -116.5735554]} />
            </Map>
        </div>
    );
}
