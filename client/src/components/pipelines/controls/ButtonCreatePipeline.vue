<script>
import Button from '../../controls/Button.vue';


export default {
  name: 'ButtonCreatePipeline',
  extends: Button,
  data() {
    return {
      title: 'Create pipeline',
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
