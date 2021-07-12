import React, { Children, useState } from 'react'
import { FiBox, FiChevronLeft, FiHeart, FiPieChart } from 'react-icons/fi';
import { useAsideBar } from '../../hooks/asideBarHook';
import { Container } from './styled';
import mrkLogo from '../../assets/mrkLogo.png'
import AsideItem from '../AsideItem';


export default function AsideBar() {

    const { turnOffAsideBar } = useAsideBar()

    const handleCloseSidebar = () => {
        turnOffAsideBar()
    }

    const { activeSidebar } = useAsideBar();

    return (
        <Container visible={activeSidebar}>
            <header>
                <img src={mrkLogo} alt="Market"/>
                <button type='button' onClick={handleCloseSidebar}>
                    <FiChevronLeft size="32" />
                </button>
            </header>
            <body>
                <AsideItem
                    icon={<FiBox/>}
                    path="/productList"
                    label="Produtos"
                />
                <AsideItem
                    icon={<FiPieChart/>}
                    path="/productList"
                    label="Relatórios"
                />
                <AsideItem
                    icon={<FiHeart/>}
                    path="/productList"
                    label="Favoritos"
                />
            </body>
        </Container>
    )
}
