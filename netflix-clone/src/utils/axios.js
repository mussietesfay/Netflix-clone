import axios from'axios';

const instance =axios.create({
baseURL:"https://api.themoviedb.rog/3",
});
export default instance;