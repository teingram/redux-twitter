import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import handleInitialData from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'


import Tweets from './Tweets'

function App() {
  const dispatch = useDispatch();
  const authedUser = useSelector(state => state.authedUser)
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch])

    return (
      <div>
        <LoadingBar/>
        {authedUser !== null && <Tweets/>}
      </div>
    )
}

export default App