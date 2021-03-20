import firebase from "firebase/app";
import { useContext } from "react";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

const styling ={
    backgroundColor:'lightGray',
    border:'2px solid black',
    borderRadius:'20px'
    
}
const FbGoogleSignUp = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();


    const handleSignUp = (provider) => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                const credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                const { displayName, email } = user
                const signedInUser = { name: displayName, email }
                setLoggedInUser(signedInUser)
                history.replace(from);
                console.log('user from google', user);
                console.log('user from google', signedInUser);
                // ...
            }).catch((error) => {


                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                const credential = error.credential;
                console.log('error from google', errorMessage);
                // ...
            });
    }
    return (
        <div>
            <div onClick={() => handleSignUp(fbProvider)} className='px-3' style={styling} >
            <FontAwesomeIcon icon={faFacebook} /> continue with facebook  
                </div>
            <br />
            <div onClick={() => handleSignUp(googleProvider)} className='px-3' style={styling} >
               <FontAwesomeIcon icon={faGoogle} /> continue with google 
                </div>
        </div>
    );
};

export default FbGoogleSignUp;