import React from 'react'
const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
let id = 5;

let initialState = {
    postsData: [
        { id: 1, text: 'Первый пост', coontLikes: 12 },
        { id: 2, text: 'Второй пост', coontLikes: 10 },
        { id: 3, text: 'Третий пост', coontLikes: 9 },
        { id: 4, text: 'Четвертый пост', coontLikes: 8 }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    console.log(action);
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

export default profileReducer
