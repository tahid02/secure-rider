
import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

import FbGoogleSignUp from "./FbGoogleSignUp/FbGoogleSignUp";
import firebaseConfig from "./firebase.config";
import './LogInSignUp.css'


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


const LogInSignUp = () => {

  const { register, handleSubmit, watch, errors } = useForm()

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const password = useRef;
  const history = useHistory();
  const location = useLocation()
  const { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(true)
  const [logInError, setLogInError] = useState('')
  password.current = watch("password", "");






  const onSubmit = (user) => {
 

    // sign up if user is new user
    if (newUser) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          const userInfo = userCredential.user;
          updateUserName(user.name)
          const { email } = userInfo
          console.log(user.name);
          const signedInUser = { name: user.name, email }
          setLoggedInUser(signedInUser);
          history.replace(from)
          console.log(signedInUser, user)
        })
        .catch((error) => {

          console.log(error.message)

        });
    }



    // sign in if user is not new user
    if (!newUser) {

      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          const { displayName, email } = user
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser)
          history.replace(from)

          console.log(signedInUser, user)
        })
        .catch((error) => {
          setLogInError(' email or password is wrong')
          console.log(error.message)
        });
    }
  }


  // update user information after sign up
  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName:name 
    }).then(function () {
      console.log('user name updated successfully');
    }).catch(function (error) {
      console.log(error);
    });
  }




  return (
    <div className='center_item'>
      <div>


        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <h4> {newUser ? 'create an account' : 'log in'} </h4>

          {/* input name field */}
          <div className='mt-4'>
            {
              newUser && <div>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" defaultValue='' ref={register({ required: true })} />
                {errors.name && <p className="errorMsg"> name is required </p> }
              </div>
            }
          </div>



           
            {/* input user email field */}
          <div className='mt-4'>
            <label htmlFor="name">Username or Email  </label>

            <input
              type="text"
              name="email"
              ref={register({
                required: 'Email is required.',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid.'
                }
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}

          </div>



              {/* input user password field */}
          <div className='mt-4'>
            <label htmlFor="password">Password  </label>

            <input
              type="password"
              name="password"
              ref={register({
                required: 'Password is required.',
                minLength: {
                  value: 6,
                  message: 'Password should be at-least 6 characters.'
                }
              })}
            />
            {errors.password && (<p className="errorMsg">{errors.password.message}</p>)}

          </div>




              {/* user password confirmation field */}
          <div className='mt-4'>
            {
              newUser && <div>
                <label htmlFor="confirm_password">confirm Password </label>
                <input
                  name="confirm_password"
                  type="password"
                  ref={register({
                    validate: value =>
                      value === password.current || "The passwords do not match"
                  })}
                />
                {errors.confirm_password && <p className="errorMsg">{errors.confirm_password.message}</p>}

              </div>
            }
          </div>




            {/* forgot password and remember me part for log in */}
          <div className='mt-4'>
            {
              !newUser && <div >
                <input type="checkbox" name="remember" />
                <label htmlFor="remember" className='d-inline'> remember me </label>
                <span className='ms-3 '>Forgot Password ? </span>
              </div>
            }
          </div>



          <p className='errorMsg' > {logInError} </p>

          <button type="submit" className='btn sign-in mt-3'> {newUser ? 'Create an account ' : 'Log in'} </button>



          <p>

            {newUser ? ' already have an account?' : 'Dont have an account? '}

            {/* log in or sign up button */}
            <span onClick={() => setNewUser(!newUser)}>
              {
                newUser ? ' log in' : 'sign up'
              }
            </span>

          </p>



        </form>
              <div className='text-center'>or</div>
              {/* google and facebook sign up button */}
        <FbGoogleSignUp />

      </div>
    </div>
  );
};

export default LogInSignUp;