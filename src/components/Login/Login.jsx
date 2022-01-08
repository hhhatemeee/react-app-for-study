import React, { useEffect } from 'react'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import s from './Login.module.css'
import * as yup from 'yup'
import { useNavigate } from 'react-router'

const Login = (props) => {
    let navigate = useNavigate()
    const validationForm = yup.object().shape({
        email: yup.string().typeError('Должна быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должна быть строкой').required('Обязательное поле')
    })
    const initialValues = {
        email: '',
        password: '',
        remember: false,
    }
    const onSubmit = (values, { setSubmitting }) => {
        props.login(values)
        values.email = ''
        values.password = ''
        values.remember = false
        setSubmitting(false)
        setTimeout(() => navigate('/dialogs'), 1000)
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
                    <ErrorMessage style={{ color: 'red' }} name='email' />
                    <label htmlFor="password">Пароль</label>
                    <Field type="password" id='password' name='password' />
                    <ErrorMessage className={s.errorText} name='password' />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Field type="checkbox" id='remember' name='remember' />remember me
                    </div>
                    <button type='submit'>Login</button>
                </Form>
            </Formik>

        </div >
    )
}

export default Login
