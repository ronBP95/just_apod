import Axios from 'axios';

async function sendGetRequest() {
    const response = await Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY") 
    console.log(response.data)
}

export default sendGetRequest();