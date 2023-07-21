import "./styling/style.css";

export default function Welcome(props) {
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
            value={props.userName}
            onChange={props.handleChange}
          />
          <button className="submit-button" type="button" onClick={props.submitUserName}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
