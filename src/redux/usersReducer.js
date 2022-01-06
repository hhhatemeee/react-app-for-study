import { usersAPI } from "../api/api"


const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 49,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id == action.userId) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)

            }
        default:
            return state
    }
}

export const toggleFollow = (userId) => ({ type: TOGGLE_FOLLOW, userId: userId })
export const setUsers = (users) => ({ type: SET_USERS, users: users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalCount })
export const setIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching: isFetching })
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
            })
    }
}

export const getCurrentPage = (currentPage, pageSize, pageNumber) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(setIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode == 0) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}
export default usersReducer