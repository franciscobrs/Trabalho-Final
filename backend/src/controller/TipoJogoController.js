const mongoose = require('mongoose');

const TipoJogo = mongoose.model('TipoJogo');

module.exports = {
    async index(req, res){
        const { page = 1 } = req.query;
        const tipojogo = await TipoJogo.paginate({}, { page, limit: 10});

        return res.json(tipojogo);
    },

    async show(req, res){
        const tipojogo= await TipoJogo.findById(req.params.id);

        return res.json(tipojogo);
    },
    
    async store(req, res){
        const tipojogo = await TipoJogo.create(req.body);

        return res.json(tipojogo);  
    },

    async update(req, res) {
        const tipojogo = await TipoJogo.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(tipojogo); 
    },

    async destroy(req, res){
        await TipoJogo.findByIdAndRemove(req.params.id);

        return res.send();
    }
} 