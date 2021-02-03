import axios from "axios";
import { AsyncStorage } from "react-native";

const instance = axios.create({
  //ngrok URL expires every 8 hours
  baseURL: "http://5d05861b56e8.ngrok.io",
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
