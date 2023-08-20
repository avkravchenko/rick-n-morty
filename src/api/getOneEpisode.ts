import { instance } from "./axiosInstance";

export const getOneEpisode = async (id: string) => {
  try {
    const response = await instance.get(`/episode/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
