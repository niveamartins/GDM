const express = require('express');

const MachineController = require('./controllers/MachineController');
const LabController = require('./controllers/LabController');
const UserController = require('./controllers/UserController');

const authMiddleware = require('./middlewares/auth');


//aqui vamos instanciar o Router do express
const routes = express.Router();


//-------------------Unsecure routes----------------------------//
//Rotas de Usuários
routes.get('/api/users', UserController.index);
routes.post('/api/user', UserController.create);
routes.post('/api/auth', UserController.authenticate);

//-------------------Secure routes--------------------------//
routes.use(authMiddleware);

//Rotas das Máquinas
routes.get('/api/machines', MachineController.index);
routes.get('/api/broken', MachineController.brokenMachines);

routes.post('/api/machine', MachineController.create);
routes.delete('/api/machine/:id', MachineController.delete);
routes.put('/api/machine', MachineController.update);
routes.get('/api/machine/:id', MachineController.getMachine);

//Rotas dos Laboratórios
routes.get('/api/labs', LabController.index);

routes.get('/api/lab/:id', LabController.machinesByLab);
routes.put('/api/lab', LabController.update);
routes.post('/api/lab', LabController.create);





//routes.post('/machines', MachineController.create)
//aqui estamos exportando as rotas criadas nesse arquivo
module.exports = routes;
