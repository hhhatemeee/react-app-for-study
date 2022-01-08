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
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: id,
                text: action.textPost,
                coontLikes: 0
            }
            id++
            return {
                ...state,
                postsData: [...state.postsData, newPost]
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

export const addPostActionCreator = (textPost) => {
    return {
        type: ADD_POST,
        textPost
    }
}


export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })

export const setTextStatus = (status) => ({ type: GET_TEXT_STATUS, status })

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatusProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setTextStatus(data))
            })
    }
}
export const updateStatusProfile = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(setTextStatus(status))
                }
            })
    }
}

export default profileReducer
