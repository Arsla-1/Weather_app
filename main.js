console.log("hello");

function userSearch(event) {
  event.preventDefault();
  //remaining function logic goes here
}

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1d5f3f84d3msh2641af851d54b69p10d407jsn0eed17ff5dd1",
    "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com",
  },
};

fetch(
  "https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
