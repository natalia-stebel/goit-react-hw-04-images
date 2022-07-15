import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/api/"


export const fetchImage = async (searchQuery, page) => {
    const KEY = "27671719-52a59d4a4a39e17f3ffb3a40b"
    const response = await axios.get( 
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    
    return response.data;
}
