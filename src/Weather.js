import "./Weather.css";
function Weather() {
  return (
    <div className="weather">
      <div className="dailyData">
        <header className="header">MON</header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          className="dailyImage"
        ></img>
        <h1 className="dailyTemp">43°</h1>
      </div>
      <div className="dailyData">
        <header className="header">TUE</header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          className="dailyImage"
        ></img>
        <h1 className="dailyTemp">43°</h1>
      </div>
      <div className="dailyData">
        <header className="header">WED</header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          className="dailyImage"
        ></img>
        <h1 className="dailyTemp">34°</h1>
      </div>
      <div className="dailyData">
        <header className="header">THU</header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          className="dailyImage"
        ></img>
        <h1 className="dailyTemp">48°</h1>
      </div>
      <div className="dailyData">
        <header className="header">FRI</header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          className="dailyImage"
        ></img>
        <h1 className="dailyTemp">42°</h1>
      </div>
      <div className="dailyData">
        <header className="header">SAT</header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          className="dailyImage"
        ></img>
        <h1 className="dailyTemp">40°</h1>
      </div>
      <div className="dailyData">
        <header className="header">SUN</header>
        <img
          src="https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png"
          className="dailyImage"
        ></img>
        <h1 className="dailyTemp">47°</h1>
      </div>
    </div>
  );
}
export default Weather;
