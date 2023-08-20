import { instance } from "./axiosInstance";
import axios from "axios";

// Fetches character data for a given endpoint
async function fetchCharacterData(endpoint: string) {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching character data:", error);
    throw error;
  }
}

export async function getOneLocation(id: string) {
  try {
    const locationResponse = await instance.get(`/location/${id}`);
    const locationData = locationResponse.data;
    const locationEndpoints = locationData.residents;

    const characterPromises = locationEndpoints.map(fetchCharacterData);
    const characterData = await Promise.all(characterPromises);

    return {
      originalData: locationData,
      characters: characterData,
    };
  } catch (error) {
    console.error("Error fetching episode data:", error);
    throw error;
  }
}
