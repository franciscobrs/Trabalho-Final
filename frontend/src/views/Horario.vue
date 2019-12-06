<template>
  <div class="horario">
    <Horario msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Horario from '@/components/Horario.vue';

export default {
  name: 'horario',
  components: {
    Horario,
  },
};
</script>
