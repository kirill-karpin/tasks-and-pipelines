<template>
    <div>
        <div class="row">Pipelines</div>
        <div class="row">
            <div class="items"
                 v-for="item in items"
                 :key="item.id">
                <Pipeline :item="item"></Pipeline>
            </div>
        </div>
    </div>
</template>

<script>
import Pipeline from './Pipeline.vue';

export default {
  name: 'PipelinesList',
  components: { Pipeline },
  props: ['items'],
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
