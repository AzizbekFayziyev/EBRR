import axios from "axios";

export const getSlides = async () => {
  try {
    const { data } = await axios.get("https://verel-auto.uz" + "/api/banners");

    return data;
  } catch (error) {
    console.log("Failed fetch slides!");
  }
};

export const getTranslations = async (lang) => {
  try {
    const { data } = await axios.get(
      "https://verel-auto.uz" + `/api/translations/${lang}`
    );

    return data;
  } catch (error) {
    console.log("Failed fetch langs!");
  }
};

export const postForm = async (name, email, descriptions) => {
  try {
    const response = await axios.post("https://verel-auto.uz/api/zayavkas", {
      first_name: name,
      last_name: "null",
      phone_number: "null",
      company: "null",
      email,
      descriptions,
    });
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 422) {
      console.error("Validation Error:", error.response.data);
      throw new Error("Validation error occurred");
    } else {
      console.error("Request failed:", error.message);
      throw error;
    }
  }
};
