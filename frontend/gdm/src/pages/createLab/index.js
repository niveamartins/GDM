import React, {useState} from 'react';
import api from '../../services/api';

import './styleCreate.css';

import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function CreateLab() {

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");  


    async function handleCreate(e) {
                
        e.preventDefault();
    
        const data = {
          name,
          location
        };
    
        try {
          api.post("/lab", data);
    
          alert(`O laboratório foi criado com sucesso!`);

        } catch (err) {
          console.log(err);
          alert("Erro no cadastro, tente novamente");
        }
      }

  return (
    <div className="bodyCreate">
      <div className="navBar">
              <Link to="/painel">
                  <FaArrowLeft size={20} color="#4682B4"></FaArrowLeft>
              </Link>  
              <h2>Criar laboratório</h2>
            </div>
        <div className="create">
            <form className="formsCreate" onSubmit={handleCreate}>
                <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)}></input>
                <input placeholder="Localização" value={location} onChange={e => setLocation(e.target.value)}></input>
                <button type="submit">Criar Lab</button>
            </form>
        </div> 
    </div>
  );
}

export default CreateLab;