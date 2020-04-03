import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// npm install react-router-dom

// Aqui iremos importar todos os componentes
import Logon from './pages/login';
import QrCode from './pages/qrcode';
import Painel from './pages/painel';
import Alertas from './pages/alertas';
import Maquinas from './pages/maquinas';
import Maquina from './pages/maquina';
import Labs from './pages/labs';
import CreateLab from './pages/createLab';
import CreateMachine from './pages/createMachine';
import EditMachine from './pages/EditMachine';
import Cadastro from './pages/cadastro';


// Aqui definimos todas as rotas. No caso do exact é pq o React vai  
// lendo o inicio da rota apenas, então para não sobrepor  
// as outras rotas, devemos na rota / colocar exact
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/qrcode" component={QrCode} />
                <Route path="/painel" component={Painel} />
                <Route path="/alertas" component={Alertas} />
                <Route path="/maquinas" component={Maquinas} />
                <Route path="/maquina" component={Maquina} />
                <Route path="/labs" component={Labs} />
                <Route path="/createLab" component={CreateLab} />
                <Route path="/createMachine" component={CreateMachine} />
                <Route path="/edit" component={EditMachine} />
                <Route path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter>
    );
}