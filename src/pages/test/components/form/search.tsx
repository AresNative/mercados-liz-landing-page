import { SearchableSelectProps } from "@/utils/constants/interfaces";
import { Search, Star } from "lucide-react";
import { useEffect, useState } from "react";

export function SearchComponent(props: SearchableSelectProps) {
    const { cuestion } = props;
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        props.setValue(cuestion.name, searchTerm);
    }, [cuestion.multi, cuestion.name, props, searchTerm]);

    return (
        <div className="flex flex-col">
            <label className="leading-loose flex items-center gap-2">
                <Star className="w-4 h-4" />
                {cuestion.label}
            </label>
            <div className="relative flex-1">
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder={cuestion.placeholder}
                    className="py-2 pl-10 w-full rounded-md focus:outline-none border focus:ring-purple-500 focus:border-purple-900 border-gray-300 shadow-md focus:border-indigo-500 focus:ring-indigo-500"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div></div>
    )
}