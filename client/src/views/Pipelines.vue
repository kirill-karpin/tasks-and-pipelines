<template>
  <div>
    <PipelinesList></PipelinesList>
  </div>
</template>

<script>

import PipelinesList from '../components/pipelines/PipelinesList.vue';

export default {
  name: 'Tasks',
  components: { PipelinesList },
  data() {
    return {
      items: [],
    };
  },
};
</script>

<style scoped lang="scss">

</style>
