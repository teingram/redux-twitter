import React, { useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import handleInitialData from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Tweets from './Tweets'
import Nav from './Nav'
import Post from './Post'
import TweetPage from './TweetPage'

function App() {
  const dispatch = useDispatch();
  const authedUser = useSelector(state => state.authedUser)
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch])

    return (
        <Router>
          <Fragment>
            <LoadingBar/>
            {authedUser !== null ?
            <div>
              <Nav />
              {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/" exact component={Tweets} />
                <Route path="/post" component={Post} />
                <Route path="/tweet/:id" component={TweetPage} />
              </Switch>
            </div>
            : null}
          </Fragment>
        </Router>
    )
}

export default App