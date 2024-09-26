 async function GetUserInfo() {
   fetch(`${process.env.REACT_APP_API_URL}/WeatherForecast`, {
     method: "GET",
   })
     .then((response) => response.json())
     .then((response) => console.log(response))
     .catch((err) => console.error(err));
 }