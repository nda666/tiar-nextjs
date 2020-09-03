import React, { useContext } from "react";
import { useRouter } from 'next/router'
import SignIn from "./auth/signin";
import SignUp from "./auth/signup";
import Profile from "./auth/profile";
import PasswordReset from "./auth/password-reset";

import { UserContext } from '~/providers/users-provider'
function Application() {
  const user = useContext(UserContext);

  return (
        user.user ? <Profile /> : <SignIn />
        

  );
}
export default Application;