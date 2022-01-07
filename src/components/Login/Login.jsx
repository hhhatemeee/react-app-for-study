import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import s from './Login.module.css'
import * as yup from 'yup'

const Login = () => {

    const validationForm = yup.object().shape({
        login: yup.string().typeError('Должна быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должна быть строкой').required('Обязательное поле')
    })

    const formik = useFormik({
        initialValues: {
            login: '',
            password: ''
        },
        validationSchema: validationForm,
        onSubmit: values => {
            console.log(values)
        },
    })
    useEffect(() => {
        console.log(formik.values)
    }, [formik.values])
    return (
        <div>
            <h1>Login</h1>
            <div >
                <form action="" onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: "column", maxWidth: '300px', margin: '5px' }}>
                    <label for="login">Логин</label>
                    <input type="text" id='login' name='login' onChange={formik.handleChange} value={formik.values.login} onBlur={formik.handleBlur} />
                    {formik.touched.login && formik.errors.login ? <span>{formik.errors.login}</span> : null}
                    <label for="password">Пароль</label>
                    <input type="password" id='password' name='password' onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
                    {formik.touched.password && formik.errors.password ? <span> {formik.errors.password}</span> : null}
                    <button type='submit'>Login</button>
                </form>
            </div>

        </div >
    )
}

export default Login
