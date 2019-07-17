<template>
  <div>
    <TasksList></TasksList>
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
};
</script>

<style scoped lang="scss">

</style>
