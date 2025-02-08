import { InputFormProps } from "@/utils/constants/interfaces";
import { Calendar1 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CalendarComponent({ cuestion, setValue, register, errors }: InputFormProps) {
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [birthDate, setBirthDate] = useState("");
    const [showDatePicker, setShowDatePicker] = useState(false);

    // Determinar la fecha inicial cuando se abre el selector
    const currentDate = birthDate ? new Date(birthDate) : new Date();
    const [year, setYear] = useState(currentDate.getFullYear());
    const [month, setMonth] = useState(currentDate.getMonth());
    const [day, setDay] = useState(currentDate.getDate());

    const years = Array.from({ length: 101 }, (_, i) => new Date().getFullYear() - i);
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const days = Array.from({ length: new Date(year, month + 1, 0).getDate() }, (_, i) => i + 1);

    useEffect(() => {
        setValue(cuestion.name, birthDate);
    }, [birthDate]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDatePicker(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleAccept = () => {
        const selectedDate = new Date(year, month, day);
        setBirthDate(selectedDate.toISOString().split("T")[0]);
        setShowDatePicker(false);
    };

    return (
        <div className="flex flex-col" ref={dropdownRef}>
            <label className="leading-loose flex items-center gap-2">
                <Calendar1 className="w-4 h-4" />
                {cuestion.label}
            </label>
            <div className="relative">
                <input
                    type="text"
                    value={birthDate}
                    onClick={() => {
                        setShowDatePicker(true);
                        // Asegurar que la fecha mostrada en los selects coincida con la fecha actual
                        const today = new Date();
                        setYear(today.getFullYear());
                        setMonth(today.getMonth());
                        setDay(today.getDate());
                    }}
                    readOnly
                    className="px-4 py-2 border focus:ring-purple-500 focus:border-purple-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 cursor-pointer"
                    placeholder={cuestion.placeholder}
                    {...register(cuestion.name, cuestion.require ? { required: "El campo es obligatorio." } : {})}
                />
                {showDatePicker && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg p-2">
                        <div className="grid grid-cols-3 gap-2">
                            <select
                                aria-label="Seleccionar año"
                                className="px-2 py-1 border rounded-md"
                                value={year}
                                onChange={(e) => setYear(parseInt(e.target.value))}
                            >
                                {years.map((y) => (
                                    <option key={y} value={y}>
                                        {y}
                                    </option>
                                ))}
                            </select>
                            <select
                                aria-label="Seleccionar mes"
                                className="px-2 py-1 border rounded-md"
                                value={month}
                                onChange={(e) => setMonth(parseInt(e.target.value))}
                            >
                                {months.map((m, index) => (
                                    <option key={m} value={index}>
                                        {m}
                                    </option>
                                ))}
                            </select>
                            <select
                                aria-label="Seleccionar día"
                                className="px-2 py-1 border rounded-md"
                                value={day}
                                onChange={(e) => setDay(parseInt(e.target.value))}
                            >
                                {days.map((d) => (
                                    <option key={d} value={d}>
                                        {d}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            type="button"
                            className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            onClick={handleAccept}
                        >
                            Aceptar
                        </button>
                    </div>
                )}
            </div>
            {errors[cuestion.name] && <span className="text-red-400 p-1">{errors[cuestion.name]?.message}</span>}
        </div>
    );
}
