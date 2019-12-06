//var projeto = require('../app/models/projeto');

//Aqui estamos declarando as dependências necessárias para realizar os nossos testes!
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);


/*
 * Teste da rota: /GET
 */

describe('/GET horario', function() {
    it('Deve retornar todos os horários', function(done) {
        chai.request(server)
        .get('/horarios')
        .end(function(error, res) {
            console.log(res.body)

            //Se tudo der certo deve retornar o status: 200 - OK
            res.should.have.status(200);
            //E em seguida retornar em um array todos os projetos cadastrados na base de dados:
            res.body.should.be.a('array');
            //res.body.length.should.be.eql(0);
        done();
        });
    });
});


/*
 * Teste da rota: /POST
 */
/*
describe('/POST projeto', function() {
    it('Deve Criar um Projeto', function(done) {
        var horario = {
            data: "01/10/2018",
            hora_inicio: "22",
            hoar_fim: "23",
            descricao:"testesssss",
        } 
        chai.request(server)
        .post('/horario')
        .send(horario)
        .end(function(error, res) {
            res.should.have.status(200);
            res.body.should.be.a('object');
            console.log(horario);
        done();
        }); 
    });
});
*/

/** 
 * Teste da rota: /GET/:id
 */
/*
describe('/GET/:id horario', function() {
    it('Deve retornar um horario dado o id', function(done) {
        chai.request(server)
        .get('/horario/' + 5)
        .end(function(error, res) {
            console.log(res.body)

            //Se tudo der certo deve retornar o status: 200 - OK
            res.should.have.status(200);
            //E em seguida retornar em um array todos os projetos cadastrados na base de dados:
            res.should.be.a('object');
            //res.body.length.should.be.eql(0);
        done();
        });
    });
});
/*
/** 
 * Teste da rota: /PUT/:id
 */
/*
describe('/PUT/:id horarios', function () {
    it('Deve atualizar um horario dado o id', function (done) {
        var horario = {
            descricao: "Teste Atualizacao"
        }
        chai.request(server)
            .put('/horario/' + 14)
            .send(horario)
            .end(function (error, res) {
                res.should.have.status(200);
                res.body.should.be.a('object');
                console.log(horario);
                done();
            });
    });
});
*/

/** 
 * Teste da rota: /DELETE/:id
 */
/*
describe('/DELETE/:id horario', function () {
    it('Deve excluir um horario dado o id', function (done) {
            chai.request(server)
                .delete('/horario/' + 13)
                .end(function (error, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
    });
});*/