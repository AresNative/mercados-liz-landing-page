export async function GetUserInfo() {
  const apiUrl = process.env.REACT_APP_API_URL;
  fetch(`${apiUrl}/WeatherForecast`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
