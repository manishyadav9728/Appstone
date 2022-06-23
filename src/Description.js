import "./Description.css";
function Description() {
  return (
    <div className="mainContainer">
      <div className="upper">
        <img
          className="image"
          src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
        ></img>
        <h1 className="temp">43°</h1>
        <div className="text">
          <p>Precipitation:0%</p>
          <p>Wind:8km/h</p>
          <p>Humidity:16%</p>
        </div>
      </div>
      <div className="lower">
        <h1 className="lowerText">Temperature</h1>
        <span>|</span>
        <h1 className="lowerText">Precepation</h1>
      </div>
    </div>
  );
}
export default Description;
