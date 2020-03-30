const connection = require('../database/connection');

module.exports = {
    async index(req, res) {
        const users = await connection('user').select('*');

        return res.json(users);
    },
    async create(req, res) {
        const { name,
                email,
                telephone,
                password,
                isTechnician } = req.body;
        
        const id = await connection('user').insert({
            name,
            email,
            telephone,
            password,
            isTechnician

        });

        return res.json({ id });
    }
}