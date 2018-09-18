import request from 'superagent';
import { BASE_URL } from "../api";

export const FETCH_IMAGES = 'FETCH_IMAGES';
export const SWITCH_TABS = 'SWITCH_TABS';
export const SEARCH_IMAGES = 'SEARCH_IMAGES';
export const VIEW_IMAGE = 'VIEW_IMAGE';
export const HIDE_IMAGE = 'HIDE_IMAGE';
export const SIGN_USER_IN = 'SIGN_USER_IN';
export const SIGN_USER_OUT = 'SIGN_USER_OUT';


export function fetchImages() {
    const data = request.get(BASE_URL + "/gallery/lJzTY")
        .set("Authorization", "Bearer 1e91bb149d5f12d9c2d1608bba0b17874088e435");
        
    return {
        type: FETCH_IMAGES,
        payload: data
    }
}

export function switchTabs(tab = 0) {
  return {
    type: SWITCH_TABS,
    tab
  }
}

export function searchImages(term = null) {
    console.log("Search for: ", term);
    return {
        type: SEARCH_IMAGES,
        term
    }
}

export function viewImage(image = {}) {
  return {
    type: VIEW_IMAGE,
    image
  }
}

export function hideImage() {
  return {
    type: HIDE_IMAGE
  }
}

export function signUserIn(user) {
  return {
    type: SIGN_USER_IN,
    user
  }
}

export function signUserOut() {
  return {
    type: SIGN_USER_OUT
  }
}