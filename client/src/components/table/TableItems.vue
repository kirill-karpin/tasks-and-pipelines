<template>
  <div class="table-container">
    <div class="table">
      <div class="table-row header" v-if="header">
        <div class="table-cell" v-for="item in header" :key="item.label">
          {{ item.label }}
        </div>
      </div>
      <div class="table-row" v-for="item in tableItems" :key="item.id">
        <template v-for="(value, index) in item">
          <component v-if="value.component" :is="value.component" :key="index" :item="value.item">
          </component>
          <div v-else class="table-cell" v-html="value" :key="index"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableItems',
  props: ['items', 'header'],
  computed: {
    tableItems() {
      const result = [];
      if (this.header && this.items) {
        this.items.forEach((v) => {
          const item = {};
          this.header.forEach((field) => {
            if (field.handler) {
              item[field.fieldName] = field.handler(v[field.fieldName]);
            } else if (field.component) {
              item[field.fieldName] = {
                component: field.component,
                item: v,
              };
            } else {
              item[field.fieldName] = v[field.fieldName];
            }
          });
          result.push(item);
        });
      }
      return result;
    },
  },
};
</script>

<style scoped lang="scss">
  .table-container {
    display: flex;
    justify-content: center;
  }

  .table {
    display: table;
    flex-direction: column;

    .table-row {
      display: table-row;
      text-align: center;
    }

    .table-cell {
      display: table-cell;
      text-align: center;
      height: 40px;
      min-width: 100px;
    }

    .header {
      font-weight: bold;
      text-align: center;
    }

  }
</style>
