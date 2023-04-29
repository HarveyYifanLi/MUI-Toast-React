import React, {Component} from "react";

import { fetchLikedFormSubmissions } from "../service/mockServer";

export default class ToastDisplayArea extends Component {
  constructor(props){
    super(props);
    this.state = {
        formSubmissionsData: [],
    };
  }

  async componentDidMount() {
    try {
        // stimulate call to server to fetch form submissions upon componentDidMount, and do it within a try-catch
        const { formSubmissions } = await fetchLikedFormSubmissions();
        console.log('formSubmissions:', formSubmissions);

        this.setState({formSubmissionsData: formSubmissions});
    } catch (err) {
        console.error(err);
    }
  }

  render() {
    const submittedFormsElement = this.state.formSubmissionsData && this.state.formSubmissionsData.map((formData) => {
        return <li key={formData.id}> {`First Name: ${formData.data.firstName} | Last Name: ${formData.data.lastName} | Email: ${formData.data.email}`} </li>
    });

    return (
      <div>
        <ul> {submittedFormsElement} </ul>
      </div>
    );
  }
}
