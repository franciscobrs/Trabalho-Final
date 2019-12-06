const mongoose = require('mongoose');

const Horario = mongoose.model('Horario');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const horarios = await Horario.paginate({}, { page, limit: 10});

        return res.json(horarios);
    },

    async show(req, res){
        const horario = await Horario.findById(req.params.id);

        return res.json(horario);
    },
    
    async store(req, res){
        const horario = await Horario.create(req.body);

        return res.json(horario);  
    },

    async update(req, res) {
        const horario = await Horario.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(horario); 
    },

    async destroy(req, res){
        await Horario.findByIdAndRemove(req.params.id);

        return res.send('Horário excluido com sucesso!');
    }
} 