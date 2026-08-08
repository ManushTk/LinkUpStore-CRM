import  axios  from "axios";

export const customersApi = axios.create({
  baseURL: "http://localhost:5008/customers",
});
