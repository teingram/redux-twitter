import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import handleInitialData from '../actions/shared'

import Tweets from './Tweets'

function App() {
  const dispatch = useDispatch();
  const authedUser = useSelector(state => state.authedUser)
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch])

    return (
      <div>
        {authedUser !== null && <Tweets/>}
      </div>
    )
}

export default App