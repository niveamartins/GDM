import React from 'react';

import { Link } from 'react-router-dom';

import machineImg from '../../assets/machines.png';
import logoImg from '../../assets/logo.png';

import './styleLogin.css';

function Logon() {
  return (
    <div className="bodyLogin">
        <div className="login">
            <img className="logoImg" src={logoImg} alt="Logo GDM"></img>
            
            <forms className="formsLogar">
                <input placeholder="Usuário"></input>
                <input type="password" placeholder="Senha"></input>
                <Link to="/painel" className="link" >
                  <button type="submit">Logar</button>
                </Link>
            </forms>
        </div>

        <img className="machineImg" src={machineImg} alt="Machines"></img> 
    </div>
  );
}

export default Logon;