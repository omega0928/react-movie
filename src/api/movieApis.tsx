import axios from "axios";

const API_ENDPOINT = "http://www.omdbapi.com/";
const API_KEY = "1e32d500";

const api = {
  fetchMovieList: async (page: number, inputData: string) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/?apikey=${API_KEY}&page=${page}&s=${inputData}`
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw Error("error");
      }
    } catch (error) {
      return {
        isError: true,
        data: error,
      };
    }
  },
  fetchMovieSelect: async (selectMovie: string) => {
    try {
      const response = await axios.get(
        `${API_ENDPOINT}/?apikey=${API_KEY}&t=${selectMovie}`
      );
      if (response.status === 200) {
        return response.data;
      } else {
        throw Error("error");
      }
    } catch (error) {
      return {
        isError: true,
        data: error,
      };
    }
  },
};

export default api;
