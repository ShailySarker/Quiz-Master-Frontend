import { useState } from 'react';
import SignUp from './Components/SignUp';
import SendOTP from './Components/SendOTP';

const CreateAccount = () => {
    const [isEmailFilled, setIsEmailField] = useState(false);
    const [email, setEmail] = useState('');
    return (
        <>
            {
                isEmailFilled ? <SignUp givenemail={email} /> : <SendOTP setIsEmailField={setIsEmailField} email={email} setEmail={setEmail} />
            }
        </>
    );
};

export default CreateAccount;