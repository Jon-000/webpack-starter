/*
* PostCSS is a tool for transforming styles with JS plugins.
* These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
* https://github.com/postcss/postcss
*/
module.exports = {
    plugins: {
        'autoprefixer': {
          browsers: ['Android >= 4.0', 'iOS >= 7']
        },
        'postcss-pxtorem': {
          rootValue: 16,//结果为：设计稿元素尺寸/16，比如元素宽320px,最终页面会换算成 20rem
          propList: ['*']
        }
      }
};
