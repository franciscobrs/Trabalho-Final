const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const HorarioSchema = new mongoose.Schema({

    data: {
        type: Date,
        require: true,
        //default: ("aaaa/mm/dd")
    },
    hora_inicio: {
      type: String,
      require: true,
      minlength: 2,
      maxlength: 2
    },
    hora_fim: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 2
      },
    descricao: {
        type: String,
        required: false,
    },
    ativo: {
        type: Boolean,
        default: true,
        required: false,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },

    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: false
    }


});

HorarioSchema.plugin(mongoosePaginate);

mongoose.model('Horario',HorarioSchema);