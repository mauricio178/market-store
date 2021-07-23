import React, { useState } from 'react'
import DefaultBackgroundHome from '../../components/DefaultBackgroundHome'
import { Body, Container, Header } from './styled'
import { api } from '../../services/api'
import { DivButton } from './styled'
import { FiEdit } from 'react-icons/fi'


function ProfileUser() {

    function handleOpenEditForm() {
        alert('form')
    }

    return (
        <DefaultBackgroundHome>
            <Container>
                <Header>
                    <h1>My Profile</h1>
                </Header>
                <Body>
                    <div>
                        <h4>name: </h4>
                        <h4>email: </h4>
                        {/* <h4>Name: {user.map(user => (
                       <label key={user.id}>
                           {user.name}
                       </label> 
                    )} </h4>
                    <h4>Email: {user.map(user => (
                       <label key={user.id}>
                           {user.email}
                       </label> 
                    )} </h4>
                     */}

                    </div>
                    <DivButton>
                        <button onClick={handleOpenEditForm}>Editar<FiEdit /></button>
                    </DivButton>
                </Body>
            </Container>
        </DefaultBackgroundHome >
    )
}

export default ProfileUser
