import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA'
const SET_LOGIN = 'SET_LOGIN'
const SET_LOGOUT = 'SET_LOGOUT'
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
        case SET_LOGIN:
            return {
                ...state,
                isAuth: action.auth
            }
        case SET_LOGOUT:
            return {
                state,
                isAuth: action.auth
            }
        default:
            return state
    }
}


export const setUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId: userId, email: email, login: login } })
export const setLogin = (auth) => ({ type: SET_LOGIN, auth })
export const setLogout = (auth) => ({ type: SET_LOGOUT, auth })
export const getMyName = () => (dispatch) => {
    authAPI.getMyInfo().
        then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data
                dispatch(setUserData(id, email, login))
            }
        })
}

export const login = ({ email, password, remember }, setStatus) => (dispatch) => {
    authAPI.login(email, password, remember).then(data => {
        if (data.resultCode === 0) {
            console.log('успешно');
            dispatch(setLogin(true))
        } else {
            let message = data.messages.length > 0 ? data.messages : 'Неизвестная ошибка'
            setStatus({ error: message })
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(setLogout(false))
            console.log('Вы вышли');
        }
    })
}

export default authReducer