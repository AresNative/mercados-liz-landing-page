import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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
