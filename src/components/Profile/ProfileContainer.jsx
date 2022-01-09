import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { useMatch } from 'react-router-dom'
import { getUserProfile, getStatusProfile, updateStatusProfile } from '../../redux/profileReducer'
import { Navigate } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : null
        console.log(userId)

        if (!userId) {
            console.log(this.props.authorizedUserId)
            userId = this.props.authorizedUserId;
        }
        if (userId) {
            this.props.getUserProfile(userId)
            this.props.getStatusProfile(userId)
        }

        console.log(123123)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusProfile} />
        )
    }

}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
})

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId")
    console.log(match)
    return <ProfileContainer {...props} match={match} />;

}

export default compose(connect(mapStateToProps, { getUserProfile, getStatusProfile, updateStatusProfile }), withAuthRedirect)
    (ProfileMatch)
