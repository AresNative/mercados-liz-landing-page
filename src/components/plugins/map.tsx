import { Map, Marker } from "pigeon-maps"
import styles from "./map.module.css"
export function MyMap() {
    return (
        <div className={styles['map']}>
            <Map height={300} defaultCenter={[32.0947939, -116.5735554]} defaultZoom={15}>
                <Marker width={50} anchor={[32.0947939, -116.5735554]} />
            </Map>
        </div>
    )
}