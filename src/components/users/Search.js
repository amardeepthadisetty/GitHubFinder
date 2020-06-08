import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    state = {
        text : ''
    }

    static propTypes = {
        searchUsers : PropTypes.func.isRequired,
        clearUsers : PropTypes.func.isRequired,
        isShow : PropTypes.bool.isRequired,
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.alertUser('Please enter something in search field', 'light');
        } else {
            
            //console.log("the text in the state is: ",this.state.text);
            //the below line is passing the state from child to parent
            //that is from search to app.
            //this is called prop drilling
            this.props.searchUsers(this.state.text);
    
            this.setState({ text : ''});
        }
    }

    render() {
        const { isShow, clearUsers } = this.props;
        return (
            <form onSubmit={this.onSubmit} className="form">
                <input type="text" 
                name="text" onChange={this.onChange}
                 placeholder="Search for users"
                  value={this.state.text} />
                <input type="submit" value="search" className="btn btn-dark btn-block btn-sm" />

                {
                    isShow ? (
                        <input type="button" value="Clear" onClick={() => clearUsers()} className="btn btn-light btn-block btn-sm" />
                    ) 
                    : '' 
                }
                
                
                
            </form>
        )
    }
}

export default Search;
