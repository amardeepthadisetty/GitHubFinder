import React, { useState, useContext } from 'react';
//import PropTypes from 'prop-types';
import githubContext from '../../context/github/githubContext';
import alertContext from '../../context/alert/alertContext';

const Search = ({ alertUser }) => {
    const context = useContext(githubContext);
    const alertContextRef = useContext(alertContext);
    const [text, setText] = useState('');
    
    const onChange = (e) => {
        setText( e.target.value );
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === '') {
            alertContextRef.alertUser('Please enter something in search field', 'light');
        } else {
            
            //console.log("the text in the state is: ",this.state.text);
            //the below line is passing the state from child to parent
            //that is from search to app.
            //this is called prop drilling
            context.searchUsersFunc(text);
            
            setText('');
        }
    }

    //render() {
        //const { isShow, clearUsers } = this.props;
        return (
            <form onSubmit={onSubmit} className="form">
                <input type="text" 
                name="text" onChange={onChange}
                 placeholder="Search for users"
                  value={text} />
                <input type="submit" value="search" className="btn btn-dark btn-block btn-sm" />

                {
                    context.users.length>0 ? (
                        <input type="button" value="Clear" onClick={() => context.clearUsers()} className="btn btn-light btn-block btn-sm" />
                    ) 
                    : '' 
                }
                
                
                
            </form>
        )
    //}
}


export default Search;
