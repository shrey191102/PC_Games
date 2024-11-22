import axios from "axios";

const key='2656e54c2e83470fa2a8e8d33d6fe4e4';
const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api/genres'
})


const getGenresList=axiosCreate.get('https://api.rawg.io/api/genres?key=2656e54c2e83470fa2a8e8d33d6fe4e4');
const getGameLists=axiosCreate.get('https://api.rawg.io/api/games?key=2656e54c2e83470fa2a8e8d33d6fe4e4');
export default{
    getGenresList,
    getGameLists
}
