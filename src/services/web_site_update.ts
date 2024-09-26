async function PutUserInfo() {
  fetch(`${process.env.REACT_APP_API_URL}/WeatherForecast`, {
      method: "PUT",
      //body:{info necesaria }
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
