import React, { Component } from 'react';

import withAuthorization from '../Session/withAuthorization';
import  {db}  from '../../firebase/firebase.js';

class AboutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: ''
    };
  }

  componentWillMount() {
    db.ref('/entry1').on('value',snapshot =>{
      this.state.users = snapshot.val();
      this.setState({users:this.state.users})
    });
  }

  render() {

    return (
      <div>
        <h1>About</h1>
        <p>The About Page is accessible by every signed in user.</p>

        { this.state.users}
      </div>
    );
  }
}



const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AboutPage);