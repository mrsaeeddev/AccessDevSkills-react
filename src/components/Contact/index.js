import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import { db } from '../../firebase/firebase.js';

class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: ''
    };
  }

  componentWillMount() {
    db.ref('/entry2').on('value',snapshot =>{
      this.state.users = snapshot.val();
      this.setState({users:this.state.users})
    });
  }

  render() {

    return (
      <div>
        <h1>Contact </h1>
        <p>The Contact Page is accessible by every signed in user.</p>

        { this.state.users}
      </div>
    );
  }
}


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ContactPage);