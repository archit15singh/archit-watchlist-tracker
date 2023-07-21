import React, { useState } from "react";
import Welcome from "./Welcome";
import Watchlist from "./Watchlist";

export default function App() {
  const initialState = {
    userName: "",
    movieName: "",
    movieNames: []
  };

  const [state, setState] = useState(initialState);

  const handleChange = (event) => {
    const {name, value} = event.target;

    const updateState = (prevState) => {
      return {
        ...prevState,
        [name]: value
      }
    }

    setState(updateState)
  }

  const submitUserName = (event) => {
    console.log(state)
  }

  const handleAddMovie = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        movieNames: [...prevState.movieNames, state.movieName]
      }
    })
    setState((prevState) => {
      return {
        ...prevState,
        movieName: ""
      }
    })
  }

  return (
    <>
      <Welcome
        userName={state.userName}
        handleChange={handleChange}
        submitUserName={submitUserName}
      />

      <Watchlist 
        movieName={state.movieName}
        handleChange={handleChange}
        handleAddMovie={handleAddMovie}
      />
    </>
  );
}
