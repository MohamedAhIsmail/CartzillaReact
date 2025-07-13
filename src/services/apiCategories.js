import axios from "axios";

const BASE_URL = `http://localhost:1337/`;

export async function getCategories(language = "en") {
  try {
    const res = await axios.get(`${BASE_URL}api/categories?locale=${language}`);
    const { data } = res.data;
    return data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}

export async function getSingleCategory(id, language = "en", populate = "*") {
  try {
    const res = await axios.get(
      `${BASE_URL}api/categories/${id}?locale=${language}&populate=${populate}`
    );
    const { data } = res.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching category:", error);
    throw error;
  }
}
