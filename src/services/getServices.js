import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchData = async () =>{
    try{
        const resp = await axios.get(`${API_URL}`);
        console.log("Successfully fetched data: ", resp.data);
        return resp.data;
    }catch(e){
        throw console.error(e);
        
    }
}