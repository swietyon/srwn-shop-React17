import React from 'react';
import SingUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {
    return (
        <div>
            <h1>SIGN IN PAGE</h1>
            <SignInForm />
            <SingUpForm />
        </div>
    );
}

export default Authentication;
