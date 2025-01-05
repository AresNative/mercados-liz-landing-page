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
export const certifications: Certification[] = [
    {
        id: '1',
        name: 'NOM-001-SEDE-2012',
        issuer: 'Bureau Veritas',
        validUntil: '2024-12-31',
        description: 'Certificación de Instalación en Media y Baja Tensión',
        pdfUrl: 'https://example.com/iso9001.pdf',
        category: 'Calidad',
        status: 'pending',
    },
    {
        id: '2',
        name: 'HACCP (Hazard Analysis and Critical Control Points)',
        issuer: 'SGS',
        validUntil: '2024-10-15',
        description: 'Fundamental para prevenir riesgos de contaminación.',
        pdfUrl: 'https://example.com/iso14001.pdf',
        category: 'Calidad',
        status: 'expired',
    },
    {
        id: '3',
        name: 'ISO 14001',
        issuer: 'TÜV Rheinland',
        validUntil: '2024-08-20',
        description: 'Sistema de gestión ambiental para minimizar el impacto ecológico.',
        pdfUrl: 'https://example.com/haccp.pdf',
        category: 'Ambiental',
        status: 'active',
    },
    {
        id: '4',
        name: 'AENOR: Certificación de Protocolos de Prevención ante el COVID-19',
        issuer: 'TÜV Rheinland',
        validUntil: '2024-12-20',
        description: 'Salud y protocolos covid-19',
        pdfUrl: 'https://example.com/haccp.pdf',
        category: 'Salud',
        status: 'pending',
    },

];