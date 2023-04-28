import { SET_CURRENT_FORM } from "../actionTypes";
// set up the action creator accordingly
export function setCurrentForm(formSubmission) {
    return {
      type: SET_CURRENT_FORM,
      formData: formSubmission,
    };
  }

// dispatch action creator to set form submission data in the redux store 
export function obtainFormSubmission(formSubmission) {
    return dispatch => {
        dispatch(setCurrentForm(formSubmission));
    }
}