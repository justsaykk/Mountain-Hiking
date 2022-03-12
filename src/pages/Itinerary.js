import NavBar from "../components/NavBar";
import itinerariesData from "../datasets/itinerariesData";
import { useState } from "react";

export default function Itinerary(props) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
  });

  return (
    <div>
      <NavBar />
      <div id="header">
        <h1>Itineraries</h1>
      </div>
      <div className="itinerary-background">
        {itinerariesData.map((el) => {
          return (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                console.log(e.currentTarget);
              }}
            >
              <div className="itinerary-wrapper">
                <div className="image-holder">
                  <img
                    src={el.imageUrl}
                    alt={""}
                    style={{ height: "250px", width: "350px" }}
                  />
                </div>
                <div className="info-holder">
                  <h3 value={el.peakName}>{el.peakName}</h3>
                  <h4>Elevation: {el.elevation} m</h4>
                  <h4 className="peak-category">Category: {el.category}</h4>
                  <h4 className="duration">Duration: {el.duration} days</h4>
                  <br />
                  <p className="peak-description">{el.description}</p>
                  <br />
                  <p className="peak-price" value={el.price}>
                    Price: USD {el.price} per pax
                  </p>
                </div>
                <button type="submit">+</button>
              </div>
            </form>
          );
        })}
      </div>
    </div>
  );
}
