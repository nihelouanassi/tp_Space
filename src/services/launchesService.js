import axios from "axios";

export const getAllLaunches = async () => {
    const res = await axios.get(`https://api.spacexdata.com/v4/launches`); 
    return res.data;
}