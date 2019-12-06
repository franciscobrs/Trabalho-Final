//importa o mongoose
const mongoose = require('mongoose');

//importa o mongoose paginate (paginacao)
const mongoosePaginate = require('mongoose-paginate');

//vamos criar o schema (model) do banco de dados
const UserSchema = new mongoose.Schema({
    //vamos passar qual campo quero salvar no banco de dados
    nome: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    cpf: {
        type: Number,
        required: true,
        min: 1,
        max: 99999999999,
        unique: true
    },
    email: {
        type: String,
        required: true,
        uppercase: true,
        minlength: 3,
        maxlength: 100
    },
    endereco: {
        cidade: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 100
        },
        estado: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 2
        },
       
    },
    login: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 12
    },
    senha: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 16
    },
    //vai salvar a data e preencher automaticamente
    createAt: {
        type: Date,
        default: Date.now
    },
});

//adiciona o plugin para permitir paginacao
UserSchema.plugin(mongoosePaginate);

//registro o model na nossa aplicacao
mongoose.model('Usuario', UserSchema);