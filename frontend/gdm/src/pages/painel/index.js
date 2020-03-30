import React from 'react';

import { Link } from 'react-router-dom';

import './stylePainel.css';

//npm install react-icons
//Importaremos os icons aqui:
import { FaQrcode } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';

import logoImg from '../../assets/logo.png';


function Painel() {
  return (
    <div className="bodyPainel">
        <img className="logoImg" src={logoImg} alt="Logo GDM"></img>
        <h1>Olá, Usuário!</h1>
        <div className="menu">
            <div className= "menuLine">
                <Link to="/qrcode" className="link">
                    <button size="large">
                        <FaQrcode size={30}></FaQrcode>
                        <label>QR Code</label>
                    </button>
                </Link>

                <Link to="/alertas" className="link">
                    <button size="large">
                        <FaBell size={30}></FaBell>
                        <label>Alertas</label>
                    </button>
                </Link>

            </div>
            <div className= "menuLine">
                <Link to="/labs" className="link">
                    <button size="large">
                        <FaCogs size={30}></FaCogs>
                        <label>Laboratórios</label>
                    </button>
                </Link>
                <button size="large">
                    <FaSignOutAlt size={30}></FaSignOutAlt>
                    <label>Sair</label>
                </button>
            </div>
        </div>
        
    </div>
  );
}

export default Painel;