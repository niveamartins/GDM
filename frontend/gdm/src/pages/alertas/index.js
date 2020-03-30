import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import './styleAlertas.css';

import { FaArrowLeft } from 'react-icons/fa';

function Alertas() {
    const [brokenMachines, setbrokenMachine] = useState([]);

    useEffect(() => {
      try {
         api
        .get('/broken')
        .then(response => {
            setbrokenMachine(response.data);
        });
      } catch (err) {
          alert("Não foi possível encontrar as máquinas quebradas");
      }  
    }, [])  

  return (
      <div className="bodyAlertas">
          <div className="navBar">
            <Link to="/painel">
                <FaArrowLeft size={20} color="#4682B4"></FaArrowLeft>
            </Link>  
            <h2>Notificações</h2>
          </div>
          <div className="optionsAlertas">
            <ul>
                {brokenMachines.map(brokenMachine => ( 
                    <Link to= {{
                        pathname: "/maquina",
                        state: [brokenMachine.id]
                      }} className="link">   
                    <li key={brokenMachine.id}>
                        <div className="alerta">
                            <h1>{brokenMachine.name}</h1>
                            <p>Localização</p>
                            <p>{brokenMachine.isWorking}</p>
                        </div>
                    </li>
                    </Link>    
                ))}
            </ul>
          </div>
      </div>
    
  );
}

export default Alertas;