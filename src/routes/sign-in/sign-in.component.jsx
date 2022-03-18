import React from 'react';
import SingUpForm from '../../components/sign-up-form/sign-up-form.component';


import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth 
} from '../../utils/firebase/firebase.utils';


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={logGoogleUser}> Sign in with Google Popup</button>
            <SingUpForm />
        </div>
    );
}

export default SignIn;
