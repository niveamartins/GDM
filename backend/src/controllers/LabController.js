const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const labs = await connection('lab').select('*');

        return res.json(labs);
    },

    async machinesByLab(req, res) {
      const { id } = req.params;
        
      const machines = await connection("machine")
      .where("lab_id", id)
      .select('*')

      machines.forEach(function(data, index) {
        if (machines[index].isWorking === '1' || machines[index].isWorking === true || machines[index].isWorking === 1) {
            machines[index].isWorking = 'Disponível';
        } else {
            machines[index].isWorking = 'Em manutenção';
        }
        });

      return res.json(machines);
    },

    async update(req, res) {
        const { id, name, location } = req.body;
        
        await connection("lab")
        .where("id", id)
        .update("name", name);

        await connection("lab")
        .where("id", id)
        .update("location", location);

        return res.status(204).send();
    },

    async create(req, res) {
        const { name, location } = req.body;
        
        const id = await connection('lab').insert({
            name,
            location

        });

        return res.json({ id });
    }



}