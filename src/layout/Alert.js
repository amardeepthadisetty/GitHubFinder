import React, { useContext } from 'react';
import alertContext from '../context/alert/alertContext';

const Alert = () => {
    const context = useContext(alertContext);

    const { alert } = context;
    return (
         alert != null ? 
        (<div className={`alert alert-${alert.type}`}>
            <i className="fas fa-info-circle" />  { alert.msg }
        </div>) : null
        
    )
}

export default Alert;
