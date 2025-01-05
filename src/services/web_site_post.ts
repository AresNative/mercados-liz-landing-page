/*Manda inicio de sesion de los usuarios */
export async function PostUser(data: any) {
  const apiUrl = process.env.REACT_APP_API_URL;
  return fetch(`${apiUrl}users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // signal: controller.signal = tiempo real
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.error(err));
}
/*Manda el Registro de nuevos usuarios */
export async function PostUserReg(data: any) {
  const apiUrl = process.env.REACT_APP_API_URL;
  fetch(`${apiUrl}users/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // signal: controller.signal = tiempo real
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
/* Manda Informacion Nuevos Proveedores*/
export async function PostProveedor(data: any) {
  const apiUrl = process.env.REACT_APP_API_URL;
  fetch(`${apiUrl}proveedores`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-patch+json",
    },
    body: JSON.stringify(data), // JSON.stringify se encarga de agregar comillas dobles en nombres de propiedades
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => console.log("Respuesta del servidor:", response))
    .catch((err) => console.error("Error en la solicitud:", err));
}
/* Manda Calificacion y comentarios */
export async function PostValoracion(data: any) {
  console.log(data);

  const apiUrl = process.env.REACT_APP_API_URL;
  fetch(`${apiUrl}valoracion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-patch+json",
    },
    body: JSON.stringify(data), // JSON.stringify se encarga de agregar comillas dobles en nombres de propiedades
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => console.log("Respuesta del servidor:", response))
    .catch((err) => console.error("Error en la solicitud:", err));
}
/* Manda la informacion de postulacion */
export async function PostPostulacion(data: any) {
  const apiUrl = process.env.REACT_APP_API_URL;
  fetch(`${apiUrl}users/postulacion`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json-patch+json",
    },
    body: JSON.stringify(data), // JSON.stringify se encarga de agregar comillas dobles en nombres de propiedades
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return response.json();
    })
    .then((response) => console.log("Respuesta del servidor:", response))
    .catch((err) => console.error("Error en la solicitud:", err));
}
