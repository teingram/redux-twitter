export const TWEET_LIKED = 'TWEET_LIKED';


export function tweetLiked(authedUser, id) {
    return {
        type: TWEET_LIKED,
        authedUser,
        id
    }
}