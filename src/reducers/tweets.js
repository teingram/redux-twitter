import { RECEIVE_TWEETS } from '../actions/tweets'
import { TWEET_LIKED } from '../actions/tweetLiked'

function tweets(state = null, action) {
    switch(action.type) {
        case RECEIVE_TWEETS:
        return {
            ...state,
            ...action.tweets
        }
        case TWEET_LIKED:
        const { authedUser, id } = action;
        const tweet = state[id];
        const liked = state[id].likes.concat([authedUser]).filter((each, i, arr) => arr.indexOf(each) === i)
        console.log('tweet', tweet)
        console.log('liked', liked)
        return {
            ...state,
            [id]: {
                ...tweet,
                likes: liked
            }
        }
        default: 
            return state
    }
}

export default tweets