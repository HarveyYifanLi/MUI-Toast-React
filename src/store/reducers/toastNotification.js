import {OPEN_TOAST_NOTIFICATION} from '../actionTypes';

const DEFAULT_STATE = {
    open: false
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case OPEN_TOAST_NOTIFICATION:
            return {
                open: action.open,
            };
        default:
            return state;
    }
}