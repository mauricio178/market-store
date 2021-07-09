import React from 'react'
import { useAlert } from '../../hooks/alertHook'
import { Container, ContainerText, Content } from './styled';


export default function Alert() {

    const { textAlert, activeAlert } = useAlert();

    // put >> onPress={()=> turnOffAlert}

    return (
        <Container visible={activeAlert}>
            <Content>
                <ContainerText>
                    {textAlert}
                </ContainerText>
            </Content>
        </Container>
    )
}
