import "./styling/style.css";

export default function Watchlist(props) {
    return (
        <>
        <input
            type="text"
            placeholder="Aapka Recommendation"
            name="movieName"
            required
            autoFocus
            value={props.movieName}
            onChange={props.handleChange}
        />
        <button className="submit-button" type="button" onClick={props.handleAddMovie}>
        Add
        </button>
        </>
    )
}