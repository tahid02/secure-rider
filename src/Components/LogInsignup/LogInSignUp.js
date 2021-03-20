
// import firebase from "firebase/app";
// import "firebase/auth";
// import { useContext, useState } from 'react';
// import { useHistory, useLocation } from "react-router";
// import { UserContext } from "../../App";
// import FbGoogleSignUp from "./FbGoogleSignUp/FbGoogleSignUp";
// import firebaseConfig from "./firebase.config";
// import './LogInSignUp.css'


// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig)
//   }


// const LogInSignUp = () => {

//     const [loggedInUser,setLoggedInUser] = useContext(UserContext)
//     const history = useHistory();
//     const location = useLocation()
//      const { from } = location.state || { from: { pathname: "/" } };
//     const [newUser, setNewUser] = useState(true)
//     const [user, setUser] = useState({
//         // newUser:false,

//         name: '',
//         email: '',
//         error: ''
//       })


//       const handleChange = (e) => {
//         // console.log(e.target.name,e.target.value);
//         let isFieldValid = true;
//         if (e.target.name === 'email') {
//           isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)


//         }

//         if (e.target.name === 'password') {
//           const isPasswordValid = e.target.value.length > 6;
//           const isPasswordHasNumber = /\d{1}/.test(e.target.value)
//           isFieldValid = isPasswordValid && isPasswordHasNumber;




//         }



//         if (isFieldValid) {

//           const newUserInfo = { ...user }

//           newUserInfo[e.target.name] = e.target.value //setting property in user object
//           setUser(newUserInfo)
//         }

//       }



//       const handleSubmit = (e) => {
//         e.preventDefault();


//         console.log(user.email, user.password,user.name)
//         if (newUser && user.email && user.password) {
//           firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
//             .then((userCredential) => {
//               // Signed in 
//               var user = userCredential.user;
//               updateUserName(user.name)
//               const {displayName,email} = user
//               const signedInUser = {name:displayName ,email}
//               setLoggedInUser(signedInUser);
//               history.replace(from)
//               console.log(signedInUser,user)
//             })
//             .catch((error) => {
//               console.log(error.message)

//             });
//         }




//         if (!newUser && user.email && user.password) {

//           firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//             .then((userCredential) => {
//               // Signed in
//               var user = userCredential.user;              
//               const {displayName,email} = user
//               const signedInUser = {name:displayName,email}
//               setLoggedInUser(signedInUser)
//               history.replace(from)

//               console.log(signedInUser,user)
//             })
//             .catch((error) => {
//               console.log(error.message)
//             });
//         }
//       }

//       const updateUserName = name => {
//         const user = firebase.auth().currentUser;

//         user.updateProfile({
//           displayName:name 
//           // photoURL: "https://example.com/jane-q-user/profile.jpg"
//         }).then(function () {
//           // Update successful.
//           console.log('user name updated successfully');
//         }).catch(function (error) {
//           // An error happened.
//           console.log(error);
//         });
//       }
//     return (
//         <div>
//             <form action="" onSubmit={(e) => handleSubmit(e)}>
//                 <h4> {newUser ? 'create an account' : 'log in'} </h4>
//                 {newUser && <div>
//                     <label htmlFor="name">Name </label>
//                     <input type="text" name="name" onBlur={handleChange} required/>
//                 </div>
//                 }
//                 <div>
//                     <label htmlFor="name">Username or Email  </label>
//                     <input type="email" name="email" onBlur={handleChange} required/>
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password  </label>
//                     <input type="password" name="password" onBlur={handleChange} required/>

//                 </div>
//                 {newUser && <div>
//                     <label htmlFor="confirmPassword">confirm Password </label>
//                     <input type="password" name="confirmPassword" onBlur={handleChange} />
//                 </div>
//                 }
//                 {
//                     !newUser && <div >
//                         <input type="checkbox" name="remember" />
//                         <label htmlFor="remember" className='d-inline'> remember me </label>
//                         <span>Forgot Password ? </span>
//                     </div>
//                 }


//                 <button type="submit" className='btn sign-in mt-3'> {newUser ? 'Create an account ' : 'Log in'} </button>
//                 <p>
//                     {
//                         newUser ? ' already have an account?' : 'Dont have an account? '
//                     }

//                     <span onClick={() => setNewUser(!newUser)}>
//                         {
//                             newUser ? ' log in' : 'sign up'
//                         }
//                     </span>
//                 </p>
//             </form>
//                         <FbGoogleSignUp />
//         </div>
//     );
// };

// export default LogInSignUp;

















































































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
    // e.preventDefault();

    console.log(user)
    console.log(user.email, user.password, user.name);
    console.log(watch('example'))
    if (newUser) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          // updateUserName(user.name)
          const { displayName, email } = user
          const signedInUser = { name: displayName, email }
          setLoggedInUser(signedInUser);
          history.replace(from)
          console.log(signedInUser, user)
        })
        .catch((error) => {

          console.log(error.message)

        });
    }




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


  return (
    <div className='center_item'>
      <div>


        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <h4> {newUser ? 'create an account' : 'log in'} </h4>

          <div className='mt-4'>
            {
              newUser && <div>
                <label htmlFor="name">Name </label>
                <input type="text" name="name" defaultValue='' ref={register({ required: true })} />
                {errors.name && <p className="errorMsg"> name is required </p> }
              </div>
            }
          </div>


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




          {/* <div>
          {
            newUser && <div>
              <label htmlFor="confirmPassword">confirm Password </label>
              <input type="password" name="confirmPassword" />
            </div>
          }
        </div> */}
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

            <span onClick={() => setNewUser(!newUser)}>
              {
                newUser ? ' log in' : 'sign up'
              }
            </span>

          </p>



        </form>

        <FbGoogleSignUp />

      </div>
    </div>
  );
};

export default LogInSignUp;