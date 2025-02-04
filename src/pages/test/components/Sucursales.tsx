import type React from "react"
import { useState } from "react"
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel } from "@ionic/react"
import { Map, Marker } from "pigeon-maps"

interface Sucursal {
  nombre: string
  direccion: string
  coordenadas: [number, number]
}

const Sucursales: React.FC = () => {
  const sucursales: Sucursal[] = [
    { nombre: "Centro", direccion: "Calle Principal 123", coordenadas: [19.4326, -99.1332] },
    { nombre: "Norte", direccion: "Avenida Norte 456", coordenadas: [19.4426, -99.1232] },
    { nombre: "Sur", direccion: "Boulevard Sur 789", coordenadas: [19.4226, -99.1432] },
  ]

  const [center, setCenter] = useState<[number, number]>([19.4326, -99.1332])
  const [zoom, setZoom] = useState(12)

  const handleSucursalClick = (coordenadas: [number, number]) => {
    setCenter(coordenadas)
    setZoom(15)
  }

  return (
    <IonCard className="m-0 bg-gray-700">
      <IonCardHeader>
        <IonCardTitle className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">
          Nuestras Sucursales
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 h-64 md:h-auto mb-4 md:mb-0 md:mr-4">
            <Map
              height={300}
              center={center}
              zoom={zoom}
              onBoundsChanged={({ center, zoom }) => {
                setCenter(center)
                setZoom(zoom)
              }}
            >
              {sucursales.map((sucursal, index) => (
                <Marker
                  key={index}
                  width={50}
                  anchor={sucursal.coordenadas}
                  color={center === sucursal.coordenadas ? "#22c55e" : "#ef4444"}
                />
              ))}
            </Map>
          </div>
          <IonList className="w-full md:w-1/2">
            {sucursales.map((sucursal, index) => (
              <IonItem
                key={index}
                className="py-2 dark:text-white cursor-pointer"
                onClick={() => handleSucursalClick(sucursal.coordenadas)}
              >
                <IonLabel>
                  <h2 className="font-semibold">{sucursal.nombre}</h2>
                  <p className="text-sm md:text-base">{sucursal.direccion}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
      </IonCardContent>
    </IonCard>
  )
}

export default Sucursales

