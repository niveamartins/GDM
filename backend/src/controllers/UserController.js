const connection = require('../database/connection');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth')

function generateToken (params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400,
    });
}

module.exports = {
    async index(req, res) {
        const users = await connection('user').select('*');

        return res.json(users);
    },
    async create(req, res) {
        const { name,
                email,
                telephone,
                isTechnician } = req.body;
        let {password} = req.body;
        
        password = await bcrypt.hash(password, 10);
        
        const id = await connection('user').insert({
            name,
            email,
            telephone,
            password,
            isTechnician

        });

        return res.json({id, token: generateToken({id: id})});
    },

    async authenticate(req, res) {
        const {email, password} = req.body;

        const user = await connection('user')
            .where('email', email)
            .select('email', 'password', 'id')
            .first();

        if(!user) {
            return res.status(400).json({ error: "No user found with this id."});
        }

        if(!await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ error: "Wrong Password."});
        }

        return res.json({token: generateToken({id: user.id})});
    }
}