import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user: { login, avatar_url, html_url } } ) =>  {    
        //const { login , avatar_url, html_url } = props.user;

        return (
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" style={{ width: '60px' }}  />
                <h3>{login}</h3>
                <div>
                    {/* <a href={html_url} >Profile</a> */}
                    <Link className="btn btn-dark btn-sm my-1" to={`/user/${login}`} > Profile </Link>
                </div>
            </div>
        )
    
    
}

UserItem.propTypess = {
    user: PropTypes.object.isRequired
} 

export default UserItem
