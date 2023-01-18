import axios from "axios";

export const getAllCapsules = async () => {
    const res = await axios.get(`https://api.spacexdata.com/v4/capsules`); 
    return res.data;
}