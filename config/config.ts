import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routes,
  fastRefresh: {},
  // layout : {
  //     name : 'ๆ็้กต้ข',
  //     navTheme:'light'
  // },
  mfsu : {},
  webpack5: {},
  dva : {
    immer : true
  },
  extraPostCSSPlugins: [require("tailwindcss"), require("autoprefixer")]
});
