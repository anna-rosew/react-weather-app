import "./Weather.css";

function Weather() {
  let weatherData = {
    city: "Liverpool",
    temperature: 6,
    date: "9th January 2023",
    day: "Tuesday",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 84,
    wind: 8,
  };
  return (
    <div className="Weather">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
        <link rel="stylesheet" href="src/style.css" />
        <script
          src="https://kit.fontawesome.com/4041205873.js"
          crossorigin="anonymous"
        ></script>
        <script src="src/javascript.js"></script>
        <title>Weather Application</title>
      </head>
      <div className="forecast-container">
        <section className="title">
          <form className="search-form">
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="📍Type a city..."
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="form-control btn btn-secondary"
                />
              </div>
              <div className="col-3">
                <button className="btn btn-success w-100">Where I Am</button>
              </div>
            </div>
          </form>
          <div className="Location">
            <h1>
              Weather: <span className="city">{weatherData.city}</span>
            </h1>
          </div>
        </section>
        <div className="overview">
          <div className="row">
            <div className="col-2">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="float-left"
              />
            </div>
            <div className="col-4">
              <div>
                <span className="current-temp-number">
                  {weatherData.temperature}
                </span>
                <span className="current-temp-units">
                  <a href="/">°C</a> | <a href="/">°F</a>
                </span>
              </div>
              <p>{weatherData.description}</p>
            </div>

            <div className="col-6">
              <h3 className="day">{weatherData.day}</h3>
              <h3 className="date">{weatherData.date}</h3>
              <h3 className="humidity">
                Humidity: <span>{weatherData.humidity}</span>%
              </h3>
              <h3 className="wind">
                Wind: <span>{weatherData.wind}</span>km/h
              </h3>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <p>THURS</p>
            </div>
            <div className="col-2">
              <p>FRI</p>
            </div>
            <div className="col-2">
              <p>SAT</p>
            </div>
            <div className="col-2">
              <p>SUN</p>
            </div>
            <div className="col-2">
              <p>MON</p>
            </div>
            <div className="col-2">
              <p>TUES</p>
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="emoji"
              />
            </div>
            <div className="col-2">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="emoji"
              />
            </div>

            <div className="col-2">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="emoji"
              />
            </div>
            <div className="col-2">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="emoji"
              />
            </div>
            <div className="col-2">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="emoji"
              />
            </div>
            <div className="col-2">
              <img
                src={weatherData.imgUrl}
                alt={weatherData.description}
                className="emoji"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">9°</span>
                <span className="weather-forecast-temperature-min"> 5°</span>
              </div>
            </div>
            <div className="col-2">
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">15°</span>
                <span className="weather-forecast-temperature-min"> 9°</span>
              </div>
            </div>
            <div className="col-2">
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">10°</span>
                <span className="weather-forecast-temperature-min"> 5°</span>
              </div>
            </div>
            <div className="col-2">
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">18°</span>
                <span className="weather-forecast-temperature-min"> 10°</span>
              </div>
            </div>
            <div className="col-2">
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">10°</span>
                <span className="weather-forecast-temperature-min"> 5°</span>
              </div>
            </div>
            <div className="col-2">
              <div className="weather-forecast-temperatures">
                <span className="weather-forecast-temperature-max">16°</span>
                <span className="weather-forecast-temperature-min"> 11°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="author">
          An{" "}
          <a href="https://github.com/anna-rosew/react-weather-app">
            Open Sourced Project
          </a>{" "}
          Coded by <a href="/">Anna-Rose Wain</a>
        </p>
      </div>
    </div>
  );
}

export default Weather;
