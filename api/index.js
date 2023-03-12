import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng,type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "11.847676",
          bl_longitude: bl_lng ? bl_lng : "108.473209",
          tr_longitude: tr_lng ? tr_lng : "109.149359",
          tr_latitude: tr_lat ? tr_lat : "12.838442",
          limit: "30",
          currency: "USD",
          subcategory: "hotel,bb,specialty",
          adults: "1",
        },
        headers: {
          "X-RapidAPI-Key":
            "6903b904d3msh7342e929e8b5c3bp1b8576jsnc4b6050f1372",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    return null;
  }
};
