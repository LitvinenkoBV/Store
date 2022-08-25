import axios from "axios";

export const fetchProducts = () =>
  axios({
    method: "GET",
    url: "arrProducts.json",
  });
