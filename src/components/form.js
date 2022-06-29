import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    food: "",
    time: "",
    attendance: "",
  });

  const navigate = useNavigate();

  const [people, setPeople] = useState([]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, time, attendance, food } = formData;
    if (name && time && attendance && food) {
      setPeople([...people, formData]);
    }
  };
  const deleteInvite = (update) => {
    const handleDelete = [...people];
    handleDelete.splice(update, 1);
    setPeople(handleDelete);
  };

  return (
    <div>
      <div>
        <nav>
          <a>Home</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a>Attending</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a>Not Attending</a>
        </nav>
        <br />
      </div>
      <div>
        <h1>YOU HAVE BEEN INVITED</h1>
        <form className="column" onSubmit={handleSubmit}>
          NAME:{" "}
          <label>
            <input
              type="text"
              autoComplete="off"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
          </label>
          SURNAME:{" "}
          <label>
            <input
              type="text"
              autoComplete="off"
              name="surname"
              onChange={handleChange}
              value={formData.surname}
            />
          </label>
          <h2>time</h2>
          <label />
          DAY
          <input type="radio" onChange={handleChange} name="time" value="day" />
          <span />
          <labe />
          night
          <input
            type="radio"
            name="time"
            onChange={handleChange}
            value="night"
          />
          <span />
          <h2>Food</h2>
          <label className="container" />
          ALL
          <input
            value="ALL"
            type="checkbox"
            name="food"
            onChange={handleChange}
          />
          <label className="container" />
          Sushi
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="sushi"
          />
          <span />
          <label className="container" />
          Pasta
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="pasta"
          />
          <span className="checkmark" />
          <label className="container" />
          Meaty Platter
          <input
            type="checkbox"
            name="food"
            onChange={handleChange}
            value="meaty platter"
          />
          <span />
          <span className="checkmark" />
          <label className="container" />
          ATTENDING
          <input
            type="checkbox"
            name="attendance"
            onChange={handleChange}
            value="true"
          />
          <span />
          <span className="checkmark" />
          <label className="container" />
          NOT ATTENDING
          <input
            type="checkbox"
            name="attendance"
            onChange={handleChange}
            value="false"
          />
          <span />
          <button type="submit">Submit</button>
        </form>
        <div className="column">
          <table>
            <tr>
              <th>Name</th>
              <th>SURNAME</th>
              <th>FOOD</th>
              <th>TIME</th>
              <th>ATTENDANCE</th>
            </tr>
            {people.map((person, index) => {
              return (
                <tr key={index}>
                  <td>{person.name}</td>
                  <td>{person.surname}</td>
                  <td>{person.food}</td>
                  <td>{person.time}</td>
                  <td>{person.attendance}</td>
                  <td>
                    <button type="button" onClick={deleteInvite}>
                      DELETE
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
        <button className="btn btn-success" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default Form;
