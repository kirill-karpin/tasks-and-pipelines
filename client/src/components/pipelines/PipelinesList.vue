<template>
  <div class="container">
    <div class="row">
      <router-link to="/pipelines-new/">Create pipeline</router-link>
    </div>
    <TableItems :items="items" :header="header"></TableItems>

  </div>
</template>

<script>
import TableItems from '../table/TableItems.vue';
import ButtonRunPipeline from './controls/ButtonRunPipeline.vue';

export default {
  name: 'PipelinesList',
  components: { TableItems },
  data() {
    return {
      header: [
        { label: 'ID', fieldName: '_id', handler: this.getUrl },
        { label: 'NAME', fieldName: 'name' },
        { label: 'AVG.TIME', fieldName: 'averageTime' },
        { label: 'IS_RUN', fieldName: 'isRun', component: ButtonRunPipeline },
      ],
      items: [],
    };
  },
  methods: {
    getUrl(id) {
      return `<a href="/pipelines/${id}/">${id}</a>`;
    },
  },
  async created() {
    const result = await this.$apiService.get('pipeline').get();
    if (result.isStatusOk()) {
      this.items = result.data;
    }
  },
};
</script>

<style scoped>

</style>
