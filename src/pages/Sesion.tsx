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
        /*  <div> */
        /*  <h1>Esta es la pagina para iniciar sesion</h1>
        <button onClick={() => handleLogin('admin')}>Iniciar como Admin</button>
        <button onClick={() => handleLogin('reclutador')}>Iniciar como Reclutador</button>
        <button onClick={() => handleLogin('usuario')}>Iniciar como Usuario</button> */
        /*  </div> */
    )
}
export default SesionPage;