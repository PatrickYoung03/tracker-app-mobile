import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ERR":
      return { ...state, errorMessage: action.payload };
    case "SIGNIN":
      return { errorMesage: "", token: action.payload };
    case "CLEAR_ERR":
      return { ...state, errorMessage: "" };
    case "SIGNOUT":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignin = (dispatch) => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "SIGNIN", payload: token });
    navigate("TrackList");
  } else {
    navigate("signup");
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "CLEAR_ERR" });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGNIN", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({ type: "ADD_ERR", payload: "Something went wrong" });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGNIN", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({
      type: "ADD_ERR",
      payload: "Invalid email or password",
    });
  }
};

const signout = (dispatch) => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "SIGNOUT" });
  navigate("signin");
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
