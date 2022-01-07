import React from 'react'
import { profileAPI } from '../api/api';
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const GET_TEXT_STATUS = 'GET_TEXT_STATUS'
const UPDATE_TEXT_STATUS = 'UPDATE_TEXT_STATUS'
let id = 5;

let initialState = {
    postsData: [
        { id: 1, text: 'Первый пост', coontLikes: 12 },
        { id: 2, text: 'Второй пост', coontLikes: 10 },
        { id: 3, text: 'Третий пост', coontLikes: 9 },
        { id: 4, text: 'Четвертый пост', coontLikes: 8 }
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: id,
                text: state.newPostText,
                coontLikes: 0
            }
            id++
            return {
                ...state,
                newPostText: '',
                postsData: [...state.postsData, newPost]
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case GET_TEXT_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })

export const setTextStatus = (status) => ({ type: GET_TEXT_STATUS, status })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                console.log(data)
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatusProfile = (userId) => {
    return (dispatch) => {
        console.log(123123);
        profileAPI.getStatus(userId)
            .then(data => {
                console.log(data);
                dispatch(setTextStatus(data))
            })
    }
}
export const updateStatusProfile = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    console.log(data);
                    dispatch(setTextStatus(status))
                }
            })
    }
}

export default profileReducer
