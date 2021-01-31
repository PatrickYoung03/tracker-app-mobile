import axios from "axios";

export default axios.create({
  //ngrok URL expires every 8 hours
  baseURL: "http://7c82b0d5745c.ngrok.io",
});
