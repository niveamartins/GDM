import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import api from '../../services/api';

import './styleLabs.css';

import { FaArrowLeft } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';


function Labs() {
    const [labs, setLabs] = useState([]);

    useEffect(() => {
      try {
         api
        .get('/labs')
        .then(response => {
            setLabs(response.data);
        });
      } catch (err) {
          alert("Não foi possível encontrar os laboratórios");
      }  
    }, [])  
  
  return (
      <div className="bodyLabs">
          <div className="navBar">
            <Link to="/painel">
                <FaArrowLeft size={20} color="#4682B4"></FaArrowLeft>
            </Link>  
            <h2>Laboratórios</h2>
          </div>
          <Link to="/createLab">
            <button>
            <FaPlusCircle size={35}></FaPlusCircle>
            </button>
          </Link>
          <div className="optionsLabs">
          <ul>
                {labs.map(lab => ( 
                    <Link to= {{
                        pathname: "/maquinas",
                        state: [lab.id]
                      }} className="link">   
                    <li key={lab.id}>
                        <div className="lab">
                            <h1>{lab.name}</h1>
                            <p>{lab.location}</p>
                        </div>
                    </li>
                    </Link>    
                ))}
            </ul>
          </div>
      </div>
    
  );
}

export default Labs;