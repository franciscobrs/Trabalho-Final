const express = require('express');
const routes = express.Router();


const HorarioController = require('./controller/HorarioController');
const UsuarioController = require('./controller/UsuarioController');
const TipoJogoController = require('./controller/TipoJogoController');

routes.get("/horarios", HorarioController.index);
routes.get("/horario/:id", HorarioController.show);
routes.post("/horarios", HorarioController.store);
routes.put("/horario/:id", HorarioController.update);
routes.delete("/horario/:id", HorarioController.destroy);

routes.get("/usuarios", UsuarioController.index);
routes.get("/usuarios/:id", UsuarioController.show);
routes.post("/usuarios", UsuarioController.store);
routes.put("/usuarios/:id", UsuarioController.update);
routes.delete("/usuarios/:id", UsuarioController.destroy);

routes.get("/tipojogos", TipoJogoController.index);
routes.get("/tipojogo/:id", TipoJogoController.show);
routes.post("/tipojogo", TipoJogoController.store);
routes.put("/tipojogo/:id", TipoJogoController.update);
routes.delete("/tipojogo/:id", TipoJogoController.destroy);

module.exports = routes;