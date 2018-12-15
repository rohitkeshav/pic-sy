// // kriti
// // image grid


import { SET_IMAGES } from '../actions';
import { SET_VIEWS } from "../actions";

export default function images(state = [], action = {}) {
  switch(action.type) {
    case SET_IMAGES:
      console.log("ACTION.IMAGES == > ", action, action.images)
      return action.images;
    case SET_VIEWS:
      console.log("ACTION.Views == > ", action, action.views)
      return action.views;
    default: return state;
  }
}
