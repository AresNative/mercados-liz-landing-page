import { Map, Marker } from "pigeon-maps"
import styles from "./map.module.css"
export function MyMap() {
    return (
        <div className={styles['map']}>
            <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
                <Marker width={50} anchor={[50.879, 4.6997]} />
            </Map>
        </div>
    )
}