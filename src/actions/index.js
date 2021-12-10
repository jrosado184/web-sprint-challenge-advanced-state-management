import axios from "axios";

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const FETCH_START = "FETCH_SMURFS";

export const fetcHStart = () => {
  return { type: FETCH_START };
};

export const FETCH_SUCESS = "FETCH_SUCESS";

export const fetchSuccess = (smurfs) => {
  return { type: FETCH_SUCESS, payload: smurfs };
};

export const FETCH_FAILED = "FETCH_FAILED";

export const fetchFailed = () => {
  return { type: FETCH_FAILED };
};

export const ADD_SMURF = "ADD_SMURF";

export const addSmurf = (newSmurf) => {
  return { type: ADD_SMURF, payload: newSmurf };
};
