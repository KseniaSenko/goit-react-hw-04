import axios from "axios";


export const getImages = async(image) => {
    const ACCESS_KEY = "xbBh_ggoBoYlNDem4ETwjsZuQx1EiA30tTXpd5OVxpk";
    const url = `https://api.unsplash.com/search/photos?query=${image}&client_id=${ACCESS_KEY}`
    const response = await axios.get(url);
    // console.log(response.data.results);
    return response.data.results;
}

// curl https://api.unsplash.com/search/photos?query=minimal
