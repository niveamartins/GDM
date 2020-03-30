import React, { useState, useEffect} from 'react';

import api from '../../services/api';
import { Link } from 'react-router-dom';

import './styleMaquinas.css';

import { FaArrowLeft } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';


function Maquinas(props) {

    const id = props.location.state;
    localStorage.setItem("labId", id);
    const [machines, setMachines] = useState([]);
    const url = '/lab/' + id;
    
    useEffect(() => {
      try {
         api
        .get(url)
        .then(response => {
            setMachines(response.data);
        });
      } catch (err) {
          alert("Não foi possível encontrar as máquinas desse laboratório");
      }  
    }, [])
  return (
      <div className="bodyMaquinas">
          <div className="navBar">
            <Link to="/painel">
                <FaArrowLeft size={20} color="#4682B4"></FaArrowLeft>
            </Link>  
            <h2>Máquinas</h2>
          </div>
          <Link to="/createMachine" className="link">  
            <button>
            <FaPlusCircle size={35}></FaPlusCircle>
            </button>
          </Link>  
          <div className="optionsMaquinas">
            <ul>
                {machines.map(machine => ( 
                        <Link to= {{
                            pathname: "/maquina",
                            state: [machine.id]
                        }} className="link">   
                        <li key={machine.id}>
                            <div className="maquina">
                                <h1>{machine.name}</h1>
                                <p>{machine.isWorking}</p>
                            </div>
                        </li>
                        </Link>    
                    ))}
                </ul>
          </div>
      </div>
    
  );
}

export default Maquinas;