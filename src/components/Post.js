import React from 'react'

import usePostForm from '../customHooks/usePostForm'

function Post() { 
    const { handleInputChange, handleSubmit, input } = usePostForm();
    const isDisabled = input === '';

    return (
        <div style={{margin: 20}}>
            <form onSubmit={handleSubmit}>
                <h3 style={{marginBottom: 5}}>Write a Tweeter</h3>
                <input 
                    name="tweet"
                    type="text"
                    className='input'
                    value={input}
                    placeholder="What's happening?"
                    onChange={(e)=> handleInputChange(e)}
                />
                <button className='btn' disabled={isDisabled} type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Post