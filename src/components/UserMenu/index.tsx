import React, { Children, useState } from 'react'
import { FiChevronUp, FiHeart, FiShoppingCart, FiSliders, FiTruck, FiUser } from 'react-icons/fi';
import { useAsideBar } from '../../hooks/asideBarHook';
import { Container } from './styled';
import mrkLogo from '../../assets/mrkLogo.png'
import AsideItem from '../AsideItem';
import { useUserMenu } from '../../hooks/userMenuHook';
import UserMenuItem from '../UserMenuItem';


export default function UserMenu() {

    const { turnOffUserMenu } = useUserMenu()

    const handleCloseUserMenu = () => {
        turnOffUserMenu()
    }

    const { activeUserMenu } = useUserMenu();

    return (
        <Container visible={activeUserMenu}>
            <header>
                <button type='button' onClick={handleCloseUserMenu}>
                    <FiChevronUp size="22" />
                </button>
                    <h4>Olá, User</h4>
            </header>
            <body>
                <UserMenuItem
                    icon={<FiSliders />}
                    path="/productList"
                    label="Filtro"
                />
                <UserMenuItem
                    icon={<FiUser />}
                    path="/productList"
                    label="Meu Perfil"
                />
                <UserMenuItem
                    icon={<FiHeart />}
                    path="/productList"
                    label="Favoritos"
                />
            </body>
        </Container>
    )
}
