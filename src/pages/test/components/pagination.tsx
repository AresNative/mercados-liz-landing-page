
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function PaginationTable({ currentPage, totalPages, handlePageChange }: any) {
    return (
        <div className="flex items-center justify-center space-x-2 mt-5">
            <button
                onClick={() => handlePageChange((prev: any) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft className="h-5 w-5" />
            </button>
            <span
                className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700"
            >{currentPage} de {totalPages}</span>
            <button
                onClick={() =>
                    handlePageChange((prev: any) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-2 rounded-md bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronRight className="h-5 w-5" />
            </button>
        </div>
    )
}