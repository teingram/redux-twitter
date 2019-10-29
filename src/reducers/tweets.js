import { RECEIVE_TWEETS } from '../actions/tweets'
import { TWEET_LIKED } from '../actions/tweetLiked'
import { ADD_TWEET } from '../actions/addTweet'

function tweets(state = null, action) {
    switch(action.type) {
        case RECEIVE_TWEETS:
        return {
            ...state,
            ...action.tweets
        }
        case TWEET_LIKED:
        // this should be rewritten inside of a handler function
        // to match the thunk pattern    
        const { authedUser, id } = action;
        const tweet = state[id];
        const liked = state[id].likes.concat([authedUser]).filter((each, i, arr) => arr.indexOf(each) === i)

        return {
            ...state,
            [id]: {
                ...tweet,
                likes: liked
            }
        }
        case ADD_TWEET:
        return {
            ...state,
            [action.tweet.id]: {...action.tweet}
        }
        default: 
            return state
    }
}

export default tweets