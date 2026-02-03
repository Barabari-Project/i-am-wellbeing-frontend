import axios from "axios";

// const BASE_URL = "https://i-am-wellbeing-backend.onrender.com/wellBeing/api/";

// export const sendMessage = async (formData) => {
//   try {
//     const response = await fetch("http://localhost/i-am-wellbeing-frontend/sendMessage.php", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("API Error:", error);
//     throw error;
//   }
// };
export const sendMessage = async (formData) => {
  try {
    const response = await fetch(
      `${window.location.origin}/sendMessage.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};



export const sendAccountDetails = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/Account`, data);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
        
    }
}

export const sendNeeds = async (data) => {
    try {
        const response = await axios.post(`${BASE_URL}/needs`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}