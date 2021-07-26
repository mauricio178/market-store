import React from 'react'
import { Container} from './styled';

 
export default function ButtonPrimary({ label, type }: any) {

    return (
        <Container type={type}>
            { label }
        </Container>
    );
}