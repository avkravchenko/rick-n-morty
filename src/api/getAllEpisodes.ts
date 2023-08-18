import { instance } from "./axiosInstance";

export const getAllEpisodes = async (page: string, name: string) => {
  try {
    const response = await instance.get(`/episode?page=${page}&name=${name}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
