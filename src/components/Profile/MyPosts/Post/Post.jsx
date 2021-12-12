import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div >
            <div className={s.item}>
                <img src="https://www.kindpng.com/picc/m/22-224091_avatar-computer-icons-blog-clip-art-avatar-png.png" alt="" />
                {props.text}
            </div>
            <div>
                {props.countLikes}
                <span> like</span>
            </div>
        </div>
    )
}

export default Post
