<script>
import { Button } from 'ant-design-vue'
// import 'ant-design-vue/lib/button/style'

export default {
  name: 'VfButtonGroup',
  components: {
    AButtonGroup: Button.Group
  },
  props: {},
  render() {
    const listeners = {
      ...this.$listeners
    }
    const props = { ...this.$attrs, ...this.$props }
    return (
      <a-button-group
        class="vf-button-group"
        on={listeners}
        props={props}
        scopedSlots={this.$scopedSlots}
      >
        {this.$slots.default}
      </a-button-group>
    )
  },
  data() {
    return {}
  },
  methods: {},
  computed: {}
}
</script>

<style lang="scss">
</style>
