export default ({ Vue, options, router, siteData }) => {
    Vue.mixin({
        mounted() {
            import('../../packages/index').then(function (UI) {
                Vue.use(UI.default)
            })
        },
    })
}
