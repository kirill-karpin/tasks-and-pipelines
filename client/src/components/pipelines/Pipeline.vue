<template>
    <div>
        <div class="row">Id : {{item.id }}</div>
        <div class="row">Name : {{item.name }}</div>
    </div>
</template>

<script>
export default {
  name: 'Pipeline',
  props: ['item'],
  methods: {
  },
};
</script>

<style scoped>

</style>
