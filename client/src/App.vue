<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/tasks/">Tasks</router-link> |
      <router-link to="/pipelines/">Pipelines</router-link>
    </div>
    <div class="container">
      <router-view/>
    </div>

    <Modal></Modal>
  </div>
</template>

<style lang="scss">
@import "styles/style";
</style>
<script>
import Modal from './components/modal/Modal.vue';

export default {
  components: { Modal },
};
</script>
