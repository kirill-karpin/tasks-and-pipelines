<template>
  <div>
    <div class="select-panel">
      <div class="left panel">
        <div class="title">
          Tasks
        </div>
        <div class="item" v-for="item in items" :key="item.id" @click="selectItem(item);">
          {{ item.name }} : {{ item.averageTime}}
        </div>
      </div>
      <div class="right panel">
        <div class="title">
          Tasks to pipeline. Time : {{ totalTime }}
        </div>
        <div class="item" v-for="(item,index) in selected"
             :key="item.id" @click="removeItem(index)">
          <span>{{ index + 1 }}</span>
          <span>{{ item.name }}</span>
          <span>{{ item.averageTime}}</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import TasksList from './TasksList.vue';

export default {
  name: 'TaskListSelector',
  extends: TasksList,
  props: ['value'],
  data() {
    return {
      totalTime: 0,
      selected: [],
    };
  },
  methods: {
    emit() {
      let totalTime = 0;
      this.selected.forEach((v) => {
        totalTime += v.averageTime;
      });
      this.totalTime = totalTime;
      this.$emit('input', this.selected);
    },
    selectItem(item) {
      this.selected.push(item);
      this.emit();
    },
    removeItem(index) {
      const newSelected = [];
      this.selected.forEach((v, k) => {
        if (k !== index) {
          newSelected.push(v);
        }
      });
      this.selected = newSelected;
      this.emit();
    },
  },
};
</script>

<style scoped lang="scss">
  .select-panel {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 10px;

    .item {
      border: 1px solid #42b983;
      margin: 5px;
      padding: 5px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    .panel {
      width: 25%;
      margin: 5px;
      border: 1px solid black;
      padding: 10px;
    }
  }
</style>
