import React from 'react'
import { useSelector } from 'react-redux'

import Tweet from './Tweet'
import Post from './Post'

function TweetPage({ match }) {
    const id = match.params.id
    const replies = useSelector(state => state.tweets[id].replies)
    
    return (
        <div style={{margin: 20}}>
            <Tweet id={id} />
            <Post />
            {replies.map((reply) => {
                return <Tweet key={reply} id={reply} />
            })}
        </div>
    )
}

export default TweetPage