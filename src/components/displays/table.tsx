import { IonButton } from '@ionic/react';
import './Table.css'; // Archivo de estilos
import { FileText } from 'lucide-react';

export function ResponsiveTable() {
    return (
        <div className="table-container">
            <table className="responsive-table">
                <thead>
                    <tr>
                        <th>Folio</th>
                        <th>RFC</th>
                        <th>Monto</th>
                        <th>Fecha</th>
                        <th><center>(PDF)</center></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Cliente A</td>
                        <td>$1000.00</td>
                        <td>2023-06-01</td>
                        <td>
                            <IonButton color={"danger"} slot="end" shape="round" size="small" fill="clear">
                                <FileText />
                            </IonButton>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
