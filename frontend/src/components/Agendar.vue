<template>
<div id="app">
<div  v-show="horario" class="container">

  <table>

      <thead>

        <tr>
          <th> Inicio </th>
          <th> Fim </th>
          <th> Data </th>
        </tr>

</thead>

  <tbody>

  <tr>

    <td>{{ horario.hora_inicio }}</td>
    <td>{{ horario.hora_fim }}</td>
    <td>{{ horario.data }}</td>
  </tr>

    </tbody>

</table>
<form v-on:submit.prevent="salvar(horario._id)">

<label> Informe seu nome </label>
<input type="text" maxlength="30" minlength="3" v-model="horario_salvar.descricao" required>

<button class="waves-effect waves-light btn-small">Agendar</button>
</form>

</div>

</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      horario_salvar: {
        _id: '',
        hora_inicio: '',
        hora_fim: '',
        data: '',
        descricao: '',
        ativo: '',
      },
      horario: [],
    };
  },
  mounted() {
    this.buscarhorario(this.$route.query.id);
    console.log(this.$route.query.id);
  },
  methods: {
    buscarhorario(id) {
      console.log(id);
      axios.get(`http://localhost:3001/api/horario/${id}`).then((response) => {
        console.log(response);
        this.horario = response.data;
      });
    },
    salvar(id) {
      axios.put(`http://localhost:3001/api/horario/${id}`, {
        hora_inicio: this.horario.hora_inicio,
        hora_fim: this.horario.hora_fim,
        data: this.horario.data,
        descricao: this.horario_salvar.descricao,
        ativo: this.horario.ativo,
      }).then((response) => {
        this.horario = {};
        alert('Agendado com sucesso!');
        window.location.href = 'http://localhost:8080/';
        if (response.horario) {
          alert('Não Agendado');
        }
      });
    },
  },
};

</script>

<style lang="scss">
</style>
