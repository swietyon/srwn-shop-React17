import React from 'react';
import { useState } from 'react';

import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';


const defaultFormFields ={
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            console.log(response);
            resetFormFields();
        }
        catch(error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('Cannot create user, email already in user');
            }
            console.log('user creation encountered an error', error);
        }
    }


    const handleChange = (event) => {
        const {name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });
    }

  return (
    <div className='sign-up-container'>
        <h2>Already have an account?</h2>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>

          <FormInput 
            label="Email"
            type="email" 
            required 
            onChange={handleChange} 
            name="email" 
            value={email}
          />

          <FormInput 
            label="Password"
            type="password" 
            required 
            onChange={handleChange} 
            name="password" 
            value={password}
          />

          <div className='buttons-container'>
            <Button type ='submit'>Sign in</Button>
            <Button buttonType='google' onClick={signInWithGoogle} >Google sign in</Button>
          </div>
      </form>
    </div>
  );
}

export default SignInForm;
