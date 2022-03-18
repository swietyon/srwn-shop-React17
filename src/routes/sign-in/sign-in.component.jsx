import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <button onClick={logGoogleUser}> Sign in with Google</button>
        </div>
    );
}

export default SignIn;
