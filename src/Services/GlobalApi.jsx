import axios from "axios";
const key = "3032dd1e430e427fa7d9347ad444d293";

const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);
const getGameListByGenreId=(id)=> axiosCreate.get('/games?key='+key+'&genres='+id)

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId
};
