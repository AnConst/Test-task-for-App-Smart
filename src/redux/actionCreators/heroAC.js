import { INIT_HERO } from "../actionTypes/heroAT";

export const initHero = (payload) => {
  return {
    type: INIT_HERO,
    payload
  }
}
