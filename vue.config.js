// vue.config.js
module.exports = {
    // 选项...
    publicPath:'/',
    outputDir:'dist',
    assetsDir:'',
    productionSourceMap:false,
    chainWebpack: config => {
        const svgRule = config.module.rule('svg')

        // 清除已有的所有 loader。
        // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
        svgRule.uses.clear()

        // 添加要替换的 loader
        svgRule
            .use('vue-svg-loader')
            .loader('vue-svg-loader')
    },
    css:{
        modules:true,
        loaderOptions: {
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            },
            // 给 sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/variables.scss` 这个文件
                data: `@import "~@/assets/styles/variables.scss";`
            }
        }
    }
}