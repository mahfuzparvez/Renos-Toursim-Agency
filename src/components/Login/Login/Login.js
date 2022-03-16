import React from 'react';
import { BsGoogle } from 'react-icons/bs';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';
const Login = () => {
    // const { signInUsingGoogle } = useAuth();
    const { user, signInUsingGoogle } = useFirebase();
    return (
        <div>
            <h2 className='my-4'>Please Sign In</h2>
            <button onClick={signInUsingGoogle} className="btn btn-info text-light mt-4"><BsGoogle /> Sign In with Google</button>
        </div>
    );
};

export default Login;