import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { formatTweet, formatDate } from '../utils/helpers'
import { tweetLiked } from '../actions/tweetLiked'

const imgCSS = {
    width: 40,
    height: 40,
    borderRadius: 20
  };

function Tweet({authedUser, dispatch, tweet}) {
    const [go, setGo] = useState(false)
    const handleGoToTweet = () => {
        console.log('Here is the id', id)
        setGo((go) => go = true)
    }

    const handleLike = (authedUser, id) => {
        console.log('authedUser', authedUser);
        console.log('id', id);
        dispatch(tweetLiked(authedUser, id));
    }

   const {
        name,
        id,
        timestamp,
        text,
        avatar,
        likes,
        replies
      } = tweet
      const formattedTime = formatDate(timestamp)
        
    return go === true ? <Redirect to={`/tweet/${id}`} /> :
    
    (
        <div onClick={() => handleGoToTweet()}>
            <div>{name}</div>
            <div>{text}</div>
            <img style={imgCSS} alt='Author' src={avatar}/>
            <div>{formattedTime}</div>
            <div>
                <span>
                    <button ><span role="img" aria-label="arrow emoji">↩</span>{replies}</button>
                    <button onClick={() => handleLike(authedUser, id)}><span role="img" aria-label="heart emoji">💚</span>{likes}</button>
                </span>
            </div>
        </div>
    )
}
            

function mapStateToProps(state, ownProps) {

    const aTweet = state.tweets[ownProps.id];
    const author = state.users[aTweet.author];
    const authedUser = state.authedUser;
    const tweet = formatTweet(aTweet, author, authedUser, null)
    
    return {
        authedUser,
        tweet
    }
}

export default connect(mapStateToProps)(Tweet)