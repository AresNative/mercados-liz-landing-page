async function PostUser() {
  fetch(`${process.env.REACT_APP_API_URL}/WeatherForecast`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // signal: controller.signal = tiempo real 
    //body:{info necesaria }
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
