"use client"

import type React from "react"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Plus, Tag, ShoppingCart, Trash2, DollarSign } from "lucide-react"
import useDebounce from "../hooks/use-debounce"
import { fetchDynamicData } from "../../api/get-data"

interface Product {
    id: string
    name: string
    price: number
    category: string
    icon: React.ReactNode
    description?: string
}

interface ListingItem extends Product {
    quantity: number
}

interface formatFilter {
    key: string;
    value: string;
    operator: "like" | "=" | ">=" | "<=" | ">" | "<" | "<>" | ""; // Incluí "" como opción para el operador.
}

interface formatSuma {
    key: string;
}
interface formatLoadDate {
    filters: {
        filtros: formatFilter[];
        sumas: formatSuma[];
    };
    page: number;
    sum: boolean;
}

// Componentes maquetados con Tailwind
const Input = ({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className={`w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-gray-100 ${className}`}
            {...props}
        />
    )
}

const Button = ({
    children,
    variant = "default",
    size = "default",
    className = "",
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "default" | "outline" | "ghost" | "link"
    size?: "default" | "sm" | "lg"
}) => {
    const baseStyles =
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

    const variants = {
        default: "bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700",
        outline: "border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800",
        ghost: "hover:bg-gray-100 dark:hover:bg-gray-800",
        link: "text-primary-500 underline-offset-4 hover:underline",
    }

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6 text-lg",
    }

    return (
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
            {children}
        </button>
    )
}

const allProducts: Product[] = [
    {
        id: "1",
        name: "Laptop HP Pavilion",
        price: 899.99,
        category: "Electrónicos",
        icon: <DollarSign className="h-4 w-4 text-blue-500" />,
        description: "Intel Core i7, 16GB RAM, 512GB SSD",
    },
    {
        id: "2",
        name: "Smartphone Samsung Galaxy",
        price: 699.99,
        category: "Electrónicos",
        icon: <DollarSign className="h-4 w-4 text-green-500" />,
        description: "6.7 pulgadas, 128GB, 8GB RAM",
    },
    {
        id: "3",
        name: "Auriculares Sony WH-1000XM4",
        price: 349.99,
        category: "Audio",
        icon: <DollarSign className="h-4 w-4 text-purple-500" />,
        description: "Cancelación de ruido, Bluetooth",
    },
    {
        id: "4",
        name: "Monitor LG UltraGear",
        price: 299.99,
        category: "Periféricos",
        icon: <DollarSign className="h-4 w-4 text-orange-500" />,
        description: "27 pulgadas, 144Hz, 1ms",
    },
    {
        id: "5",
        name: "Teclado Mecánico Logitech",
        price: 129.99,
        category: "Periféricos",
        icon: <DollarSign className="h-4 w-4 text-red-500" />,
        description: "RGB, Switches Blue",
    },
]

function PriceChecker() {
    const [query, setQuery] = useState("")
    const [searchResults, setSearchResults] = useState<Product[]>(allProducts)
    const [isFocused, setIsFocused] = useState(false)
    const [listing, setListing] = useState<ListingItem[]>([])
    const [isCreatingListing, setIsCreatingListing] = useState(false)
    const [listingTitle, setListingTitle] = useState("")
    const debouncedQuery = useDebounce(query, 200)

    const [data, setData] = useState<Record<string, any>[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const loadData = async (filter: formatLoadDate, endpoint: string) => {
        try {
            const { data: resultData, totalPages: pages } = await fetchDynamicData<any>(filter, endpoint);
            setData(resultData);
            setTotalPages(pages);
        } catch (error) {
            console.error('Error loading data:', error);
        }
    };

    const columns = useMemo(() => data[0] ? Object.keys(data[0]) : [], [data]);

    useEffect(() => {
        loadData({
            filters: {
                filtros: [{ key: "", value: "", operator: "" }],
                sumas: [{ key: "Categoria" }],
            },
            page: currentPage,
            sum: false
        }, 'v2/select/combos');
    }, [currentPage]);


    useEffect(() => {
        if (!isFocused) {
            return
        }

        if (!debouncedQuery) {
            setSearchResults(allProducts)
            return
        }

        const normalizedQuery = debouncedQuery.toLowerCase().trim()
        const filteredProducts = allProducts.filter((product) => {
            const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase()
            return searchableText.includes(normalizedQuery)
        })

        setSearchResults(filteredProducts)
    }, [debouncedQuery, isFocused])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const addToListing = (product: Product) => {
        setListing((prevListing) => {
            const existingItem = prevListing.find((item) => item.id === product.id)

            if (existingItem) {
                return prevListing.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
            } else {
                return [...prevListing, { ...product, quantity: 1 }]
            }
        })
    }

    const removeFromListing = (productId: string) => {
        setListing((prevListing) => prevListing.filter((item) => item.id !== productId))
    }

    const updateQuantity = (productId: string, quantity: number) => {
        if (quantity <= 0) {
            removeFromListing(productId)
            return
        }

        setListing((prevListing) => prevListing.map((item) => (item.id === productId ? { ...item, quantity } : item)))
    }

    const calculateTotal = () => {
        return listing.reduce((total, item) => total + item.price * item.quantity, 0)
    }

    const saveListing = () => {
        // Aquí se implementaría la lógica para guardar el listado
        console.log("Listado guardado:", {
            title: listingTitle || "Listado sin título",
            items: listing,
            total: calculateTotal(),
        })

        // Reiniciar el formulario
        setListing([])
        setListingTitle("")
        setIsCreatingListing(false)
    }

    const container = {
        hidden: { opacity: 0, height: 0 },
        show: {
            opacity: 1,
            height: "auto",
            transition: {
                height: {
                    duration: 0.4,
                },
                staggerChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                height: {
                    duration: 0.3,
                },
                opacity: {
                    duration: 0.2,
                },
            },
        },
    }

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
            },
        },
        exit: {
            opacity: 0,
            y: -10,
            transition: {
                duration: 0.2,
            },
        },
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            <div className="relative flex flex-col justify-start items-center">
                {!isCreatingListing ? (
                    <>
                        <div className=" bg-white w-full max-w-sm sticky top-0 bg-background z-10 pt-4 pb-1">
                            <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block" htmlFor="search">
                                Verificador de Precios
                            </label>
                            <div className="relative">
                                <Input
                                    type="text"
                                    placeholder="Buscar productos..."
                                    value={query}
                                    onChange={handleInputChange}
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setTimeout(() => setIsFocused(false), 200)}
                                    className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-lg"
                                />
                                <div className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4">
                                    <Search className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                                </div>
                            </div>
                        </div>

                        <div className="w-full max-w-sm">
                            <AnimatePresence>
                                {isFocused && (
                                    <motion.div
                                        className="w-full border rounded-md shadow-sm overflow-hidden dark:border-gray-800 bg-white dark:bg-gray-900 mt-1"
                                        variants={container}
                                        initial="hidden"
                                        animate="show"
                                        exit="exit"
                                    >
                                        <motion.ul>
                                            {searchResults.map((product) => (
                                                <motion.li
                                                    key={product.id}
                                                    className="px-3 py-2 flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer rounded-md"
                                                    variants={item}
                                                    layout
                                                >
                                                    <div className="flex items-center gap-2 justify-between flex-1" onClick={() => addToListing(product)}>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-gray-500">{product.icon}</span>
                                                            <div className="flex flex-col">
                                                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                                                    {product.name}
                                                                </span>
                                                                <span className="text-xs text-gray-400">{product.description}</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                                                                ${product.price.toFixed(2)}
                                                            </span>
                                                            <button
                                                                className="h-7 w-7 p-0 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                                onClick={() => addToListing(product)}
                                                            >
                                                                <Plus className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.li>
                                            ))}
                                        </motion.ul>
                                        <div className="mt-2 px-3 py-2 border-t border-gray-100 dark:border-gray-800">
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>Resultados: {searchResults.length}</span>
                                                <span>ESC para cancelar</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {listing.length > 0 && (
                            <motion.div
                                className="w-full max-w-sm mt-6 border rounded-md p-4 dark:border-gray-800 bg-white dark:bg-gray-900"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="font-medium text-sm">Listado Actual</h3>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setIsCreatingListing(true)}
                                        className="flex items-center"
                                    >
                                        <ShoppingCart className="h-4 w-4 mr-2" />
                                        Finalizar Listado
                                    </Button>
                                </div>
                                <ul className="space-y-2">
                                    {listing.map((item) => (
                                        <li key={item.id} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-2">
                                                <div className="flex flex-col">
                                                    <span>{item.name}</span>
                                                    <span className="text-xs text-gray-500">${item.price.toFixed(2)} c/u</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="flex items-center">
                                                    <button
                                                        className="h-6 w-6 p-0 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-2">{item.quantity}</span>
                                                    <button
                                                        className="h-6 w-6 p-0 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                                <button
                                                    className="h-6 w-6 p-0 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-red-500"
                                                    onClick={() => removeFromListing(item.id)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 pt-3 border-t flex justify-between items-center">
                                    <span className="font-medium">Total:</span>
                                    <span className="font-bold text-lg">${calculateTotal().toFixed(2)}</span>
                                </div>
                            </motion.div>
                        )}
                    </>
                ) : (
                    <motion.div
                        className="w-full max-w-sm mt-6 border rounded-md p-4 dark:border-gray-800 bg-white dark:bg-gray-900"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-medium">Crear Listado</h3>
                            <button
                                className="px-3 py-1 text-sm rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                                onClick={() => setIsCreatingListing(false)}
                            >
                                Volver
                            </button>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">
                                    Título del Listado
                                </label>
                                <Input
                                    type="text"
                                    placeholder="Ej: Compras de Tecnología"
                                    value={listingTitle}
                                    onChange={(e) => setListingTitle(e.target.value)}
                                    className="w-full"
                                />
                            </div>

                            <div>
                                <label className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1 block">
                                    Productos ({listing.length})
                                </label>
                                <ul className="space-y-2 max-h-60 overflow-y-auto">
                                    {listing.map((item) => (
                                        <li
                                            key={item.id}
                                            className="flex items-center justify-between text-sm p-2 border rounded-md dark:border-gray-700"
                                        >
                                            <div className="flex flex-col">
                                                <span className="font-medium">{item.name}</span>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <span>
                                                        {item.quantity} x ${item.price.toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>
                                            <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-3 border-t flex justify-between items-center">
                                <span className="font-medium">Total:</span>
                                <span className="font-bold text-lg">${calculateTotal().toFixed(2)}</span>
                            </div>

                            <div className="flex justify-end gap-2 pt-4">
                                <Button variant="outline" onClick={() => setIsCreatingListing(false)}>
                                    Cancelar
                                </Button>
                                <Button
                                    onClick={saveListing}
                                    disabled={listing.length === 0}
                                    className="flex items-center disabled:opacity-50"
                                >
                                    <Tag className="h-4 w-4 mr-2" />
                                    Guardar Listado
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default PriceChecker

