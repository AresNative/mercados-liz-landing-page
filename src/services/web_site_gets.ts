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
  const response = fetch(`${apiUrl}users/postulacion`, {
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
/*Muestra los Documentos*/
export async function GetArchivos(nombreArchivo = "pruebas.pdf") {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = fetch(`${apiUrl}Archivos/${nombreArchivo}`, {
    method: "GET",
  })
    .then((response) => response)
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  return response;
}
