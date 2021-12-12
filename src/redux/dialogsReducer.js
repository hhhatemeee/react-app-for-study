import React from 'react'
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

let idMessage = 3;

let initialState = {
    dialogsData: [
        { id: 1, name: 'Alex' },
        { id: 2, name: 'Vanya' },
        { id: 3, name: 'Vlad' }
    ],
    messagesData: [
        { id: 1, text: 'Hi' },
        { id: 2, text: 'How are you' },
        { id: 3, text: 'Good Morning' }
    ],
    newMessageBody: ''
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessage
            }
        case SEND_MESSAGE:
            let text = state.newMessageBody
            idMessage++
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, { id: idMessage, text: text }]
            }

        default:
            return state
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: text
    }
}

export default dialogsReducer
