import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { profileAPI } from '../../api/api'
import { setUserData } from '../../redux/authReducer'
import Header from './Header'

const HeaderContainer = (props) => {

    useEffect(() => {
        profileAPI.getMyInfo().
            then(data => {
                if (data.resultCode === 0) {
                    console.log(data)
                    let { id, email, login } = data.data
                    props.setUserData(id, email, login)
                }
            })
    })


    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { setUserData })(HeaderContainer)
