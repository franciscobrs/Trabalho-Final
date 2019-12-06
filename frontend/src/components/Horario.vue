<template>
<div id="app">
<div class="container">

<form v-on:submit.prevent="salvar">

<label> Início </label>
<input type="number" maxlength="2" minlength="1" v-model="horario.hora_inicio" required>
<label> Fim </label>
<input type="number" maxlength="2" minlength="1" v-model="horario.hora_fim" required>
<label> Data </label>
<input type="date" v-model="horario.data" required>
<button class="waves-effect waves-light btn-small">Salvar</button>
</form>
<table>

<thead>

<tr>
<th> Inicio </th>
<th> Fim </th>
<th> Data </th>
<th> ID </th>
</tr>

</thead>

<tbody>

<tr v-for="horario of horarios" :key="horario._id">

<td>{{ horario.hora_inicio }}</td>
<td>{{ horario.hora_fim }}</td>
<td>{{ horario.data }}</td>
<td>{{horario._id}}</td>
<td>
<button @click="editar(horario)" class="waves-effect btn-small blue darken-1">Editar</button>
<button @click="remover(horario._id)" class="btn-small red darken-1">Delete</button>
</td>

</tr>

</tbody>

</table>

</div>

</div>
</template>

<script>
import axios from 'axios';
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
    salvar() {
      axios.post('http://localhost:3001/api/horarios', {
        hora_inicio: this.horario.hora_inicio,
        hora_fim: this.horario.hora_fim,
        data: this.horario.data,
        descricao: this.horario.descricao,
        ativo: this.horarios.ativo,
      }).then((response) => {
        this.horario = {};
        alert('Salvo com sucesso!');
        this.listar();
        if (response.horario) {
          window.location.href = `http://localhost:8080/horarios?id=${response.data.horario.id}`;
        }
      });
    },
    editar(horario) {
      this.horario = horario;
    },

    remover(id) {
      console.log(id);
      axios.delete(`http://localhost:3001/api/horario/${id}`).then((response) => {
        this.horario = {};
        alert('Horário excluido com sucesso');
        this.listar();
        if (response.horario) {
          window.location.href = `http://localhost:8080/horarios?id=${response.data.horario.id}`;
        }
      });
    },
  },
};

</script>

<style lang="scss">
</style>
