import { useState, useEffect } from 'react';

import { fetchLikedFormSubmissions } from "../service/mockServer";

export default function ToastDisplayArea() {
  const [ formSubmissionsData, setFormSubmissionsData ] = useState([]);

  useEffect(async () => {
    try {
        // stimulate call to server to fetch form submissions upon componentDidMount, and do it within a try-catch
        const { formSubmissions } = await fetchLikedFormSubmissions();
        setFormSubmissionsData(formSubmissions);
    } catch (err) {
        console.error(err);
    }
  }, []);

  const submittedFormsElement = formSubmissionsData && formSubmissionsData.map((formData) => {
    return <li key={formData.id}> {`First Name: ${formData.data.firstName} | Last Name: ${formData.data.lastName} | Email: ${formData.data.email}`} </li>
  });

  return (
    <div>
        <ul> {submittedFormsElement} </ul>
    </div>
  );
}
