import React, {useState} from 'react';
import api from '../../services/api';

import './styleCreate.css';

import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function CreateMachine() {

    const [name, setName] = useState("");
    const [extras, setExtras] = useState("");  
    const [isWorking, setIsWorking] = useState("");
    
    const lab_id = localStorage.getItem('labId');

    async function handleCreate(e) {
                
        e.preventDefault();
    
        const data = {
          name,
          lab_id,
          isWorking,
          extras

        };
    
        try {
          api.post("/machine", data);
    
          alert(`A máquina foi criada com sucesso!`);

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
              <h2>Criar máquina</h2>
            </div>
        <div className="create">
            <form className="formsCreate" onSubmit={handleCreate}>
                <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)}></input>
               <div className="Radio">
                <p>Estado da Máquina</p>
                <label>
                    <input type="radio"
                    value="true"
                    name="isWorking"
                    onChange={e => setIsWorking(1)}/>
                    Funcionando
                </label>
                
                <label>
                    <input type="radio"
                     value="false"
                     name="isWorking"
                    onChange={e => setIsWorking(0)}/>
                    Em Manutenção
                </label>
                </div>
                <input type="text" placeholder="Observações" value={extras} onChange={e => setExtras(e.target.value)}></input>
                <button type="submit">Criar Máquina</button>
            </form>
        </div> 
    </div>
  );
}

export default CreateMachine;