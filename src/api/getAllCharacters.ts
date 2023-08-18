import { instance } from "./axiosInstance";

export const getAllCharacters = async (
  name: string,
  status: string,
  gender: string,
  species: string,
  page: string
) => {
  try {
    const response = await instance.get(
      `/character/?name=${name}&status=${status}&gender=${gender}&species=${species}&page=${page}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
