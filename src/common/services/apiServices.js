import axios from "axios";

export default {
  apiCall: async (httpType, url, data, options) => {
    switch (httpType.trim().toLowerCase()) {
      case "get":
        return await axios
          .get(url, options)
          .then((result) => {
            return result;
          })
          .catch((error) => {
            return Object.assign({}, error.response);
          });
      case "post":
        return await axios
          .post(url, data, options)
          .then((result) => {
            return result;
          })
          .catch((error) => {
            return Object.assign({}, error.response);
          });
      case "put":
        return await axios
          .put(url, data, options)
          .then((result) => {
            return result;
          })
          .catch((error) => {
            return Object.assign({}, error.response);
          });
      case "delete":
        return await axios
          .delete(url, {
            headers: {},
            data,
          })
          .then((result) => {
            return result;
          })
          .catch((error) => {
            return Object.assign({}, error.response);
          });
    }
  },
};
