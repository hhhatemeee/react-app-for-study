import preloader from '../../../assets/images/ball-triangle.svg'
import React from 'react'

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} alt="Загрузка..." />
        </div>
    )
}

export default Preloader
