import axios from "axios";

axios.defaults.baseURL = "https://pixabay.com/";
 

export const fetchImage = async (query, page) => {
   
    const response = await axios(`api/`, {
        params: {
            key: "27671719-52a59d4a4a39e17f3ffb3a40b",
            query,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            page,
            per_page: 12,
            
        }
    }
    
    );
    
    return response.data;



}

