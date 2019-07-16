<template>
  <div>
    <Task :item="item"></Task>
  </div>
</template>

<script>
import Task from '../components/tasks/Task.vue';

export default {
  name: 'TaskDetail',
  components: { Task },
  data() {
    return {
      entity: 'task',
      item: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    const result = await this.$apiService.get('task').getById(id);
    if (result.isStatusOk()) {
      this.item = result.data[0];
    }
  },
};
</script>

<style scoped>

</style>
