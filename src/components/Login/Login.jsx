import React, { useEffect } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import s from './Login.module.css'
import * as yup from 'yup'
import { Navigate } from 'react-router'
import TextError from '../Profile/MyPosts/TextError'

const Login = (props) => {
    const validationForm = yup.object().shape({
        email: yup.string().typeError('Должна быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должна быть строкой').required('Обязательное поле')
    })
    const initialValues = {
        email: '',
        password: '',
        remember: false,
    }
    const onSubmit = (values, { setSubmitting, setStatus }) => {
        props.login(values, setStatus)
        values.email = ''
        values.password = ''
        values.remember = false
        setSubmitting(false)
    }

    if (props.isAuth) {
        return <Navigate to='/dialogs' />
    }

    return (
        <div className={s.fullArea}>
            <h1>Авторизуйтесь</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationForm}
                onSubmit={onSubmit}>

                <Form action="" style={{ display: 'flex', flexDirection: "column", maxWidth: '300px', margin: '5px' }}>
                    <label htmlFor="email">Логин</label>
                    <Field type="text" id='email' name='email' />
                    <ErrorMessage style={{ color: 'red' }} name='email' component={TextError} />
                    <label htmlFor="password">Пароль</label>
                    <Field type="password" id='password' name='password' />
                    <ErrorMessage className={s.errorText} name='password' component={TextError} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Field type="checkbox" id='remember' name='remember' />remember me
                    </div>
                    <Field type='text' name='test'>
                        {
                            (props) => {
                                const { form } = props
                                return <span className={s.errorText}>{form.status ? form.status.error : null}</span>
                            }
                        }
                    </Field>
                    {/* <div>{status}</div> */}
                    {/* {console.log(status)} */}
                    <button type='submit'>Login</button>
                </Form>

            </Formik>

        </div >
    )
}

export default Login
