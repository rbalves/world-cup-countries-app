import api from "../api";

const getAllCountries = async () => {
  try {
    const { data } = await api.get("/all");
    return data;
  } catch {
    return [];
  }
};

export default getAllCountries;
