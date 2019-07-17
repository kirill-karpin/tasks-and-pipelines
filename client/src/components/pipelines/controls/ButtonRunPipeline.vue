<template>
  <div class="btn" @click="run">{{ item.isRun ? 'PROGRESS' : 'RUN'}}</div>
</template>

<script>
export default {
  name: 'ButtonRunPipeline',
  props: ['item'],
  methods: {
    run() {
      this.$apiService.get('pipeline').run(this.item._id);
    },
  },
};
</script>

<style scoped>

</style>
