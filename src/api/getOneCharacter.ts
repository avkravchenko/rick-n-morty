import { instance } from "./axiosInstance";

export const getOneCharacter = async (id: string) => {
  try {
    const response = await instance.get(`/character/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
