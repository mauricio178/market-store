import React, { useState, useRef }  from 'react'
import { Container} from './styled';

interface IInputProps {
    placeholder: string
    type: string
    name: string
}
 
export default function Input({placeholder, type, name}:IInputProps) {

    

    return (
        <Container>            
            <input placeholder={placeholder} type={type} name={name}/>
        </Container>
    );
}