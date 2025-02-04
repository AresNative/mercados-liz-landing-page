
import { styles } from "../styles";
export default function PaginationTable({ currentPage, totalPages, handlePageChange }: any) {
    return (
        <div style={styles.paginationContainer}>
            <button
                style={styles.paginationButton}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            <span style={styles.pageInfo}>
                Page {currentPage} of {totalPages}
            </span>

            <button
                style={styles.paginationButton}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage >= totalPages}
            >
                Next
            </button>
        </div>
    )
}