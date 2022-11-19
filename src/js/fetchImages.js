import axios from 'axios';

async function fetchImages(options) {
    try {
        const response = await axios(options);

        console.log(response.data);

        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export { fetchImages };
