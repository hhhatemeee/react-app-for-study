import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../redux/authReducer'
const LoginConatiner = (props) => {
    return (
        <Login login={props.login} isAuth={props.isAuth} />
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(LoginConatiner)
