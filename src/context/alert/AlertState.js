import React, { useReducer } from 'react';
import alertContext from '../alert/alertContext';
import alertReducer from '../alert/alertReducer';

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types';

const AlertState = props => {
    const initial_state = null;

    const [state, dispatch] = useReducer(alertReducer, initial_state);


    const alertUserWithTwoParameters = (msg, type) => {

        //setAlert({ msg: msg, type: type });
        dispatch({
            type : SET_ALERT,
            payload : { msg, type }
        });

        setTimeout(() => {
            dispatch({
                type: REMOVE_ALERT
            });
        }, 3000);
    }



    return <alertContext.Provider
        value={{
            alert : state,
            alertUser : alertUserWithTwoParameters
        }}
    >
        {props.children}
    </alertContext.Provider>
}

export default AlertState;