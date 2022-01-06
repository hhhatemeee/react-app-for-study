import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd861011f-7036-41bd-8ddc-054d180247e9'
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

}

export const authAPI = {
    getMyInfo() {
        return instance.get('auth/me').then(res => res.data)
    }
}


