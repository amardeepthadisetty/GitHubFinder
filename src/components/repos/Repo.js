import React from 'react';
import RepoItem from './Repo-Item';
import PropTypes from 'prop-types';

const Repo = ({ repos }) => {
    return (
        <div>
            {
                repos.map( repo => (
                    <RepoItem key={repo.id} repo={repo}  />
                ))
            }
        </div>
    )
}

Repo.propTypes = {
    repos : PropTypes.array.isRequired
}

export default Repo;