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
            console.log(response.data)
            setLabs(response.data);
            console.log(labs)
        });
      } catch (err) {
          alert("Não foi possível encontrar os laboratórios");
      }  
    }, [])  
  
    console.log(labs)

    const getLabsContent = labs => {
      let content = [];
      for (let idx in labs) {
        const item = labs[idx];
        content.push(<Link to= {{
                pathname: "/maquinas",
                state: [item.id]
              }} className="link">   
            <li key={item.id}>
                <div className="lab">
                    <h1>{item.name}</h1>
                    <p>{item.location}</p>
                </div>
            </li>
            </Link>);
      }
      return content;
    };


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
          <ul>{getLabsContent(labs)}
            </ul>
          </div>
      </div>
    
  );
}

export default Labs;
