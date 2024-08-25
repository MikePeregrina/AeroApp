// fetchData.js
import axios from "axios";

export const fetchData = async (url, options = {}) => {
  try {
    const response = await axios({
      url,
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Log and return the response data even if the status code indicates an error
      console.log("API call failed with response data:", error.response.data);
      return error.response.data; // Return the response data
    } else if (error.request) {
      // Request was made but no response received
      console.log("API call made but no response received:", error.request);
      throw new Error("No response received from the server");
    } else {
      // Something happened in setting up the request
      console.log("Error in setting up the API call:", error.message);
      throw error;
    }
  }
};
