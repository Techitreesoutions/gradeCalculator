import { environment } from "../util/constants";

/**
 * Creates the Application public API URL based on environment variables.
 *
 * @param {string} api
 */
export const createPlatformURL = (api) => {
  let publicUrl;
  if (environment === "TEST") {
    publicUrl = `http://13.233.160.148/nbapi/${api}`; // Beta
  } else {
    publicUrl = `https://api.tmithumal.com/nbapi/${api}`; //Live
  }
  return encodeURI(publicUrl);
};

export const createImageURL = (imageName) => {
  let publicUrl;
  if (environment === "TEST") {
    publicUrl = `http://13.233.160.148/nbimages/${imageName}`; //Beta
  } else {
    publicUrl = `https://api.tmithumal.com/nbimages/${imageName}`; //Live
  }
  return encodeURI(publicUrl);
};

export const handleSecureAjaxError = (
  error,
  dispatch,
  customerMessage = ""
) => {
  let formattedMessage = customerMessage;
  let platformResponse = undefined;

  try {
    if (error.response) {
      const { data, status, statusText, config } = error.response;
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(`Platform request failed: ${config.url}`);
      //log.error(data);
      //log.error(`Platform HTTP Status ${status} ${statusText}`);
      if (error.response.data) {
        platformResponse = data;
      }
      if (status) {
        platformResponse = Object.assign({}, platformResponse, {
          "Status Code": status,
        });
      }
      if (statusText) {
        platformResponse = Object.assign({}, platformResponse, {
          Status: statusText,
        });
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      //log.error("Platform request error", error);
      formattedMessage.concat(" - Unexpected error occurred");
    } else {
      // Something happened in setting up the request that triggered an Error
      /// log.error("Error", error);
    }
  } catch (error) {
    console.log("Failed to process Error! whoops", error.message);
  }
  // log.debug(`Formatted Message ${formattedMessage}`);

  if (dispatch) {
    console.log(`platformResponse  ${platformResponse}`);
    // dispatch(addNotification({ title: formattedMessage, variant: "error", platformResponse }));
  }
};
