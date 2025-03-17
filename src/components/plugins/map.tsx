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
    const [sucursalesVisibles, setSucursalesVisibles] = useState<[number, number][]>([]);

    useEffect(() => {
        // Filtrar sucursales activas según el selector y actualizar el estado
        const nuevasSucursales = selector
            .map((data: any) => sucursalCoordenadas[data.sucursal])
            .filter((coords: [number, number] | undefined) => coords !== undefined) as [number, number][];

        setSucursalesVisibles(nuevasSucursales.length > 0 ? nuevasSucursales : Object.values(sucursalCoordenadas));
    }, [selector]);

    return (
        <div className={styles['map']}>
            <Map
                defaultCenter={[32.0947939, -116.5735554]} // Coordenadas por defecto
                center={sucursalesVisibles.length === 1 ? sucursalesVisibles[0] : [32.2, -116.6]}
                defaultZoom={12} // Ajusta el zoom para que se vean todas las sucursales
            >
                {/* Renderizar todos los marcadores */}
                {sucursalesVisibles.map((coords, index) => (
                    <Marker key={index} width={50} anchor={coords} color="#7200c4" />
                ))}
            </Map>
        </div>
    );
}

