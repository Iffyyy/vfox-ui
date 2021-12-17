<script type="text/jsx">
export default {
  name: 'demo-title',
  render(h) {
    return h(
      'h3',
      {
        class: 'demo-title',
        slot: 'title-block',
      },
      this.$slots['title-block']
    )
  },
}
</script>

<style lang="scss">
.demo-title {
  font-size: 22px;
  font-weight: 400;
  color: #1f2f3d;
  margin: 55px 0 20px;
  &::before {
    content: '&';
    color: #409eff;
    margin: 0 5px;
    font-weight: bold;
  }
}
</style>