<template>
    <div>
        <div class="row">
            <ButtonCreateTask></ButtonCreateTask>
            <ButtonCreatePipeline></ButtonCreatePipeline>
        </div>
        <div class="row">
            <PipelinesList :items="pipelines"></PipelinesList>
        </div>


    </div>
</template>

<script>
import ButtonCreateTask from './tasks/controls/ButtonCreateTask.vue';
import ButtonCreatePipeline from './pipelines/controls/ButtonCreatePipeline.vue';
import PipelinesList from './pipelines/PipelinesList.vue';

export default {
  name: 'MainBoard',
  components: { PipelinesList, ButtonCreatePipeline, ButtonCreateTask },
  data() {
    return {
      pipelines: [
        {
          id: 1,
          name: 'test',
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
