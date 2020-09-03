import React, { Component, createContext } from "react";
import { auth, getUserDocument } from "~/module/firebase";

export const UserContext = createContext({user: {}});

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount = () => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        if (!userAuth.emailVerified) {
          this.setState({ user: null });
          return false;
        }
        const user = await getUserDocument(userAuth.uid);
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };
  render() {
    return (
      <UserContext.Provider value={this.state.user }>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
export default UserProvider;
