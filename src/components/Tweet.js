import React from 'react'
import { connect } from 'react-redux'

import { formatTweet, formatDate } from '../utils/helpers'

const imgCSS = {
    width: 40,
    height: 40,
    borderRadius: 20
  };

function Tweet(props) {
   const {
        name,
        timestamp,
        text,
        avatar,
        likes,
        replies
      } = props.tweet
      const formattedTime = formatDate(timestamp)

    return (
        <div>
            <div>{name}</div>
            <div>{text}</div>
            <img style={imgCSS} alt='Author' src={avatar}/>
            <div>{formattedTime}</div>
            <button><span role="img" aria-label="arrow emoji">↩</span>{replies}</button><button><span role="img" aria-label="heart emoji">💚</span>{likes}</button>
        </div>
        )
}

function mapStateToProps(state, ownProps) {

    const aTweet = state.tweets[ownProps.id];
    const author = state.users[aTweet.author];
    const authedUser = state.authedUser;
    const tweet = formatTweet(aTweet, author, authedUser, null)
    console.log('aTweet', aTweet, 'author', author, 'authedUser', authedUser)
    return {
        tweet
    }
}

export default connect(mapStateToProps)(Tweet)