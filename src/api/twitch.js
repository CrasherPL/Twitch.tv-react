import axios from "axios";


let API_KEY = "fz7e924aljchbpcl585375fugrrymh";
let API_Authorization = "hguvznevv0h1qjg5kroul5rqfsptl8";
let api = axios.create({
  headers: {
    "Client-ID": API_KEY,
    "access-token": API_Authorization
  }
});

export default api;
