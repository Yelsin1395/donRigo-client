import axios from "axios";
import { getUbigeos } from "../apis";

const ubigeoController = async () => {
  try {
    const response = await axios.get(getUbigeos);
    return response;
  } catch (error) {
    console.error(error);
  }
};

export default ubigeoController;
