import { INIT_HERO } from "../actionTypes/heroAT" 
const initialState = { heros: []}

export const heroReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_HERO:  
      return {...state, heros: action.payload};
  
    default:
      return state;
  }
}
