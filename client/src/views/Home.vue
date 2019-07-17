<template>
  <div class="home">
    <div v-if="user"> Current user : {{ user.name }}</div>
    <div class="row" v-for="user in users">
      <span>{{ user.name }} </span>
      <span class="btn" @click="select(user)">select</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {},
  data() {
    return {
      user: null,
      users: [],
    };
  },
  methods: {
    select(user) {
      localStorage.setItem('TOKEN', user.token);
      this.fetchData();
    },
    async fetchData() {
      const result = await this.$apiService.get('users').get();
      if (result.isStatusOk()) {
        this.users = result.data.users;
        this.user = result.data.user;
      }
    },
  },
  async created() {
    await this.fetchData();
  },
};
</script>
<style scoped lang="scss">
  .home {
    display: flex;
    flex-direction: column;
    align-items: center;

    .row {
      display: flex;
      flex-direction: row;
      border: 1px solid green;
      justify-content: space-around;
      width: 50%;

      span {
        width: 10%;
        line-height: 40px;
      }
    }
  }

</style>
