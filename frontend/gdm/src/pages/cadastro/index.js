import React, {useState} from 'react';
import api from '../../services/api';

import './styleCreate.css';

import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

function Cadastro() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    const [password, setPassword] = useState("");  
    const [isTechnician, setIsTechnician] = useState("");

    async function handleCreate(e) {
                
        e.preventDefault();
    
        const data = {
            name,
            email,
            telephone,
            password,
            isTechnician

        };
    
        try {
          api.post("/user", data);
    
          alert(`O usuário foi cadastrado com sucesso!`);

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
              <h2>Cadastro</h2>
            </div>
        <div className="create">
            <form className="formsCreate" onSubmit={handleCreate}>
                <input placeholder="Nome" value={name} onChange={e => setName(e.target.value)}></input>
                <input placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></input>
                <input placeholder="Telefone" value={telephone} onChange={e => setTelephone(e.target.value)}></input>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}></input>
               <div className="Radio">
                <p>Tipo de Usuário</p>
                <label>
                    <input type="radio"
                    value="true"
                    name="isTechnician"
                    onChange={e => setIsTechnician(1)}/>
                    Técnico
                </label>
                
                <label>
                    <input type="radio"
                     value="false"
                     name="isTechnician"
                    onChange={e => setIsTechnician(0)}/>
                    Professor
                </label>
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div> 
    </div>
  );
}

export default Cadastro;