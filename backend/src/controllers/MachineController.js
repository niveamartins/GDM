const connection = require('../database/connection');

function displayTime() {
    var str = "";

    var currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()
    var seconds = currentTime.getSeconds()
    var day = currentTime.getUTCDate()
    var month = currentTime.getMonth()
    var year = currentTime.getFullYear()

    if (minutes < 10) {
        minutes = "0" + minutes
    }
    if (seconds < 10) {
        seconds = "0" + seconds
    }
    
    month+=1

    str += hours + ":" + minutes + ":" + seconds + " ";
    
    str = day + " " + month + " " + year + " " + str;

    return str;
}

module.exports = {
    async index(req, res) {
        const machines = await connection('machine').select('*');

        machines.forEach(function(data, index) {
            if (machines[index].isWorking === '1' || machines[index].isWorking === true || machines[index].isWorking === 1) {
                machines[index].isWorking = 'Disponível';
            } else {
                machines[index].isWorking = 'Em manutenção';
            }
        });

        return res.json(machines);
    },

    async create(req, res) {
        const { name, lab_id, isWorking, extras } = req.body;
        const updated_to = displayTime();

        
        const id = await connection('machine').insert({
            updated_to,
            name,
            lab_id,
            isWorking,
            extras

        });

        return res.json({ id });
    },

    async delete(req, res) {
        const { id } = req.params;
    
        await connection("machine")
          .where("id", id)
          .delete();
    
        return res.status(204).send();
      },
    
    async update(req, res) {
        const { id, isWorking, extras } = req.body;

        await connection("machine")
        .where("id", id)
        .update("updated_to", displayTime());

        await connection("machine")
        .where("id", id)
        .update("isWorking", isWorking);

        await connection("machine")
        .where("id", id)
        .update("extras", extras);

        return res.status(204).send();
    },

    async getMachine(req, res) {
      const { id } = req.params;
        
      const machine = await connection("machine")
      .where("id", id)
      .select('*')
      .first();

        if (machine.isWorking === '1' || machine.isWorking === true || machine.isWorking === 1) {
            machine.isWorking = 'Disponível';
        } else {
            machine.isWorking = 'Em manutenção';
        }

      return res.json(machine);
    },

    async brokenMachines(req,res){
        const machines = await connection('machine')
        .where("isWorking", false)
        .select('*');

        machines.forEach(function(data, index) {
            if (machines[index].isWorking === '1' || machines[index].isWorking === true || machines[index].isWorking === 1) {
                machines[index].isWorking = 'Disponível';
            } else {
                machines[index].isWorking = 'Em manutenção';
            }
        });

        return res.json(machines);
        
    }

    

}