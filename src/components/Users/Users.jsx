import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import * as axios from 'axios'
import { usersAPI } from '../../api/api';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / (props.pageSize * 100))
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div className={s.pages}>
                {pages.map(p => {
                    return <span key={p} className={props.currentPage === p && s.selectedPage}
                        onClick={() => props.onPageChanged(p)}>{p}</span>
                })}
            </div>
            {props.users.map(u => {
                return (<div key={u.id} className={s.user}>
                    <span className={s.userFace}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : 'https://st4.depositphotos.com/27867620/30392/v/1600/depositphotos_303925352-stock-illustration-user-web-icon-simple-design.jpg'}
                                alt="" className={s.userPhoto} />
                        </div>
                        <div>
                            {u.followed
                                ? <button className={s.followBtn} disabled={props.followingInProgress.some(id => id == u.id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.unfollowUser(u.id)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    props.toggleFollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)

                                            })

                                    }}>Отписаться</button>
                                : <button disabled={props.followingInProgress.some(id => id == u.id)}
                                    onClick={() => {
                                        props.toggleFollowingProgress(true, u.id)
                                        usersAPI.followUser(u.id)
                                            .then(data => {
                                                if (data.resultCode == 0) {
                                                    props.toggleFollow(u.id)
                                                }
                                                props.toggleFollowingProgress(false, u.id)
                                            })

                                    }}>Подписаться</button>}
                        </div>
                    </span>
                    <span className={s.info}>
                        <span>
                            <div><NavLink to={'/profile/' + u.id}><strong className={s.userName}>{u.name}</strong></NavLink></div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location != undefined ? u.location.city : 'Какая то страна'}</div>
                            <div>{u.location != undefined ? u.location.country : 'Какой то город'}</div>
                            <div>{u.id}</div>
                        </span>
                    </span>
                </div>
                )
            }
            )}
        </div>
    )
}

export default Users
