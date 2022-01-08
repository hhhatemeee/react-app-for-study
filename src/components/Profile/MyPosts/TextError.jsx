import React from 'react'
import s from './MyPosts.module.css'

const TextError = (props) => {
    return (
        <div className={s.errorText}>
            {props.children}
        </div>
    )
}

export default TextError
