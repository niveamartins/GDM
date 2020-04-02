const express = require('express');

const MachineController = require('./controllers/MachineController');
const LabController = require('./controllers/LabController');
const UserController = require('./controllers/UserController');

//aqui vamos instanciar o Router do express
const routes = express.Router();


//Rotas das Máquinas
routes.get('/machines', MachineController.index);
routes.get('/broken', MachineController.brokenMachines);

routes.post('/machine', MachineController.create);
routes.delete('/machine/:id', MachineController.delete);
routes.put('/machine', MachineController.update);
routes.get('/machine/:id', MachineController.getMachine);

//Rotas dos Laboratórios
routes.get('/labs', LabController.index);

routes.get('/lab/:id', LabController.machinesByLab);
routes.put('/lab', LabController.update);
routes.post('/lab', LabController.create);

//Rotas de Usuários
routes.get('/users', UserController.index);

routes.post('/user', UserController.create);

routes.post('/auth', UserController.authenticate);



//routes.post('/machines', MachineController.create)
//aqui estamos exportando as rotas criadas nesse arquivo
module.exports = routes;