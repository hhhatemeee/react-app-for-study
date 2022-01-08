import React, { useEffect, useRef } from 'react'
import s from './MyPosts.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import Post from './Post/Post'
import * as yup from 'yup'
import TextError from './TextError'



const MyPosts = (props) => {
    const formikRef = useRef()
    const validationForm = yup.object().shape({
        textPost: yup.string().test('len', 'Строка не должна быть пустой', val => val)
    })
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
                innerRef={formikRef}
                initialValues={initialValues}
                validationSchema={validationForm}
                onSubmit={onSubmit}>
                <Form>
                    <div>
                        <Field as='textarea' type='text' name='textPost' id='textPost' >
                            {
                                (props) => {
                                    const { field, meta } = props
                                    return <input type="textPost" {...field} className={meta.touched && meta.error ? s.error : ''} />
                                }
                            }
                        </Field>
                        <br />
                        <ErrorMessage name='textPost' component={TextError} />
                    </div>
                    <div>
                        <button type='submit'>Add post</button>
                    </div>
                </Form >
            </Formik >
            <div className={s.posts}>
                {props.posts.map(post => <Post key={post.id} text={post.text} countLikes={post.coontLikes} />)}
            </div>
        </div >
    )
}

export default MyPosts
