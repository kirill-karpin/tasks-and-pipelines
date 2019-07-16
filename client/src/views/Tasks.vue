<template>
  <div>
    <TasksList :items="items"></TasksList>
  </div>
</template>

<script>
import TasksList from '../components/tasks/TasksList.vue';

export default {
  name: 'Tasks',
  components: { TasksList },
  data() {
    return {
      items: [],
    };
  },
  async created() {
    const result = await this.$apiService.get('task').get();
    if (result.isStatusOk()) {
      this.items = result.data;
    }
  },
};
</script>

<style scoped lang="scss">

</style>
