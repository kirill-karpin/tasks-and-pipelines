<template>
  <div class="table-container">
    <div class="table-detail">
      <div class="table-row" v-for="(field,index) in fields" :key="index">
        <div class="table-cell">{{ field.label }}</div>
        <div class="table-cell">{{ field.value }}</div>
      </div>
      <div class="table-row">
        <button @click="deleteItem" class="btn red">Delete</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ItemDetail',
  props: ['item', 'header', 'entity'],
  computed: {
    fields() {
      const result = [];
      if (this.item && this.header) {
        this.header.forEach((v) => {
          const item = {
            label: v.label,
            value: this.item[v.fieldName],
          };
          result.push(item);
        });
      }

      return result;
    },
  },
  methods: {
    async deleteItem() {
      const id = this.item._id;
      const result = await this.$apiService.get(this.entity).delete(id);
      if (result.isStatusOk()) {
        this.$router.push('/');
      }
    },
  },
};
</script>
<style scoped lang="scss">
  .table-container {
    display: flex;
    justify-content: center;
  }

  .table-detail {
    display: flex;
    flex-direction: column;

    .table-row {
      display: flex;
      flex-direction: row;
    }

    .table-cell {
      min-width: 100px;
      text-align: left;
      height: 40px;
    }
  }
</style>
