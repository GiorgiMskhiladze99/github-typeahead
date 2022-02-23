import React from 'react';
import './users.scss'

function Users(props) {

    return (
        <>
            <div className="search__suggestions">
                <ul>
                    {
                        props.data.items && props.data.items.map((el) => {
                            return (
                                <li key={el.id} onClick={e=>{window.open(el.html_url)}}>
                                    <img width={50} height={50} className={"user__image"} src={el.avatar_url} alt="user"/>
                                    <span className={"user__name"}>{el.login}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default Users;