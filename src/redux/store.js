import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"


let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Alex' },
                { id: 2, name: 'Vanya' },
                { id: 3, name: 'Vlad' }
            ],
            messagesData: [
                { id: 1, text: 'Hi' },
                { id: 2, text: 'How are you' },
                { id: 3, text: 'Good Morning' }
            ],
            newMessageBody: ''
        },
        profilePage: {
            postsData: [
                { id: 1, text: 'Первый пост', coontLikes: 12 },
                { id: 2, text: 'Второй пост', coontLikes: 10 },
                { id: 3, text: 'Третий пост', coontLikes: 9 },
                { id: 4, text: 'Четвертый пост', coontLikes: 8 }
            ],
            newPostText: ''
        },
        sidebar: {
            sidebarData: [
                { id: 1, name: 'Vlad' },
                { id: 2, name: 'Vanya' },
                { id: 3, name: 'Den' },
            ]
        }
    },
    _callSubscriber() { },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    addPost() {
        let newPost = {
            id: id,
            text: this._state.profilePage.newPostText,
            coontLikes: 0
        }
        id++
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    dispatch(action) {
        console.log(action);
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}




let id = 5
let idMessage = 4

export default store