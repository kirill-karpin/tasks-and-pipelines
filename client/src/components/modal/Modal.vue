<template>
    <div v-if="!!title"
         class="overlay">
        <div class="modal">
            <div class="row">
                <h3 class="title">{{ title }}</h3>
                <div class="cross"
                     @click="closeModal">X</div>
            </div>

            <div class="row">
                <div class="content">
                    {{ content }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      title: null,
      content: null,
    };
  },
  methods: {
    closeModal() {
      this.title = null;
      this.content = null;
    },
    showModal(event) {
      this.title = event.title;
      this.content = event.content;
    },
  },
  created() {
    this.$events.$on('show-modal', this.showModal);
    this.$events.$on('close-modal', this.closeModal);
  },
};
</script>

<style scoped
       lang="scss">
    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #00000038;
        display: flex;
        justify-content: center;
        align-items: center;

        .modal {
            position: relative;
            background: white;
            min-width: 500px;
            min-height: 200px;
            display: flex;
            flex-direction: column;

            .cross {
                position: absolute;
                right: 10px;
                top: 10px;
            }
        }
    }
</style>
