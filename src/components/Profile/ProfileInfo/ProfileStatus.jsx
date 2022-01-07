import React, { useState, useEffect } from 'react'

const ProfileStatus = (props) => {

    const [state, setState] = useState({
        editMode: false,
        status: props.status
    })

    const toggleClickEdit = () => {
        setState({ editMode: !state.editMode })
        props.updateStatusProfile(state.status)
    }

    const onChangeStatus = (e) => {
        let text = e.target.value
        console.log(text)
        setState(prevState => {
            return {
                ...prevState,
                status: text
            }
        })
    }


    console.log('kek')
    return (
        <div>
            {!state.editMode
                ? <div>
                    <span onDoubleClick={toggleClickEdit}>{props.status || 'Статус пользователя'}</span>
                </div>
                : <div>
                    <input value={state.status} autoFocus={true} onBlur={toggleClickEdit} onChange={onChangeStatus}></input>
                </div>}
        </div>
    )
}

export default ProfileStatus
