import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: true
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}


export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId: userId, email: email, login: login } })

export const getMyName = () => (dispatch) => {
    authAPI.getMyInfo().
        then(data => {
            if (data.resultCode === 0) {
                console.log(data)
                let { id, email, login } = data.data
                dispatch(setUserData(id, email, login))
            }
        })
}


export default authReducer