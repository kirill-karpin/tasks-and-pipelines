<template>
  <div class="task-item">
    <ItemDetail :item="item" :header="header" :entity="entity" ></ItemDetail>
  </div>
</template>

<script>
import ItemDetail from '../table/ItemDetail.vue';

export default {
  name: 'Task',
  components: { ItemDetail },
  props: ['item'],
  data() {
    return {
      entity: 'task',
      header: [
        { label: 'ID', fieldName: '_id' },
        { label: 'NAME', fieldName: 'name' },
        { label: 'AVG.TIME', fieldName: 'averageTime' },
      ],
    };
  },
};
</script>
