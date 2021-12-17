<template>
  <div class="demo-item">
    <title-block>
      <slot slot="title-block" name="demo-title"></slot>
    </title-block>
    <!-- 组件展示 -->
    <div class="demo-block" :class="[blockClass, {'demo-block_hover': hovering}]">
      <!-- 组件模块预览 -->
      <div class="demo-component_view">
        <slot name="component-body"></slot>
      </div>
      <!-- 组件代码展示 -->
      <div class="demo-component_code" ref="codeRefs">
        <!-- 组件代码控制（显示/隐藏） -->
        <div class="demo-component_footer" @click="isExpanded = !isExpanded">
          <span class="text">{{controlText}}</span>
        </div>
        <span class="code-copy" type="copy" title="复制代码" @click="copyCode('.code-copy')" >复制代码</span>
        <!-- 组件描述 -->
        <slot name="component-remark"></slot>
        <!-- 组件示例 -->
        <code-block ref="codeBlock">
          <slot slot="code-block" name="component-code"></slot>
        </code-block>
      </div>
      <!-- 组件代码控制（显示/隐藏） -->
      <div class="demo-component_footer" ref="footer" @click="isExpanded = !isExpanded">
        <span class="text">{{controlText}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import titleBlock from './demo-title'
import codeBlock from './demo-code'
import Clipboard from 'clipboard'

export default {
  name: 'demoBlock',
  components: {
    codeBlock,
    titleBlock,
  },
  data() {
    return {
      hovering: false,
      blockClass: null,
      fixedControl: false, // 默认不固定
      isExpanded: false, // 默认隐藏
      scrollParent: null,
    }
  },
  computed: {
    controlText() {
      return this.isExpanded ? '隐藏代码' : '显示代码'
    },
    // 组件代码展示元素
    codeViewEle() {
      return this.$el.getElementsByClassName('demo-component_code')[0]
    },
    codeViewHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight + this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
    },
  },
  watch: {
    isExpanded(val) {
      this.codeViewEle.style.height = val ? `${this.codeViewHeight + 1}px` : '0'

      if (!val) {
        this.fixedControl = false
        this.$refs.footer.style.left = '0'
        this.removeScrollHandler()
        return
      }

      setTimeout(() => {
        this.scrollParent = document.querySelector('.theme-container > .page')
        this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler)
        this.scrollHandler()
      }, 200)
    },
  },
  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName('highlight')[0]
      if (this.$el.getElementsByClassName('description').length === 0) {
        highlight.style.width = '100%'
        highlight.borderRight = 'none'
      }
    })
  },
  methods: {
    scrollHandler() {
      const { top, bottom, left } = this.$refs.codeRefs.getBoundingClientRect()
      this.fixedControl = bottom > document.documentElement.clientHeight && top + 100 <= document.documentElement.clientHeight
    },
    removeScrollHandler() {
      this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler)
    },
    copyCode(key) {
      const copyDom = this.$refs.codeBlock.$el
      let clipboard = new Clipboard(key, {
        text: function () {
          return copyDom.innerText
        },
      })
      clipboard.on('success', (e) => {
        alert('代码复制成功')
        clipboard.destroy()
      })
      clipboard.on('error', (e) => {
        alert('代码复制失败')
        clipboard.destroy()
      })
    },
  },
  beforeDestroy() {
    this.removeScrollHandler()
  },
}
</script>
<style>
.theme-default-content pre,
.theme-default-content pre[class*='language-'] {
  margin: 0;
}
</style>
<style lang="scss" scoped>
.demo-item {
  margin-bottom: 30px;
}
.demo-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }
  .demo-component_view {
    padding: 24px;
  }
  .demo-component_code {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
    position: relative;
    .description {
      display: flex;
      box-sizing: border-box;
      font-size: 14px;
      padding: 0 20px;
      line-height: 22px;
      color: #666666;
      word-break: break-word;
      background-color: #ffffff;
      border-bottom: 1px solid #eaeefb;
    }
  }
  .code-block {
    border: none;
    border-radius: 0;
  }
  .demo-component_footer {
    border-top: 1px solid #eaeefb;
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    z-index: 10;
  }
  .is-fixed {
    position: fixed;
    bottom: 0;
    width: 740px;
  }
}

.code-copy {
  color: #b9b9b9;
  cursor: pointer;
  position: absolute;
  right: 10px;
  z-index: 999;

  &:hover {
    color: rgb(66, 149, 243);
  }
}
</style>