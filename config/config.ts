import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  // layout : {
  //     name : '我的页面',
  //     navTheme:'light'
  // },
  mfsu : {},
  webpack5: {},
  dva : {
    immer : true
  },
  extraPostCSSPlugins: [require("tailwindcss"), require("autoprefixer")]
});
