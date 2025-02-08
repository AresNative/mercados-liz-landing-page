import { assignUsers } from "@/store/reducerUser";
import { useDispatch } from 'react-redux';

const SesionPage = () => {
    const dispatch = useDispatch();

    // Función para simular el login
    const handleLogin = (userType: string) => {
        const token =
            userType === 'admin'
                ? 'admin'
                : userType === 'reclutador'
                    ? 'reclutador'
                    : 'usuario';

        // Actualizar estado global
        dispatch(
            assignUsers({
                id: 1, // Ejemplo de ID
                token,
                permisos: [], // Puedes agregar permisos aquí
            })
        );
    };

    return (
        <>
        </>
    )
}
export default SesionPage;