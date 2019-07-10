<template>
  <div class="task-item">
    <div class="id"><router-link :to="`/task/${item._id}/`">{{ item._id }}</router-link> </div>
    <div class="name">{{ item.name }}</div>
    <div class="">{{ item.averageTime }}</div>
  </div>
</template>

<script>
export default {
  name: 'Task',
  props: ['item'],
};
</script>


