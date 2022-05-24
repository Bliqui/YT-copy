import React, {useState} from 'react';

export const LogForm = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    return (
        <div>
            <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
            />
            <button onClick={handleClick}>
                {title}
            </button>
        </div>
    );
};