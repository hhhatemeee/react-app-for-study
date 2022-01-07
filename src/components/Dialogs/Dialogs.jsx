import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import { Navigate } from 'react-router-dom'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer'


const Dialogs = (props) => {

    let state = props.dialogsPage

    const SendMessage = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e) => {
        let text = e.target.value
        console.log(props.updateNewMessageBody)
        props.updateNewMessageBody(text)
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
                <div>
                    <div>
                        <textarea value={state.newMessageBody}
                            onChange={onNewMessageChange}></textarea>
                    </div>
                    <div>
                        <button onClick={SendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dialogs
