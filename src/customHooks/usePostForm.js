import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { handleAddTweet } from '../actions/addTweet'

function usePostForm() {

    const [input, setInput] = React.useState('')
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/')
        dispatch(handleAddTweet(input))
    }

    const handleInputChange = (e) => {
        e.persist()
        setInput(e.target.value);
      }

    return {
        handleSubmit,
        handleInputChange,
        input
    }
}

export default usePostForm