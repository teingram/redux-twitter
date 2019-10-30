import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { saveTweet } from '../utils/api'

export const ADD_TWEET = 'ADD_TWEET';

export function addTweet(tweet) {
   
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet(text, replyingTo) {
    return (dispatch, getState) => {
        const { authedUser } = getState();
        dispatch(showLoading())
        return saveTweet({text, author: authedUser, replyingTo})
        .then((res) => dispatch(addTweet(res)))
        .then(() => dispatch(hideLoading()))
    }
}