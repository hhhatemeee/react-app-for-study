import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { useMatch } from 'react-router-dom'
import { getUserProfile } from '../../redux/profileReducer'
import { Navigate } from 'react-router-dom'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Navigate to='/login' />
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId")
    return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {
    getUserProfile
})(ProfileMatch)
