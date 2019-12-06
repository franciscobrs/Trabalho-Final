<template>
  <div id="app">
  <div class="container">
    <table>

      <thead>

        <tr>
          <th> Inicio </th>
          <th> Fim </th>
          <th> Data </th>
          <th> Agendado Por </th>
        </tr>

      </thead>

  <tbody>

  <tr v-for="horario of horarios" :key="horario._id">

    <td>{{ horario.hora_inicio }}</td>
    <td>{{ horario.hora_fim }}</td>
    <td>{{ horario.data }}</td>
    <td>{{ horario.descricao }}</td>
    <td v-if="horario.descricao == null">
      <button v-on:click="A(horario._id)" class="waves-effect btn-small blue">Agendar</button>
    </td>

  </tr>
  <button v-on:click="b" class="waves-effect waves-light btn-small">Adicionar Horário</button>
  <p>Botão somente para teste.</p>
  <br><br>
  <p>Professor,</p>
  <p>Obrigado pelas aulas e concelhos.</p>
  <p>Boas férias e um feliz natal e própero ano novo!!!</p>
    </tbody>

</table>

  </div>

  </div>
</template>

<script>
import Horarios from '../service/horarios';

export default {
  data() {
    return {
      horario: {
        _id: '',
        hora_inicio: '',
        hora_fim: '',
        data: '',
        descricao: '',
        ativo: '',
      },
      horarios: [],
    };
  },
  mounted() {
    this.listar();
  },
  methods: {
    listar() {
      Horarios.lista().then((response) => {
        this.horarios = response.data.docs;
      });
    },
    A(id) {
      window.location.href = `http://localhost:8080/agendar?id=${id}`;
    },
    b() {
      window.location.href = 'http://localhost:8080/criarhorario';
    },
  },
};

</script>

<style lang="scss">
</style>
