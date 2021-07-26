import React, { useState, InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { Container } from './styled';

interface IInputProps{
    placeholder: string
    type: string
    name: string
    icon?: React.ComponentType<IconBaseProps>;
}

export default function PasswordInput({ placeholder, type, name, icon: Icon}: IInputProps) {

    const [passwordShow, setPasswordShow] = useState(false)

    const togglePasswordVisiblity = () => {
        setPasswordShow(passwordShow ? false : true);
    };

    return (
        <Container>
            {Icon && <Icon size={18} color="var(--background)"/>}
            <input type={passwordShow ? 'text' : 'password'} name="password" placeholder={placeholder}/>
            <button type="button" onClick={togglePasswordVisiblity}>{passwordShow ? (<FiEyeOff size="18"/>) : (<FiEye size="18"/>)}</button>
        </Container>
    );
}