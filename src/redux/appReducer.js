import { authAPI } from '../api/api';
import { getMyName } from './authReducer';

const SET_INITIALIZED = 'SET_INITIALIZED'
let initialState = {
    initialized: false
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            console.log('init')
            return {
                ...state,
                initialized: action.isInit
            }
        default:
            return state
    }
}


export const initializedSuccess = (isInit) => ({ type: SET_INITIALIZED, isInit })

export const initializeApp = () => async (dispatch) => {
    await dispatch(getMyName())
    dispatch(initializedSuccess(true))
    console.log(123)


}



export default appReducer