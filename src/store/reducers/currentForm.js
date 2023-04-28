import {SET_CURRENT_FORM} from '../actionTypes';

const DEFAULT_STATE = {
    formData: {}
};

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_FORM:
            return {
                formData: action.formData
            };
        default:
            return state;
    }
}