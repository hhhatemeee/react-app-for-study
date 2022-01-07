import React from 'react'
import { getStatusProfile } from '../../../redux/profileReducer'
import Preloader from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatus from './ProfileStatus'
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>

            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <div>
                    <h1 onClick={() => props.updateStatusProfile('123')}>kek</h1>
                    <ProfileStatus status={props.status} updateStatusProfile={props.updateStatusProfile} />
                    {props.profile.lookingForAJob ? <p>Ищу работу</p> : null}
                    <h6>{props.profile.fullName}</h6>
                </div>


            </div>
        </div >
    )
}

export default ProfileInfo
