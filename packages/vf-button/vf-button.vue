<script>
import { Button } from 'ant-design-vue'
import 'ant-design-vue/lib/button/style'

export default {
  name: 'VfButton',
  components: {
    AButton: Button
  },
  render() {
    const listeners = {
      ...this.$listeners,
      click: this.btnClick
    }
    const props = {
      ...this.$attrs,
      ...this.$props
    }
    // 保留loading属性会导致显示a-button的默认loading样式
    this.$delete(props, 'loading')
    return (
      <a-button
        class="vf-button"
        on={listeners}
        props={props}
        scopedSlots={this.$scopedSlots}
      >
        {this.$slots.default}
      </a-button>
    )
  },
  data() {
    return {}
  },
  methods: {
    btnClick(event) {
      this.$emit('click', event)
    }
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    ghost: {
      type: Boolean,
      default: false
    },
    htmlType: {
      type: String,
      default: 'button'
    },
    icon: {
      type: String
    },
    size: {
      type: String,
      default: 'default'
    },
    loading: {
      type: [Boolean, Object],
      default: false
    },
    shape: {
      type: String
    },
    type: {
      type: String,
      default: 'default'
    },
    block: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
.ant-btn {
  padding: 0 12px;
  border-color: #cccccc;
  box-shadow: none;
}
.ant-btn:hover {
  border-color: #007aff;
}
.ant-btn-default:hover,
.ant-btn-dashed:hover,
.ant-btn-default:focus,
.ant-btn-dashed:focus {
  color: #333333;
}
.ant-btn-primary,
.ant-btn-danger,
.ant-btn-link {
  border: none;
}
.ant-btn-icon-only {
  padding: 0;
}
.ant-btn.ant-btn-vf {
  color: #007aff;
  border-color: transparent;
  background-color: rgba(0, 122, 255, 0.1);
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 2px;
  outline: none;
  box-shadow: none;
}
.ant-btn.ant-btn-vf:hover,
.ant-btn.ant-btn-vf:focus {
  color: #007aff;
  border: 1px solid #007aff;
  background-color: rgba(0, 122, 255, 0.1);
}
.ant-btn.ant-btn-vf:active {
  color: #007aff;
  border: 1px solid #007aff;
  background-color: rgba(0, 122, 255, 0.1);
}
.ant-btn-ghost {
  color: #007aff;
  border-color: #007aff;
}
.ant-btn-ghost:hover,
.ant-btn-ghost:focus {
  opacity: 0.8;
}
.ant-btn-ghost:active {
  border-color: #007aff;
}
.ant-btn-vf-disabled,
.ant-btn-vf-disabled.active,
.ant-btn-vf-disabled:active,
.ant-btn-vf-disabled:focus,
.ant-btn-vf-disabled:hover,
.ant-btn-vf.disabled,
.ant-btn-vf.disabled.active,
.ant-btn-vf.disabled:active,
.ant-btn-vf.disabled:focus,
.ant-btn-vf.disabled:hover,
.ant-btn-vf[disabled],
.ant-btn-vf[disabled].active,
.ant-btn-vf[disabled]:active,
.ant-btn-vf[disabled]:focus,
.ant-btn-vf[disabled]:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: #ececec;
  border-color: #cccccc;
  text-shadow: none;
  box-shadow: none;
}
.ant-btn-ghost-disabled,
.ant-btn-ghost-disabled.active,
.ant-btn-ghost-disabled:active,
.ant-btn-ghost-disabled:focus,
.ant-btn-ghost-disabled:hover,
.ant-btn-ghost.disabled,
.ant-btn-ghost.disabled.active,
.ant-btn-ghost.disabled:active,
.ant-btn-ghost.disabled:focus,
.ant-btn-ghost.disabled:hover,
.ant-btn-ghost[disabled],
.ant-btn-ghost[disabled].active,
.ant-btn-ghost[disabled]:active,
.ant-btn-ghost[disabled]:focus,
.ant-btn-ghost[disabled]:hover {
  color: rgba(0, 0, 0, 0.25);
  background-color: #ececec !important;
  border-color: #cccccc;
  text-shadow: none;
  box-shadow: none;
}
</style>