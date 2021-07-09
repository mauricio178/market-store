import React, { useEffect, useRef }  from 'react'
import { Container} from './styled';

 
export default function Input({placeholder}: any) {

    return (
        <Container>            
            <input placeholder={placeholder}/>
        </Container>
    );
}