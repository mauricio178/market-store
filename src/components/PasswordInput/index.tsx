import React, { useState, useRef } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Container } from './styled';

interface IInputProps {
    placeholder: string
    type: string
    name: string
}

export default function PasswordInput({ placeholder, type, name}: IInputProps) {

    const [passwordShow, setPasswordShow] = useState(false)

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    };

    return (
        <Container>
            <input type={passwordShow ? 'password' : 'text'} name="password" placeholder={placeholder}/>
            <button type="button" onClick={togglePasswordVisiblity}>{passwordShow ? (<FiEye/>) : (<FiEyeOff/>)}</button>
        </Container>
    );
}