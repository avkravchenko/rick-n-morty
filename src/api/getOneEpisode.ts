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

export async function getOneEpisode(id: string) {
  try {
    const episodeResponse = await instance.get(`/episode/${id}`);
    const episodeData = episodeResponse.data;
    const characterEndpoints = episodeData.characters;

    const characterPromises = characterEndpoints.map(fetchCharacterData);
    const characterData = await Promise.all(characterPromises);

    return {
      originalData: episodeData,
      characters: characterData,
    };
  } catch (error) {
    console.error("Error fetching episode data:", error);
    throw error;
  }
}
