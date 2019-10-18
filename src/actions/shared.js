import getInitialData from '../utils/api'
import setAuthedUser from './authedUser'
import receiveTweets from './tweets'
import receiveUsers from './users'

const authedUser = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        // dispatch(showLoading())
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveTweets(tweets))
                dispatch(receiveUsers(users))
                dispatch(setAuthedUser(authedUser))
                // dispatch(hideLoading())
            })
    }
}