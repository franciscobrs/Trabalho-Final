//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

//vamos criar o schema (model) do banco de dados
const TipoJogoSchema = new mongoose.Schema({
    //vamos passar qual campo quero salvar no banco de dados
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },

    //vai salvar a data e preencher automaticamente
    createAt: {
        type: Date,
        default: Date.now
    },
});

//adiciona o plugin para permitir paginacao
TipoJogoSchema.plugin(mongoosePaginate);

//registro o model na nossa aplicacao
mongoose.model('TipoJogo', TipoJogoSchema);