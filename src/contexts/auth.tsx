import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export default function AuthContext() {

  // const username = localStorage.getItem('@welcome-app/username');

  // function handleSubmit(e: any) {
  //     e.preventDefault(); 
  //     const username = e.target.elements.username.value;
  //     localStorage.setItem('@welcome-app/username', username);
  //     window.location.reload();
  //   }
  
  //   function handleLogout() {
  //     localStorage.removeItem('@welcome-app/username');
  //     window.location.reload();
  //   }

  //   if (username !== null) {
  //     return (
  //       <div style={styles.container}>
  //         <p>Bem vindo {username}</p>
  //         <button onClick={handleLogout} style={styles.submitButton}>Sair</button>
  //       </div>
  //     );
  //   }


  //   return (
  //     <form style={styles.container} onSubmit={handleSubmit}>
  //       <input style={styles.username} type="text" name="username" placeholder="Nome de usuário" required />
  //       <button type="submit" style={styles.submitButton}>Entrar</button>
  //     </form>
  //   );

}