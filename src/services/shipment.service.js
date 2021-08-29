import httpCall from "../utilities/httpCall";

export const getShipmentDetails = (id) => {
  return httpCall({url: `shipments/track/${id}`})
    .then((res) => res.data)
    .catch((e) => {
      throw e.response?.data || 'error'
    })
};