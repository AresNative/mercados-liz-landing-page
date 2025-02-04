import type React from "react"
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol } from "@ionic/react"

const Productos: React.FC = () => {
  const productos = [
    { nombre: "Manzanas", imagen: "/assets/manzanas.jpg" },
    { nombre: "Leche", imagen: "/assets/leche.jpg" },
    { nombre: "Pan", imagen: "/assets/pan.jpg" },
    { nombre: "Huevos", imagen: "/assets/huevos.jpg" },
  ]

  return (
    <IonCard className="m-0 bg-white dark:bg-gray-800">
      <IonCardHeader>
        <IonCardTitle className="text-xl md:text-2xl font-bold text-purple-600 dark:text-purple-400">
          Productos Destacados
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            {productos.map((producto, index) => (
              <IonCol size="6" sizeMd="3" key={index}>
                <div className="text-center">
                  <img
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    className="w-full h-24 md:h-32 object-cover rounded-lg mb-2"
                  />
                  <p className="font-semibold text-sm md:text-base dark:text-white">{producto.nombre}</p>
                </div>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  )
}

export default Productos

