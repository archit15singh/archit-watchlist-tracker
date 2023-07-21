import "./App.css";
import { useState } from "react";

function App() {
  const initialState = {
    userName: "",
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState({ [name]: value });
  };

  const handleClick = (event) => {
    console.log(state.userName)
  }

  return (
    <div className="flash-container">
      <div className="flash-effect"></div>
      <div className="prompt-text">
        <h2>Lights, camera, introduction!</h2>
        <p>What's your fabulous real name?</p>
        <div className="input-container">
          <input
            type="text"
            placeholder="Aapka Naam"
            name="userName"
            required
            autoFocus
            value={state.userName}
            onChange={handleChange}
          />
          <button className="submit-button" type="button" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
