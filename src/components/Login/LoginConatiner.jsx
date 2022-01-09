import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../redux/authReducer'
import { initializedSuccess } from '../../redux/appReducer'
const LoginConatiner = (props) => {
    return (
        <Login login={props.login} isAuth={props.isAuth} initializedSuccess={props.initializedSuccess} />
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { login, initializedSuccess })(LoginConatiner)
