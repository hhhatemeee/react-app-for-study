import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'
const SET_LOGIN = 'SET_LOGIN'
let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case SET_LOGIN:
            return {
                ...state,
                isAuth: action.auth
            }
        default:
            return state
    }
}


export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId: userId, email: email, login: login } })
export const setLogin = (auth) => ({ type: SET_LOGIN, auth })
export const getMyName = () => (dispatch) => {
    authAPI.getMyInfo().
        then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setUserData(id, email, login))
            }
        })
}

export const login = ({ email, password, remember }) => (dispatch) => {
    authAPI.login(email, password, remember).then(data => {
        if (data.resultCode === 0) {
            console.log('успешно');
            dispatch(setLogin(true))
        }
    })
}

export default authReducer