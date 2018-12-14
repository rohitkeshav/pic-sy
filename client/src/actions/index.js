export const SET_IMAGES = "SET_IMAGES";
// export const SET_LOGIN = "SET_LOGIN";

function handleResponse(response) {
  console.log("response", response);
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function saveImage(data) {
  return dispatch => {
    return fetch('http://localhost:3000/api/image', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
  }
}

export function doLogin(data) {
  return dispatch => {
    return fetch('http://localhost:3000/auth/sign-in', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
  }
}

export function createUser(data) {
  return dispatch => {
    return fetch('http://localhost:3000/auth/sign-up', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
  }
}


export function setImages(images) {
    console.log("DATA ==>", images)
  return {
    type: SET_IMAGES,
    images: images
  }
}

export function fetchImages(url) {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data =>  dispatch(setImages(data)));
  }
}

export default fetchImages;