import React from 'react'
import * as axios from 'axios'
import Profile from './Profile'
import { connect } from 'react-redux'
import { useMatch } from 'react-router-dom'
import { setUserProfile } from '../../redux/profileReducer'
import { profileAPI } from '../../api/api'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        profileAPI.getProfile(userId)
            .then(data => {
                console.log(data)
                console.log(this.props.match)
                this.props.setUserProfile(data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId")
    return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {
    setUserProfile
})(ProfileMatch)
