<template>
  <div class="highlight code-block">
    <slot name="code-block" />
  </div>
</template>

<script>
export default {
  name: 'demo-code',
}
</script>

<style lang="scss" scoped>
.code-block {
  border: 1px solid #ebebeb;
  border-radius: 3px;
  div[class*='language-'] {
    border-radius: 0;
    background-color: #fafafa;
    .token.operator,
    .token.entity,
    .token.url {
      color: #55aee4;
    }
    .token.tag,
    .token.attr-name,
    .token.namespace,
    .token.deleted,
    .token.punctuation {
      color: #3182bd;
    }
    .token.string,
    .token.char,
    .token.attr-value,
    .token.regex,
    .token.variable {
      color: #756bb1;
    }
    code {
      color: #55aee4;
    }
  }
  .theme-default-content pre,
  .theme-default-content pre[class*='language-'] {
    margin: 0;
  }
}
</style>