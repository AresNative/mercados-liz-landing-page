import React from 'react';
import { FileText, Calendar, Building} from 'lucide-react';
import { Certification } from './certification';
import styles from './certificaciones.module.css';

interface CertificationCardProps {
    certification: Certification;
}

export const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
    const statusClasses = {
        active: styles.statusActive,
        expired: styles.statusExpired,
        pending: styles.statusPending,
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{certification.name}</h3>
                <span className={`${styles.cardStatus} ${statusClasses[certification.status]}`}>
                    {certification.status.charAt(0).toUpperCase() + certification.status.slice(1)}
                </span>
            </div>

            <div className={`${styles.cardBody} ${styles.spaceY3}`}>
                <div className={styles.cardRow}>
                    <Building size={18} />
                    <span>{certification.issuer}</span>
                </div>
                <div className={styles.cardRow}>
                    <Calendar size={18} />
                    <span>Válido hasta: {new Date(certification.validUntil).toLocaleDateString()}</span>
                </div>
            </div>

            <p className={styles.cardDescription}>{certification.description}</p>

            <a
                href={certification.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cardLink}
            >
                <FileText size={18} />
                Ver Certificado PDF
            </a>
        </div>
    );
};