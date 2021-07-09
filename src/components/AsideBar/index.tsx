import React, { Children, useState } from 'react'
import { FiX } from 'react-icons/fi';
import { useAsideBar } from '../../hooks/asideBarHook';
import { Container } from './styled';


export default function AsideBar() {

    const { turnOffAsideBar } = useAsideBar()

    const handleCloseSidebar = () => {
        turnOffAsideBar()
    }

    const { activeSidebar } = useAsideBar();

    return (
        <Container visible={activeSidebar}>
            <button type='button' onClick={handleCloseSidebar}>
                <FiX size="24" />
            </button>
        </Container>
    )
}
