import React from 'react'
import { connect } from 'react-redux'

import Tweet from './Tweet'

function Tweets({ tweets }) {

    return (
        <div>
            <h3>Your Timeline</h3>
            <ul>
                {tweets.map((each) => {
                    return (
                        <li key={each}>
                            <Tweet id={each}/>
                        </li>
                    )
                })}
            </ul>
        </div>
        
    )
}

function mapStateToProps(state) {
    const tweets = Object.keys(state.tweets)
    return {
        tweets
    }
}

export default connect(mapStateToProps)(Tweets)