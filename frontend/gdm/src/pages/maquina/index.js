import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import './styleMaquina.css';

import { FaEdit } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';

function Maquina(props) {
    //aqui é uma variável que muda seu estado e
    //para mudar o seu valor, precisamos mudar usar a função Set
    const [machines, setMachine] = useState([]); 
    const id = props.location.state;
    const url = '/machine/' + id;
    useEffect(() => {
      try {
         api
        .get(url)
        .then(response => {
            setMachine(response.data);
        });
      } catch (err) {
          alert("Não foi possível encontrar a máquina");
      }  
    }, [])

    return (
        <div className="bodyMaquina">
            <div className="navBar">
              <Link to="/painel">
                  <FaArrowLeft size={20} color="#4682B4"></FaArrowLeft>
              </Link>  
              <h2>Máquina</h2>
            </div>
            <div className="single">
                <h1>{machines.name}</h1>
                <h2>Status:</h2>
                <p>{machines.isWorking}</p>
                <h2>Observações:</h2>
                <p>{machines.extras}</p>
            </div>
            <Link to= {{
                            pathname: "/edit",
                            state: [machines.id, machines.name]
                        }} className="link">
                <button>
                <FaEdit size={35}></FaEdit>
                </button>
            </Link>
        
        </div>
      
    );
  }
  
  export default Maquina;