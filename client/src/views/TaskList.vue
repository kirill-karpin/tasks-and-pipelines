<template>
  <div>
    <div class="row">
      <div class="task-item">
        <div class="id">#</div>
        <div class="name">Name</div>
        <div class="">AverageTime</div>
      </div>
    </div>
    <div class="row" v-for="item in items" :key="item.id">
      <Task :item="item"></Task>
    </div>
  </div>
</template>

<script>
import Task from '../components/tasks/Task.vue';

export default {
  name: 'TaskList',
  components: { Task },
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
  .task-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
