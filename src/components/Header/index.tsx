import React, { useCallback } from 'react'
import { Container } from './styled'
import { FiMenu, FiUser, FiLogOut } from 'react-icons/fi';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import mrkLogo from '../../assets/mrkLogo.png'
import { useAsideBar } from '../../hooks/asideBarHook';
import AsideBar from '../AsideBar';

function Header() {

  const { turnOnAsideBar } = useAsideBar()

  const handleOpenSideBar = () => {
    turnOnAsideBar()
  }

  const history = useHistory()

  const handleLogout = useCallback(() => {
    Swal.fire({
      title: 'Deseja realmente sair da plataforma?',
      showCancelButton: true,
      confirmButtonText: `Sim`,
      confirmButtonColor: '#008080',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        history.push('/')
      }
    })

  }, [])

  return (
    <Container>
      <div>
        <button type='button' onClick={handleOpenSideBar}>
          <FiMenu size="24" />
        </button>
        <img src={mrkLogo} alt="Market" />
      </div>
      <div>
        <FiUser size="20" /> Bem vindo(a), User
        <button type="button" onClick={handleLogout}>
          <FiLogOut size="20" />
        </button>
      </div>
    </Container>
  )
}

export default Header