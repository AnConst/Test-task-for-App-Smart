import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initHeroFetchAC } from '../redux/actionCreatorsAsync/heroACAsync';

function HomePage() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(initHeroFetchAC())
  },[dispatch]);

  return (
    <>
      hello
    </>
  )
}

export default HomePage
