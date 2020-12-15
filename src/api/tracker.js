import axios from "axios";

export default axios.create({
  //ngrok URL expires every 8 hours
  baseURL: "http://6f5ec3cca8ef.ngrok.io",
});
