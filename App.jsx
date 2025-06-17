import "./styles.css";
import { useState } from "react";

export default function App() {
  const initialData = {
    username: "",
    password: "",
    age: "",
    country: "",
    gender: "",
    language: [],
  };
  const [formdata, setFormdata] = useState(initialData);
  var { username, password, age, country, gender, language } = formdata;
  const handleform = (e) => {
    e.preventDefault();
    console.log("form submitted successfully");
    console.log(formdata);
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    if (e.target.type == "checkbox") {
      setFormdata((prev) => {
        const latestLang = e.target.checked
          ? [...prev.language, e.target.id]
          : prev.language.filter((el) => el != e.target.id);

        return { ...prev, language: latestLang };
      });
    } else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
    // var ipvalue =
    //   e.target.type == "checkbox" ? e.target.checked : e.target.value;
    // setFormdata({ ...formdata, [e.target.name]: ipvalue });
    // console.log(e.target.checked);
  };
  return (
    <div className="App">
      <h1>Registration Form</h1>
      <form onSubmit={handleform}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
          placeholder=" Enter username"
        />
        <br />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder=" Enter password"
          value={password}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="age">age: </label>
        <input
          type="number"
          id="age"
          min={18}
          max={45}
          name="age"
          placeholder=" Enter age"
          value={age}
          onChange={handleChange}
        />
        <br />
        <br />

        <label htmlFor="country">Country Name: </label>
        <select name="country" id="country" onChange={handleChange}>
          <option value="">Choose</option>
          <option value="india">India</option>
          <option value="china">china</option>
          <option value="usa">usa</option>
        </select>
        <br />
        <br />

        <label htmlFor="gender">Gender:</label>
        <input
          type="radio"
          name="gender"
          id="male"
          value={"Male"}
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          name="gender"
          id="female"
          value={"Female"}
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>
        <br />
        <br />

        <label htmlFor="language">Language:</label>
        <input
          type="checkbox"
          name="language"
          id="html"
          onChange={handleChange}
        />
        <label htmlFor="html">html</label>

        <input
          type="checkbox"
          name="language"
          id="css"
          onChange={handleChange}
        />
        <label htmlFor="css">css</label>

        <input
          type="checkbox"
          name="language"
          id="js"
          onChange={handleChange}
        />
        <label htmlFor="js">js</label>
        <br />
        <br />

        <input type="submit" value={"Register"} />
      </form>
    </div>
  );
}
