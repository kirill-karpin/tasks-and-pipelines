<template>
  <div class="container">
    <div class="row"><router-link to="/tasks-new/">Create task</router-link> </div>
    <TableItems :items="items" :header="header" ></TableItems>
  </div>
</template>

<script>
import TableItems from '../table/TableItems.vue';

export default {
  name: 'TasksList',
  components: { TableItems },
  props: ['items'],
  data() {
    return {
      header: [
        { label: 'ID', fieldName: '_id', handler: this.getUrl },
        { label: 'NAME', fieldName: 'name' },
        { label: 'AVG.TIME', fieldName: 'averageTime' },
      ],
    };
  },
  methods: {
    getUrl(id) {
      return `<a href="/tasks/${id}/">${id}</a>`;
    },
  },
};
</script>

<style scoped>

</style>
