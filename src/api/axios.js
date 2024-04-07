import axios  from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : '63318014ac6bd20abfea3a85725996bd',
        language : "ko_KR"
    }
})

export default instance;