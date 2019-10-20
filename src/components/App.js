import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import handleInitialData from '../actions/shared'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch])
    return (
      <div>
        Here we go...
      </div>
    )
}

export default App