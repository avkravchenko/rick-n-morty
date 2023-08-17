import { instance } from "./axiosInstance";

export const getAllCharacters = async (
  name: string,
  status: string,
  gender: string,
  species: string
) => {
  try {
    const response = await instance.get(
      `/character/?name=${name}&status=${status}&gender=${gender}&species=${species}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
