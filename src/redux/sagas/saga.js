import { call, put, takeEvery } from "redux-saga/effects"
import { INIT_HERO_FETCH } from "../actionTypes/heroAT"
import { initHero } from "../actionCreators/heroAC"
import md5 from "js-md5"

async function fetchData({ url, method, params, credentials = 'include'}) {
  const response = await fetch(url, {
    method,
    params,
    credentials,
  });
  return await response.json();
}

function* initHeroAsync() {
  let timeForHash = new Date();
  const hash = md5(`${timeForHash}862eb03accd1c7f464ce0d0f904bbd69c30d64a0f54fb7640a8225a2b6890a0f411057a4`)
  console.log(hash);
    const heros = yield call(fetchData, {
      url: `http://developer.marvel.com/v1/public/characters`,
      method: "GET",
      
    })
    yield put(initHero(heros))
}

export function* sagaWatcher() {
  yield takeEvery(INIT_HERO_FETCH, initHeroAsync)
}
