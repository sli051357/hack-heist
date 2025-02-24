import axios from 'axios';

// Use the port number that is defined in your .env file
const serverURL = `http://localhost:4000`;

const HeistApi = {
    getHeist: () => axios.get(`${serverURL}/api/heist`),

    postHeist: (payload) => axios.post(`${serverURL}/api/heist`, payload),

    getCrew: () => axios.get(`${serverURL}/api/crew`),

    postCrew: (payload) => axios.post(`${serverURL}/api/crew`, payload)
}

export default HeistApi;