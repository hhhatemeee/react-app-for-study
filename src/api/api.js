import * as axios from 'axios'
import Login from '../components/Login/Login'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '334a886f-23b5-45fc-9673-a1e443f9aa0a'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`).then(res => res.data)
    },
    followUser(id) {
        return instance.post(`follow/${id}`, {}).then(res => res.data)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`).then(res => res.data)
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`).then(res => res.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status }).then(res => {
            console.log(res)
            return res.data
        })
    }
}

export const authAPI = {
    getMyInfo() {
        return instance.get('auth/me').then(res => res.data)
    },
    login(email, password, remember) {
        return instance.post('/auth/login', {
            email: email,
            password: password,
            rememberMe: remember,
            captcha: true
        }).then(res => res.data)
    }
}


