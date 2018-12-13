// export default controllers = {
//     selectUser : (user) => {
//     console.log('Actions are working ', user.fname)

//     return {
//         type: 'USER-SELECTED',
//         payload: user
//     }
// },

// const selectImages = (image) => {
//     console.log('Actions are working ', image)

//     return {
//         type: 'IMAGE-SELECTED',
//         payload: image
//     }
// }
// }


// export default selectUser;

export const SET_IMAGES = "SET_IMAGES";

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