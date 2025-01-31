import Page from "@/template/page";
import styles from './certificaciones.module.css';
import { Award } from "lucide-react";
import { CertificationCard } from '../certificaciones/CertificationCard';
import { CertificationFilter } from '../certificaciones//CertificationFilter';
import { certifications } from '../certificaciones/certification';
import { useMemo, useState } from "react";

const CertificacionPage = () => {

    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = useMemo(() => {
        return Array.from(new Set(certifications.map((cert) => cert.category)));
    }, []);

    const filteredCertifications = useMemo(() => {
        if (selectedCategory === 'all') return certifications;
        return certifications.filter((cert) => cert.category === selectedCategory);
    }, [selectedCategory]);

    return (
        <Page>
            <div className={styles.pageWrapper}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.containerheader}>
                        <Award className={styles.iconowad} />
                        <div>
                            <h1 className={styles.title}>Certificaciones</h1>
                            <p className={styles.subtitle}>Conoce nuestros estándares de calidad y seguridad</p>
                        </div>
                    </div>
                </div>
                {/* Header */}

                {/* CertificationList*/}
                <div className={styles.contentContainer}>
                    <div>
                        <CertificationFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onCategoryChange={setSelectedCategory}
                        />
                        <div className={styles.container}>
                            {filteredCertifications.map((certification) => (
                                <CertificationCard key={certification.id} certification={certification} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default CertificacionPage;