<template>
    <button @click="click()">{{ title }}</button>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      title: 'button',
    };
  },
  methods: {
    click() {
      global.console.log('button click', this.title);
    },
  },
};
</script>

<style scoped>

</style>
