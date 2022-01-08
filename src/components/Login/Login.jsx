import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import s from './Login.module.css'
import * as yup from 'yup'

const Login = (props) => {
    const validationForm = yup.object().shape({
        email: yup.string().typeError('Должна быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должна быть строкой').required('Обязательное поле')
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            remember: false,
        },
        validationSchema: validationForm,
        onSubmit: values => {
            props.login(values)
        },
    })
    useEffect(() => {

    }, [formik.values])
    return (
        <div>
            <h1>email</h1>
            <div >
                <form action="" onSubmit={formik.handleSubmit} style={{ display: 'flex', flexDirection: "column", maxWidth: '300px', margin: '5px' }}>
                    <label htmlFor="email">Логин</label>
                    <input type="text" id='email' name='email' {...formik.getFieldProps('email')} />
                    {formik.touched.email && formik.errors.email ? <span className={s.errorText}>{formik.errors.email}</span> : null}
                    <label htmlFor="password">Пароль</label>
                    <input type="password" id='password' name='password' {...formik.getFieldProps('email')} />
                    {formik.touched.password && formik.errors.password ? <span className={s.errorText}> {formik.errors.password}</span> : null}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input type="checkbox" id='remember' name='remember' onChange={formik.handleChange} value={formik.values.remember} />remember me
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>

        </div >
    )
}

export default Login
