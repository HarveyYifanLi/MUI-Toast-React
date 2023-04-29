import { SET_CURRENT_FORM, OPEN_TOAST_NOTIFICATION } from "../actionTypes";
// set up the action creator accordingly
export function setCurrentForm(formSubmission) {
    return {
      type: SET_CURRENT_FORM,
      formData: formSubmission,
    };
}

export function openToastNotification(openState=true) {
    return {
      type: OPEN_TOAST_NOTIFICATION,
      open: openState,
    };
}
