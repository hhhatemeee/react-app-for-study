import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { login } from '../../redux/authReducer'
const LoginConatiner = (props) => {
    return (
        <Login login={props.login} />
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { login })(LoginConatiner)
