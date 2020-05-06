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

    const getMachinesContent = machines => {
      let content = [];
      for (let idx in machines) {
        const item = machines[idx];
        content.push(  
          <Link to= {{
              pathname: "/maquina",
              state: [item.id]
          }} className="link">   
          <li key={item.id}>
              <div className="maquina">
                  <h1>{item.name}</h1>
                  <p>{item.isWorking}</p>
              </div>
          </li>
          </Link>    
      )
      }
      return content;
    };

  
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
            <ul>{getMachinesContent(machines)}
                </ul>
          </div>
      </div>
    
  );
}

export default Maquinas;