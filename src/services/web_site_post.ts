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
  const archivos = await extractFiles(data);
  let archivosFormato = renderData(archivos);
  PostArchivos(archivosFormato);
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

/* Manda Informacion Nuevos archivos*/
export async function PostArchivos(data: any) {
  const apiUrl = process.env.REACT_APP_API_URL;
  const response = fetch(`${apiUrl}imagenes/upload`, {
    method: "POST",
    body: data,
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  return response;
}

//fijos
export function renderData(media: any) {
  const formData = new FormData();
  formData.append("File", media[0]);
  return formData;
}

type DynamicObject = { [key: string]: any };
const extractFiles = (obj: DynamicObject): any[] => {
  const result: any[] = [];
  const isFile = (value: any) =>
    typeof value === "object" && value !== null && "name" in value;
  const recursiveSearch = (data: DynamicObject | any): void => {
    if (typeof data === "object" && data !== null) {
      for (const key in data) {
        if (isFile(data[key])) {
          result.push(data[key]);
        } else if (typeof data[key] === "object") {
          recursiveSearch(data[key]);
        }
      }
    }
  };
  recursiveSearch(obj);
  return result;
};
