import adapter from "./axiosInstance";

export default {
  getGovernorates: async function () {
    const data = (await adapter.get("/public-data/governorates")).data;
    console.log("Adapter Data", data.data.governorates);
    return data;
  },
};
