export interface Certification {
    id: string;
    name: string;
    issuer: string;
    validUntil: string;
    description: string;
    pdfUrl: string;
    category: string;
    status: 'active' | 'expired' | 'pending';
}

const calculateValidUntil = (): string => {
    const currentDate = new Date();
    const nextYear = new Date(currentDate);
    nextYear.setFullYear(currentDate.getFullYear() + 1); // Sumar un año

    const day = nextYear.getUTCDate().toString().padStart(2, '0'); // Día en formato "DD"
    const month = (nextYear.getUTCMonth() + 1).toString().padStart(2, '0'); // Mes en formato "MM"
    const year = nextYear.getUTCFullYear(); // Año

    return `${year}-${month}-${day}`; // Formato "YYYY-MM-DD"
};

const determineStatus = (validUntil: string): 'active' | 'expired' | 'pending' => {
    const today = new Date();
    const validUntilDate = new Date(validUntil);
    if (validUntil === '') {
        return 'pending'; // Si no tiene fecha, está pendiente
    }
    return validUntilDate < today ? 'expired' : 'active'; // Expirada si es menor que hoy, activa si no
};

export const certifications: Certification[] = [
    {
        id: '1',
        name: 'Certificación TIF (Tipo Inspección Federal)',
        issuer: 'Carnes JC ',
        validUntil: calculateValidUntil(),
        description: 'Distribuidores de productos de Carnes JC pueden estar seguros de que la carne ha sido procesada en instalaciones que cumplen con los rigurosos estándares sanitarios tanto nacionales como internacionales.',
        pdfUrl: 'https://example.com/iso14001.pdf',
        category: 'Sanitario',
        status: determineStatus(calculateValidUntil()),
    },
    {
        id: '2',
        name: 'Certificación Angus',
        issuer: 'Carnes JC ',
        validUntil: calculateValidUntil(),
        description: 'Carnes JC otorga la certificación Angus a los distribuidores que trabajan con carne de alta calidad, lo que valida el origen y la calidad superior del producto, resaltando su marmoleo natural y su sabor único.',
        pdfUrl: 'https://example.com/haccp.pdf',
        category: 'Alimentos',
        status: determineStatus(calculateValidUntil()),
    },
    {
        id: '3',
        name: 'Certificación HACCP',
        issuer: 'Carnes JC ',
        validUntil: calculateValidUntil(),
        description: 'Para garantizar la inocuidad alimentaria, los distribuidores reciben productos que cumplen con los estándares del sistema HACCP, lo que asegura que la carne ha sido sometida a un estricto proceso de control de calidad y seguridad alimentaria.',
        pdfUrl: 'https://example.com/haccp.pdf',
        category: 'Sanitario',
        status: determineStatus(calculateValidUntil()),
    },
    {
        id: '4',
        name: 'Certificación HACCP',
        issuer: 'Carnes JC ',
        validUntil: calculateValidUntil(),
        description: 'Para garantizar la inocuidad alimentaria, los distribuidores reciben productos que cumplen con los estándares del sistema HACCP, lo que asegura que la carne ha sido sometida a un estricto proceso de control de calidad y seguridad alimentaria.',
        pdfUrl: 'https://example.com/haccp.pdf',
        category: 'Sanitario',
        status: determineStatus(calculateValidUntil()),
    },
];