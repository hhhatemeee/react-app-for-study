import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <div>
                    <span>{props.profile.aboutMe}</span>
                    {props.profile.lookingForAJob ? <p>Ищу работу</p> : null}
                    <h6>{props.profile.fullName}</h6>
                </div>


            </div>
        </div >
    )
}

export default ProfileInfo
