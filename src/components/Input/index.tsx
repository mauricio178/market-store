import React, { InputHTMLAttributes }  from 'react'
import { IconBaseProps } from 'react-icons/lib';
import { Container} from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    type: string
    name: string
    icon?: React.ComponentType<IconBaseProps>;
}
 
export default function Input({placeholder, type, name, icon: Icon}:IInputProps) {

    return (
        <Container>     
            {Icon && <Icon size={18} color="var(--background)"/>}       
            <input placeholder={placeholder} type={type} name={name}/>
        </Container>
    );
}