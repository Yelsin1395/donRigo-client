import axios from "axios";
import { GEODIR_KEY } from "../configs";

const getGeodirGeocoding = async (lat, lon) => {
  if (lat !== undefined) {
    try {
      const response = await axios.get(
        `https://apis.geodir.co/geocoding/v1/json?latlon=${lat},${lon}&key=${GEODIR_KEY}`
      );
      const { results } = await response.data;
      const { address_segments } = await results[0];
      const { name } = await address_segments[7];
      const country = await address_segments[9];
      const arrayCodeUbigeo = [];
      for (let i = 0; i < name.length; i += 2) {
        let count = 0 + i;
        let numberPar = name.slice(count, count + 2);
        arrayCodeUbigeo.push(numberPar);
      }

      return {
        ubigeo: arrayCodeUbigeo,
        country: country.name,
      };
    } catch (error) {
      console.error(error);
    }
  }
};

export default getGeodirGeocoding;
