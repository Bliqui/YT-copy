import React, {useState} from 'react';
import './LogForm.scss'

export const LogForm = ({title, handleSubmit}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <form className={'formBody'} onSubmit={(e) => handleSubmit(e, email, pass)}>
            <div className={'formWrapper'}>
                <div className={'inputWrapper'}>
                    <input
                        className={'emailInput'}
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className={'inputWrapper'}>
                    <input
                        className={'passwordInput'}
                        type="password"
                        placeholder="Password"
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