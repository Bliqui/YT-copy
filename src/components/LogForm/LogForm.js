import React, {useState} from 'react';
import './LogForm.scss'

export const LogForm = ({title, handleSubmit}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <form className={'formBody'} onSubmit={(e) => handleSubmit(e, email, pass)}>
            <div className={'formWrapper'}>
                <div className={'inputWrapper'}>
                    <div className={'inputTitle'}>Email</div>
                    <input
                        className={'input'}
                        type="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className={'inputWrapper'}>
                    <div className={'inputTitle'}>Password</div>
                    <input
                        className={'input'}
                        type="password"
                        onChange={(e) => setPass(e.target.value)}
                        value={pass}
                    />
                </div>
                <button className={'submitBtn'}>
                    {title}
                </button>
            </div>
        </form>
    );
};