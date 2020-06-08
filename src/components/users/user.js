import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../../layout/Spinner';
import { Link } from 'react-router-dom';

class User extends Component {


    componentDidMount(){
        //getUser = () => {
            this.props.getUser(this.props.match.params.login);
        //}

    }

    static propTypes = {
        loading :PropTypes.bool.isRequired,
        user : PropTypes.object.isRequired,
        getUser : PropTypes.func.isRequired
    }
    

    render() {
        console.log("user details", this.props.user);
        const {
             name,
             company,
             avatar_url,
             location,
             bio,
             blog,
             login,
             html_url,
             followers,
             following,
             public_repos,
             public_gist,
             hireable
        
        } = this.props.user;

        const { loading } = this.props;
        if (loading) {
            return <Spinner />
        }
        return (
            <Fragment>
                <Link to="/" className="btn btn-sm btn-info">Back to Search Page </Link>
                Hireable : {' '}
                {
                    hireable ? (
                        <i className="fas fa-check text-success" />)
                        : (<i className="fas fa-times-circle text-danger" />)
                }

                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt="" className="round-img" style={{ width: '150px' }}
                         />
                         <h1>{name}</h1>
                         <p>{location}</p>
                    </div>
                    <div>
                        {bio && (
                            <Fragment>
                                <h1>Bio</h1>
                                <p>{bio}</p>
                            </Fragment>
                        )}
                        <a target="_blank" href={html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username</strong> {login}
                                    </Fragment>}
                            </li>

                            <li>
                                {company && <Fragment>
                                    <strong>Company</strong> {company}
                                </Fragment>}
                            </li>

                            <li>
                                {blog && <Fragment>
                                    <strong>Website</strong> {blog}
                                </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="card text-center">
                    <div className="badge badge-primary">Followers : {followers}</div>
                    <div className="badge badge-success">Following : {following}</div>
                    <div className="badge badge-danger">Public Repos : {public_repos}</div>
                    <div className="badge badge-danger">Public Gist : {public_gist}</div>

                </div>
            </Fragment>
            
        )
    }
}

export default User;
