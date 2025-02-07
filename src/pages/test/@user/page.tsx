import { IonPage } from "@ionic/react";
import GridLayout from "../components/GridLayout"
import Background from "../template/background"
import { OffertCard } from "@/components/displays/card";

const PageUser: React.FC = () => {
    const ruta = [
        { link: "https://i.pinimg.com/originals/1e/c1/d2/1ec1d2ce366d1f603b1bde70ae508063.png" },
        { link: "https://cdn.shopify.com/s/files/1/1547/6619/files/logo.png?v=1698644298" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSgEuX0hSXHfBeGvSHwOyoXcd-sJOh96GvQQ&s" },
        { link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Ub0t4Q4nI1ec4QiDNyMYDTIhYDkKfpgEdg&s" },
        { link: "https://www.lala.com.mx/storage/app/media/LogotipoEvolucion/2016.png" },
        { link: "https://storage.googleapis.com/www-paredro-com/uploads/2018/11/%C2%BFPor-que%CC%81-el-logo-de-Sabritas-tiene-una-carita-feliz.jpg" },
        { link: "https://upload.wikimedia.org/wikipedia/commons/6/68/Pepsi_2023.svg" },
        { link: "https://impulsoregio.wordpress.com/wp-content/uploads/2015/01/barcel-1.png" },
    ];
    // Duplicamos los elementos para crear el efecto infinito
    const duplicatedItems = [...ruta, ...ruta];
    return (
        <Background>
            <IonPage className="overflow-y-auto overflow-x-hidden pb-2 w-full min-h-screen lg:px-14 m-auto">
                <div className="flex animate-infinite-scroll">
                    {duplicatedItems.map((data, key) => (
                        <OffertCard key={key} avatarUrl={data.link} />
                    ))}
                </div>
                <GridLayout />
            </IonPage>
        </Background>
    )
}

export default PageUser

