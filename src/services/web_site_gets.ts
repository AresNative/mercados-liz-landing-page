/*Muestra Informacion Usuarios  */
export async function GetUserInfo() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = fetch(`${apiUrl}reporteria/almacen`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  return response;
}
/*Muestra Informacion Nuevos Proveedores */
export async function GetProvInfo() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = fetch(`${apiUrl}proveedores`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  return response;
}
/*Muestra Calificacion y comentarios */
export async function GetValoracion() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = fetch(`${apiUrl}valoracion`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  return response;
}
/*Muestra Información nuevas postulaciones*/
export async function GetPostulacion() {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = fetch(`${apiUrl}postulacion`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  return response;
}
