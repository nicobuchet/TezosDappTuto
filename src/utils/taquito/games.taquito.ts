import axios from "axios";

export const getAllGames = async () => {
    try {
        // retrieve keys of the game bigmap
        const url = "https://api.ghostnet.tzkt.io/v1/bigmaps/245527/keys/";
        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        throw error;
    }
}   