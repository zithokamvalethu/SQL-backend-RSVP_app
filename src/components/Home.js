import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="top">
        <div class="info">
          <h1>RSVP</h1>
          <h2>for the wedding anniversary of</h2>
          <h1>Future Tabinda Zito & Zain Javadd Malik</h1>
          <p class="line">________________________________________</p>
          <h2>The Details</h2>
          <p>Saturday, September 22, 2022</p>
          <p>12:00 PM</p>
          <br></br>
          <h2>Ceremony & Reception</h2>
          <p>Chapel of Our Saviour</p>
          <p>8 4th St, Colorado Springs, CO 80906</p>
          <p class="line">________________________________________</p>
        </div>

        <div>
          <p>GO TO FILL RSVP FORM:</p>
          <hr />
          <br></br>

          <p>
            <button onClick={() => navigate("/form")}>RSVP</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
