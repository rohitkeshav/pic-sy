// // kriti
// // image grid


import { SET_IMAGES } from '../actions';

export default function images(state = [], action = {}) {
  switch(action.type) {
    case SET_IMAGES:
      console.log("ACTION.IMAGES == > ", action, action.images)
      return action.images;
    default: return state;
  }
}
