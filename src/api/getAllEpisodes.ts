import { instance } from "./axiosInstance";

export const getAllEpisodes = async (
  page: string,
  name: string,
  episode: string
) => {
  try {
    const response = await instance.get(
      `/episode?page=${page}&name=${name}&episode=${episode}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
