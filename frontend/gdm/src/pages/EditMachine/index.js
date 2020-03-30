import React, {useState} from 'react';
import api from '../../services/api';

import './styleCreate.css';

import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function EditMachine(props) {

    const [extras, setExtras] = useState("");  
    const [isWorking, setIsWorking] = useState("");
    
    const data = props.location.state;
    const id = data[0];

    async function handleCreate(e) {
                
        e.preventDefault();
    
        const data = {
          id,  
          isWorking,
          extras
        };
    
        try {
          api.put("/machine", data);
    
          alert(`A máquina foi editada com sucesso!`);

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
              <h2>Editar máquina</h2>
            </div>
        <div className="create">
            <h2>{data[1]}</h2>
            <form className="formsCreate" onSubmit={handleCreate}>
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
                <button type="submit">Editar Máquina</button>
            </form>
        </div> 
    </div>
  );
}

export default EditMachine;