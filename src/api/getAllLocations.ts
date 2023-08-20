import { instance } from "./axiosInstance";

export const getAllLocations = async (
  page: string,
  name: string,
  type: string,
  dimension: string
) => {
  try {
    const response = await instance.get(
      `/location?page=${page}&name=${name}&type=${type}&dimension=${dimension}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
