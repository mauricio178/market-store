import React, { Children, useState } from 'react'
import { FiChevronUp, FiHeart, FiSliders, FiUser } from 'react-icons/fi';
import { Container } from './styled';
import { useUserMenu } from '../../hooks/userMenuHook';
import UserMenuItem from '../UserMenuItem';


export default function UserMenu() {

    const user = localStorage.getItem('@market/name')

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
                    <h4>Olá, {user}</h4>
            </header>
            <body>
                <UserMenuItem
                    icon={<FiSliders />}
                    path="/productList"
                    label="Filtro"
                />
                <UserMenuItem
                    icon={<FiUser />}
                    path="/profile-user"
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
