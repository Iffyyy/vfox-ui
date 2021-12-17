<template>
  <div>
    <VfButton :disabled="true">default(disabled)</VfButton>
    <VfButton type="primary" :disabled="true">primary(disabled)</VfButton>
    <VfButton type="dashed" :disabled="true">dashed(disabled)</VfButton>
    <VfButton type="link" :disabled="true">link(disabled)</VfButton>
    <VfButton type="cloud" :disabled="true">cloud(disabled)</VfButton>
    <VfButton type="ghost" :disabled="true">ghost(disabled)</VfButton>
  </div>
</template>

<script>
  export default {
    title: '2.不可用状态',
  }
</script>

<style lang="scss">
</style>