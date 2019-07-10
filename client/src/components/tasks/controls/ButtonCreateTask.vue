<script>
import Button from '../../controls/Button.vue';

export default {
  name: 'ButtonCreateTask',
  extends: Button,
  data() {
    return {
      title: 'Create task',
    };
  },
  methods: {
    click() {
      this.$events.$emit('show-modal', {
        title: this.title,
        content: 'Test',
      });
    },
  },
};
</script>

<style scoped>

</style>
