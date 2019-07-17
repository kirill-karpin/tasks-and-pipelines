<template>
  <form v-on:submit.prevent="create">
    <h1>This is a new task page</h1>
    <div class="row" v-for="field in fields" :key="field.label">
      <label>
        {{ field.label }}
        <input type="text" v-model="field.value">
      </label>
    </div>
    <button type="submit" class="btn">
      Create
    </button>
  </form>
</template>
<script>
export default {
  name: 'TaskNew',
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
          label: 'AverageTime', name: 'averageTime', value: null, error: null,
        },
      ],
    };
  },
  methods: {
    async create() {
      if (this.isValidFields()) {
        const taskRepository = this.$apiService.get('task');
        const result = await taskRepository.save(this.request);
        global.console.log(result);
        if (result.isStatusOk()) {
          global.console.log('success');
        } else {
          global.console.log('error');
        }
      } else {
        global.console.log('form not valid');
      }
    },
    isValidFields() {
      let result = true;
      const data = [];
      this.fields.forEach((v) => {
        const field = v;
        const hasValue = !!field.value;
        field.error = !hasValue;
        data.push(field);
        result = result && hasValue;
      });
      this.fields = data;
      return result;
    },
  },
};
</script>
