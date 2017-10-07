import axios from 'axios';
const GEOCODE_ENDPONIT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geocode = place => (
  axios
    .get(GEOCODE_ENDPONIT, { params: { address: place } })
    .then((results) => {
      const data = results.data;
      const status = data.status;
      const result = data.result[0];
      if (typeof results === 'undefined') {
        return { status };
      }
      const address = result.formatted_address;
      const location = result.geometry.location;
      return { status, address, location};
    })
);

export const reversGeocode = () => null;