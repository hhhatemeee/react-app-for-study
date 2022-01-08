import React from 'react'
import s from './MyPosts.module.css'
import { Formik, Form, Field } from 'formik'
import Post from './Post/Post'



const MyPosts = (props) => {

    const initialValues = {
        textPost: ''
    }
    const onSubmit = (values) => {
        props.addPost(values.textPost)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}>
                <Form>
                    <div>
                        <Field as='textarea' type='text' name='textPost' id='textPost' />
                    </div>
                    <div>
                        <button type='submit'>Add post</button>
                    </div>
                </Form>
            </Formik>
            <div className={s.posts}>
                {props.posts.map(post => <Post key={post.id} text={post.text} countLikes={post.coontLikes} />)}
            </div>
        </div >
    )
}

export default MyPosts
