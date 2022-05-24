import React, {useState} from 'react';
import './LogForm.scss'

export const LogForm = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div className={'formBody'}>
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
                <button className={'submitBtn'} onClick={() => handleClick(email, pass)}>
                    {title}
                </button>
            </div>
        </div>
    );
};