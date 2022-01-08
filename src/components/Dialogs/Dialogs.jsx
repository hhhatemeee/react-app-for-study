import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Form, Formik, Field } from 'formik'
import { Navigate } from 'react-router-dom'


const Dialogs = (props) => {

    let state = props.dialogsPage
    const initialValues = {
        textMessage: ''
    }
    const onSubmit = (values, { setSubmitting }) => {
        console.log(values.textMessage)
        props.sendMessage(values.textMessage)
        values.textMessage = ''
        setSubmitting(false)
    }

    if (!props.isAuth) return <Navigate to={'/login'} />

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {state.dialogsData.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)}
            </div>
            <div className={s.messages}>
                <div>
                    {state.messagesData.map(message => <Message key={message.id} text={message.text} />)}
                </div>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                >
                    <Form>
                        <div>
                            <Field as='textarea' type='text' id='textMessage' name='textMessage'></Field>
                        </div>
                        <div>
                            <button type='submit'>Send</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div >
    )
}

export default Dialogs
