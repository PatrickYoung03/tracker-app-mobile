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
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGNIN", payload: response.data.token });
    navigate("TrackList");
  } catch (err) {
    dispatch({ type: "ADD_ERR", payload: "Invalid email attempt" });
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

const signout = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { token: null, errorMessage: "" }
);
