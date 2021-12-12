import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = (props) => {



    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = (e) => {
        let text = e.target.value
        props.updateNewPostText(text)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.posts.map(post => <Post key={post.id} text={post.text} countLikes={post.coontLikes} />)}
            </div>
        </div>
    )
}

export default MyPosts
