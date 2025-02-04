import { InputFormProps } from "@/utils/constants/interfaces";
import { Calendar1 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CalendarComponent(props: InputFormProps) {
    const { cuestion } = props;
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        birthDate: '',
    });

    const [showBirthDatePicker, setShowBirthDatePicker] = useState(false);

    const generateYearOptions = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = currentYear - 100; i <= currentYear; i++) {
            years.push(i);
        }
        return years.reverse();
    };

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    const generateDayOptions = (year: number, month: number) => {
        if (isNaN(year) || isNaN(month)) return Array.from({ length: 31 }, (_, i) => i + 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        return Array.from({ length: daysInMonth }, (_, i) => i + 1);
    };

    useEffect(() => {
        props.setValue(cuestion.name, formData.birthDate);
    }, [formData]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowBirthDatePicker(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className="flex flex-col" ref={dropdownRef}>
            <label className="leading-loose flex items-center gap-2">
                <Calendar1 className="w-4 h-4" />
                {cuestion.label}
            </label>
            <div className="relative">
                <input
                    type="text"
                    name="birthDate"
                    value={formData.birthDate}
                    onClick={() => setShowBirthDatePicker(true)}
                    readOnly
                    className="px-4 py-2 border focus:ring-purple-500 focus:border-purple-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 cursor-pointer"
                    placeholder={cuestion.placeholder}
                    {
                    ...props.register(cuestion.name,
                        cuestion.require
                            ? { required: "El campo es obligatorio." }
                            : {}
                    )
                    }
                />
                {showBirthDatePicker && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                        <div className="p-2">
                            <div className="grid grid-cols-3 gap-2">
                                <select
                                    className="px-2 py-1 border rounded-md"
                                    onChange={(e) => {
                                        const year = parseInt(e.target.value);
                                        const currentDate = new Date(formData.birthDate || Date.now());
                                        const newDate = new Date(year, currentDate.getMonth(), currentDate.getDate());
                                        setFormData({ ...formData, birthDate: newDate.toISOString().split('T')[0] });
                                    }}
                                >
                                    {generateYearOptions().map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="px-2 py-1 border rounded-md"
                                    onChange={(e) => {
                                        const month = parseInt(e.target.value);
                                        const currentDate = new Date(formData.birthDate || Date.now());
                                        const newDate = new Date(currentDate.getFullYear(), month, currentDate.getDate());
                                        setFormData({ ...formData, birthDate: newDate.toISOString().split('T')[0] });
                                    }}
                                >
                                    {months.map((month, index) => (
                                        <option key={month} value={index}>
                                            {month}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    className="px-2 py-1 border rounded-md"
                                    onChange={(e) => {
                                        const day = parseInt(e.target.value);
                                        const currentDate = new Date(formData.birthDate || Date.now());
                                        const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
                                        setFormData({ ...formData, birthDate: newDate.toISOString().split('T')[0] });
                                    }}
                                >
                                    {generateDayOptions(
                                        new Date(formData.birthDate || Date.now()).getFullYear(),
                                        new Date(formData.birthDate || Date.now()).getMonth()
                                    ).map((day) => (
                                        <option key={day} value={day}>
                                            {day}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                type="button"
                                className="mt-2 w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                onClick={() => setShowBirthDatePicker(false)}
                            >
                                Aceptar
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {props.errors[cuestion.name] && props.errors[cuestion.name]?.message && (
                <span className="text-red-400 p-1">
                    {props.errors[cuestion.name]?.message}
                </span>
            )}
        </div>
    )
}