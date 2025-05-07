import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IonItem, IonLabel, IonList, IonSpinner, IonSelect, IonSelectOption, IonProgressBar } from "@ionic/react";
import { useGetArticulosQuery } from "@/pages/test/hooks/reducers/api";
import { Search, ShoppingBasket } from "lucide-react";
import { Product } from "@/pages/test/utils/data/example-data";
import useDebounce from "../../hooks/use-debounce";

type Sucursal = {
    id: string;
    nombre: string;
};

const sucursales: Sucursal[] = [
    { id: "(Precio Lista)", nombre: "Mayoreo" },
    { id: "(Precio 4)", nombre: "Palmas" },
    { id: "(Precio 2)", nombre: "Liz" },
    { id: "(Precio 3)", nombre: "Testerazo" },
];

const Input = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className={`w-full px-3 py-2 border text-gray-500 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 ${className}`}
            {...props}
        />
    );
};

const PAGE_SIZE = 5;
const COOLDOWN_TIME = 3000;

function PriceChecker() {
    const [combinedData, setCombinedData] = useState<Product[]>([]);
    const [inputValue, setInputValue] = useState("");
    const [selectedSucursal, setSelectedSucursal] = useState(sucursales[2].id);
    const [getProgress, setProgress] = useState(0);

    const { data, isLoading, isError, error } = useGetArticulosQuery({
        pageSize: PAGE_SIZE,
        filtro: inputValue,
        listaPrecio: selectedSucursal,
    }, { refetchOnMountOrArgChange: true, skip: inputValue.length < 3 });
    //const debouncedInputValue = useDebounce(inputValue, 500);

    async function fetchData(art: any) {
        const newProducts = await art
            .map((item: any) => {
                const oferta = data.ofertas?.find((o: any) => o.articulo === item.cuenta);
                return {
                    id: item.codigo,
                    nombre: item.nombre,
                    precio: item.precio,
                    unidad: item.unidad,
                    oferta: oferta ? {
                        precio: parseFloat(oferta.precio),
                        fechaHasta: new Date(oferta.fechaHasta).toLocaleDateString()
                    } : undefined
                };
            });

        setCombinedData(newProducts);
    }
    useEffect(() => {
        if (data) {
            fetchData(data.precios)
        }/* 7503027753629 | 038000184932 | 7501008057032 */
    }, [data]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setInputValue('');
        }, COOLDOWN_TIME);

        return () => clearTimeout(timer);
    }, [inputValue]);

    useEffect(() => {
        setCombinedData([]);
    }, [inputValue, selectedSucursal]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    };

    const handleSucursalChange = (e: CustomEvent) => {
        setSelectedSucursal(e.detail.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') e.preventDefault();
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 1) {
                    clearInterval(interval);
                    return 1;
                }
                return prev + 0.05; // Ajusta este valor para cambiar la velocidad
            });
        }, 100); // Actualiza cada 100 ms (2000 ms total)

        return () => clearInterval(interval);
    }, [data]);

    return (
        <div className="mx-auto inset-0 z-20">
            <div className="relative flex max-h-3/4 flex-col justify-start items-center">
                <div className="bg-background w-full sticky">
                    <div className="relative space-y-2">
                        <IonItem>
                            <IonLabel>Sucursal</IonLabel>
                            <IonSelect
                                value={selectedSucursal}
                                onIonChange={handleSucursalChange}
                                interface="popover"
                            >
                                {sucursales.map((sucursal) => (
                                    <IonSelectOption key={sucursal.id} value={sucursal.id}>
                                        {sucursal.nombre}
                                    </IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>

                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Escanear código o buscar..."
                                value={inputValue}
                                onChange={handleInputChange}
                                onKeyDown={handleKeyDown}
                                autoFocus
                                className="pl-3 pr-9 text-sm rounded-lg bg-white font-medium text-center"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
                                <Search className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-sm absolute top-32 inset-0 mx-auto z-10 mt-2">
                    <AnimatePresence mode="wait">
                        {combinedData.length > 0 && (
                            <motion.div
                                className="w-full max-h-[500px] overflow-y-auto border rounded-md shadow-lg overflow-hidden bg-white"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <motion.ul>
                                    {combinedData.map((product) => (
                                        <motion.li
                                            key={product.id}
                                            className="px-3 py-2 flex items-center justify-between cursor-pointer rounded-md"
                                            layout
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <div className="p-0 m-0 w-full h-full">
                                                <IonList className="flex items-center gap-2 justify-between flex-1">
                                                    <IonItem lines="none" className="w-full flex items-start gap-4 hover:bg-gray-50 transition-colors">
                                                        <ShoppingBasket
                                                            className="text-purple-600 shrink-0 mr-2"
                                                            aria-hidden="true"
                                                            role="img"
                                                        />
                                                        <section className="flex flex-col gap-1 flex-1 min-w-0">
                                                            <IonLabel className="text-base font-medium text-gray-900 leading-tight">
                                                                <label>
                                                                    {product.nombre?.toLowerCase().split(' ').map(word =>
                                                                        word.charAt(0).toUpperCase() + word.slice(1)
                                                                    ).join(' ')}
                                                                    {product.oferta && (
                                                                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                                                                            OFERTA
                                                                        </span>
                                                                    )}
                                                                </label>
                                                                <span className="text-gray-500"> | {product.unidad}</span>
                                                            </IonLabel>

                                                            {product.oferta ? (
                                                                <div className="flex flex-col gap-1">
                                                                    <div className="flex items-baseline gap-2">
                                                                        <span className="text-2xl line-through text-gray-400">
                                                                            ${product.precio.toLocaleString()}
                                                                        </span>
                                                                        <span className="text-4xl font-semibold text-red-600">
                                                                            ${product.oferta.precio.toLocaleString()}
                                                                        </span>
                                                                    </div>
                                                                    <span className="text-xs text-green-600">
                                                                        Válida hasta: {product.oferta.fechaHasta}
                                                                    </span>
                                                                </div>
                                                            ) : (
                                                                <span className="text-4xl font-semibold text-purple-700">
                                                                    ${product.precio.toLocaleString()}
                                                                </span>
                                                            )}

                                                            <IonProgressBar
                                                                value={getProgress}
                                                                style={{
                                                                    '--progress-background': '#6b46c1',
                                                                    '--buffer-background': '#e9d8fd',
                                                                    height: '4px',
                                                                    marginTop: '8px'
                                                                }}
                                                            />
                                                        </section>
                                                    </IonItem>
                                                </IonList>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <div className="bottom-0 mt-2 px-3 py-2 border-t border-gray-100">
                                    <div className="flex items-center justify-between text-xs text-gray-500">
                                        <span>Resultados: {combinedData.length}</span>
                                        <span>ESC para cancelar</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default PriceChecker;