import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getMyName, logout } from '../../redux/authReducer'
import Header from './Header'

const HeaderContainer = (props) => {

    useEffect(() => {
        props.getMyName();
    })

    return (
        <Header {...props} logout={props.logout} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { getMyName, logout })(HeaderContainer)
