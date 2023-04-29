import { useState, useEffect } from 'react';
import { connect } from "react-redux";

import { fetchLikedFormSubmissions } from "../service/mockServer";

function ToastDisplayArea(props) {
  const [ formSubmissionsData, setFormSubmissionsData ] = useState([]);

  useEffect(async () => {
    try {
        // stimulate call to server to fetch form submissions upon componentDidMount, and do it within a try-catch due to its async nature
        const { formSubmissions } = await fetchLikedFormSubmissions();
        setFormSubmissionsData(formSubmissions);
    } catch (err) {
        console.error(err);
    }
  }, [props.open]);

  const submittedFormsElement = formSubmissionsData && formSubmissionsData.map((formData) => {
    return <li key={formData.id}> {`First Name: ${formData.data.firstName} | Last Name: ${formData.data.lastName} | Email: ${formData.data.email}`} </li>
  });

  return (
    <div>
        <ul> {submittedFormsElement} </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    open: state.toastNotification.open,
  };
}

export default connect(mapStateToProps, {})(ToastDisplayArea);