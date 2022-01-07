import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) => {
    console.log(props.dispatch)
    console.log(props.userId)
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatusProfile={props.updateStatusProfile} />
            <MyPostsContainer />
        </div>
    )
}

export default Profile
