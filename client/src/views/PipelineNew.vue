<template>
  <div class="">
    <form v-on:submit.prevent="create">
      <h1>This is a new pipeline page</h1>
      <div class="row" v-for="field in fields" :key="field.label">
        <label>
          {{ field.label }}
          <component v-if="field.component" :is="field.component" v-model="field.value"></component>
          <input v-else type="text" v-model="field.value">
        </label>
      </div>
      <button type="submit" class="btn">
        Create
      </button>
    </form>
  </div>
</template>

<script>
import TaskListSelector from '../components/tasks/TaskListSelector.vue';

export default {
  name: 'PipelineNew',
  components: { TaskListSelector },
  computed: {
    request() {
      const result = {};
      this.fields.forEach((v) => {
        result[v.name] = v.value;
      });
      return result;
    },
  },
  data() {
    return {
      fields: [
        {
          label: 'Name', name: 'name', value: null, error: null,
        },
        {
          label: 'Tasks', name: 'tasks', value: null, error: null, component: TaskListSelector,
        },
      ],
    };
  },
  methods: {
    create() {
      this.$apiService.get('pipeline').add(this.request);
    },
  },

};
</script>

<style scoped>

</style>
